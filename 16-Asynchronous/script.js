'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////


#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <ctype.h>
#include <string.h>

#define MessageSize 100

void reverse_case(char* str) {
    for (int i = 0; str[i]; i++) {
        if (islower(str[i])) {
            str[i] = toupper(str[i]);
        } else if (isupper(str[i])) {
            str[i] = tolower(str[i]);
        }
    }
}

int main() {
    int pipe1[2], pipe2[2];
    pid_t pid;
    char input_str[MessageSize], output_str[MessageSize];

    // Create pipes
    if (pipe(pipe1) == -1 || pipe(pipe2) == -1) {
        perror("Pipe failed");
        exit(1);
    }

    pid = fork();

    if (pid < 0) {
        perror("Fork failed");
        exit(1);
    }

    if (pid > 0) {
        // Parent process
        close(pipe1[0]); // Close reading end of pipe1
        close(pipe2[1]); // Close writing end of pipe2

        // Send a message to child
        printf("Enter a message: ");
        fgets(input_str, MessageSize, stdin);
        input_str[strcspn(input_str, "\n")] = 0;  // Remove newline character
        
        write(pipe1[1], input_str, strlen(input_str) + 1);
        close(pipe1[1]); // Close writing end of pipe1

        // Read modified message from child
        read(pipe2[0], output_str, MessageSize);
        printf("Modified message from child: %s\n", output_str);
        close(pipe2[0]); // Close reading end of pipe2
    } else {
        // Child process
        close(pipe1[1]); // Close writing end of pipe1
        close(pipe2[0]); // Close reading end of pipe2

        // Read message from parent
        read(pipe1[0], input_str, MessageSize);
        close(pipe1[0]); // Close reading end of pipe1

        // Reverse the case
        reverse_case(input_str);

        // Send modified message back to parent
        write(pipe2[1], input_str, strlen(input_str) + 1);
        close(pipe2[1]); // Close writing end of pipe2
    }

    return 0;
}
