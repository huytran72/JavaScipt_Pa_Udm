'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/name/usa');
data = request.send();
console.log(data);
console.log(request.responseText);

request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console,log(data);

    const html = `
    <article class="country ${className}">
        <img class="country__img" src="${data.flags.png}" />
        <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(data.population / 1000000).toFixed(1)}M people</p>
            <p class="country__row"><span>🗣️</span>${Object.values(data.languages).join(', ')}</p>
            <p class="country__row"><span>💰</span>${Object.values(data.currencies).join(', ')}</p>
        </div>
    </article>
    `;
        countriesContainer.insertAdjacentHTML('beforeend', html);
        countriesContainer.style.opacity = 1;
    });
};

getCountryData('usa');
getCountryData('portugal');
getCountryData('canada');
getCountryData('tanzania');

const getCountryAndNeighbour = function (country) {

    // AJAX call country 1
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
    request.send();

    request.addEventListener('load', function () {
        const [data] = JSON.parse(this.responseText);
        console.log(data);

        // Render country 1
        renderVCountry(data);

        // Get neighbour country (2)
        const [neighbour] = data.borders;

        if (!neighbour) return;

        // AJAX call country 2
        const request2 = new XMLHttpRequest();
        request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
        request2.send();

        request2.addEventListener('load', function () {
            const data2 = JSON.parse(this.responseText);
            console.log(data2);

            renderCountry(data2, 'neighbour');
        });
    });
};

getCountryAndNeighbour('usa');
getCountryAndNeighbour('portugal');

setTimeout(() => {
    console.log('1 second passed'); 
    setTimeout(() => {
        console.log('2 seconds passed');
        setTimeout(() => {
            console.log('3 seconds passed');
            setTimeout(() => {
                console.log('4 seconds passed');
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);



























// const request = new XMLHttpRequest();
// request.open('GET', 'https://restcountries.com/v3.1/name/usa');
// request.send();

const request1 = fetch('https://restcountries.com/v3.1/name/portugal');
console.log(request1);










const renderError = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
    countriesContainer.style.opacity = 1;
};

const getJson = function(url, errorMsg = 'Something went wrong') {
    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error(`Country not found (${response.status})`);
            
            return response.json();
        });
}


const getCountryData = function (country) {
    // Country 1
    fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then(response => response.json(), err => alert(err))
        .then(function (data) {
            renderCountry(data[0]);
            const neighbour = data[0].borders[0];

            if (!neighbour) return;
                throw new Error('No neighbour found!');

            // Country 2
            return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
        })
        .then(response =>  {
            if (!response.ok) throw new Error(`Country not found (${response.status})`);
            
            return response.json();
        })
        .then(data => renderCountry(data, 'neighbour'))
        .catch(err => {
            console.error(`${err} 💥💥💥`);
            renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
        })
        .finally(() => {
            countriesContainer.style.opacity = 1;
        });
};

getCountryData('portugal');
getCountryData('usa');
getCountryData('canada');

btn.addEventListener('click', function () {
    getCountryData('usa');
});


















////////////////////////////
// Coding Challenge #1

/*
In this challenge you will build a function 'whereAmI' which renders a country only based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as input a latitude value ('lat') and a longitude value ('lng') (these are GPS coordinates).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api. The AJAX call will be done to a URL with this format: 'https://geocode.xyz/52.508,13.381?json=1'.
3. Once you have the data, take a look at it in the console to see all the attributes that you retrieved about the provided location. Then, using this data, log a message like this to the console: 'You are in Berlin, Germany'.
4. Chain a .catch method to the end of the promise returned by the fetch method. If there is an error, log 'Something went wrong'.
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API data, and plug it into the countries API that you have been using.
7. Render the country and catch any errors, just like you have done before. The full code is available in the coding challenge starter.





