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

const getCountryData = function (country) {
    fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then(function (response) {
            console.log(response);
            return response.json();
        }
        .then(function (data) {
            console.log(data);
            renderCountry(data[0]);
        }
    )
};

getCountryData('portugal');
getCountryData('usa');


