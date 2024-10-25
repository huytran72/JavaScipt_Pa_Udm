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

TEST DATA 1: 52.508, 13.381 (Latitude, Longitude)
TEST DATA 2: 19.037, 72.873
TEST DATA 3: -33.933, 18.474

GOOD LUCK 😀
*/

const whereAmI = function (lat, lng) {
    fetch(`https://geocode.xyz/${lat},${lng}?json=1`)
    .then(res =>  {
        if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
        console.log(res);
        return res.json();
    })
    .then(data => {
        console.log(data);
        console.log(`You are in ${data.city}, ${data.country}`);

        return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .catch(err => console.error(`${err.message}`));
};
whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);





















console.log('Test start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res));
console.log('Test end');

Promise.resolve('Resolved promise 2').then(res => {
    for (let i = 0; i < 1000000000000; i++) {}
    console.log(res);
}
);

console.log('Test end');








new lotteryPromise = new Promise(function(resolve, reject) {

    console.log('Lottery draw is happening 🔮');    
    setTimeout(function() {
        if (Math.random() >= 0.5) {
            resolve('You win!');
        } else {
            reject(new Error('You lost your money!'));
        }
    }, 2000); 
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisifying setTimeout
const wait = function(seconds) {
    return new Promise(function(resolve) {
        setTimeout(resolve, seconds * 1000);
    }
    );
};

wait(1)
    .then(() => {
        console.log('I waited for 1 second');
        return wait(1);
    })
    .then(() => {
        console.log('I waited for 2 seconds');
        return wait(1);
    })
    .then(() => {
        console.log('I waited for 3 seconds');
        return wait(1);
    })
    .then(() => {
        console.log('I waited for 4 seconds');
        return wait(1);
    })
    .then(() => console.log('4 seconds have passed')); 

Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('Problem!')).catch(x => console.error(x));







navigator.geolocation.getCurrentPosition(position => {
    console.log(position), err => console.error(err);
});
console.log('Getting position...');

const getPosition = function() {
    return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    }
)};

getPosition().then(pos => console.log(pos));

const whereAmI1 = function() {
    getPosition()
        .then(pos => {
            const {latitude: lat, longitude: lng} = pos.coords;

            return fetch(`https://geocode.xyz/${lat},${lng}?json=1`);
        })
        .then(res => {
            if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
            return res.json();
        })
        .then(data => {
            console.log(data);
            console.log(`You are in ${data.city}, ${data.country}`);

            return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
        })
        .then(res => {
            if (!res.ok) throw new Error(`Country not found (${res.status})`);
            return res.json();
        })
        .then(data => renderCountry(data[0]))
        .catch(err => console.error(`${err.message}`));
};

btn.addEventListener('click', whereAmI);


console.log('-------------------------');
console.log('Coding Challenge #2');

// Coding Challenge #2

/*
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image (listen for the'error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler.
3. After the image has loaded, pause execution for 2 seconds using the 'wait' function we created earlier.
4. After the 2 seconds have passed, hide the current image (set display CSS property to 'none'), and load a second image (Hint: Use the image element returned by the 'createImage' promise to hide the current image. You will need a global variable for that 😉).
5. After the second image has loaded, pause execution for 2 seconds again.
6. After the 2 seconds have passed, hide the current image.

Test data: Images in the img folder. Test the error handler by passing the wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/

const wait1 = function(seconds) {
    return new Promise(function(resolve) {
        setTimeout(resolve, seconds * 1000);
    });
};

const imgContainer = document.querySelector('.images');

const createImage = function(imgPath) {
    return new Promise(function(resolve, reject) {
        const img = document.createElement('img');
        img.src = imgPath;  

        img.addEventListener('load', function() {
            imgContainer.append(img);
            resolve(img);
        });

        img.addEventListener('error', function() {
            reject(new Error('Image not found'));
        });
    })
};

let currentImage;

createImage('img/img-1.jpg')
    .then(img => {
    console.log('Image 1 loaded');
    return wait1(2);
    })
    .then(() => {
        img1.style.display = 'none';
        return createImage('img/img-2.jpg');
    })
    .then(img => {
        currentImage = img;
        console.log('Image 2 loaded');
        return wait1(2);
    })
    .then(() => {
        currentImage.style.display = 'none';
    })
    .catch(err => console.error(err));








const getPosition2 = function() {
    return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
};


const whereAmI2 = async function(country) {
    try {
    // Geolocation
    const pos = await getPosition();
    const {latitude: lat, longitude: lng} = pos.coords;

    // Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?json=1`);
    if (!resGeo.ok) throw new Error('Problem getting location data');

    const dataGeo = await resGeo.json();
    console.log(dataGeo);
    // const res = await fetch(`https://restcountries.com/v3.1/name/${country}`)
    // console.log(res);

    // Country data
    const res = await fetch(`https://restcountries.com/v3.1/name/${dataGeo.country}`)
    const data = await res.json();
    console.log(data);
    renderCountry(data[0]);

    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
    } catch (err) {
        console.error(err);
        renderCountry(`Something went wrong 💥💥 ${err.message}. Try again!`);

        // Reject promise returned from async function
        throw err;
    }
};
whereAmI2('portugal');
console.log('First');

try {
    let y = 1;
    const x = 2;
    x = 3;
} catch(err) {
    alert(err.message);
}

console.log('1: Will get location');
const city = whereAmI2();


whereAmI2()
    .then(city => console.log(`2: ${city}`))
    .catch(err => console.error(`2: ${err.message}`))
    .finally(() => console.log('3: Finished getting location'))



console.log(city);
console.log('3: Finished getting location');


(async function() {
    try {
        const city = await whereAmI2();


    } catch(err) {
        console.error(err);
    }
    console.log(`2: ${city}`);
    console.log('3: Finished getting location');
})();






// const get3Countries = async function(c1, c2, c3) {
//     try {
//         // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
//         // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
//         // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);

//         Promise.all([ 
//             getJSON(`https://restcountries.com/v3.1/name/${c1}`),
//             getJSON(`https://restcountries.com/v3.1/name/${c2}`),
//             getJSON(`https://restcountries.com/v3.1/name/${c3}`)
//         ]);

//         console.log(data1.capital, data2.capital, data3.capital);

//     } catch(err) {
//         console.error(err);
//     }
// };

const data = await Promise.all([
    getJSON(`https://restcountries.com/v3.1/name/${c1}`),
    getJSON(`https://restcountries.com/v3.1/name/${c2}`),
    getJSON(`https://restcountries.com/v3.1/name/${c3}`)
]);

console.log(data.map(d => d[0].capital));

get3Countries('portugal', 'canada', 'tanzania');







// Promise.race
(async function() {
    const res = await Promise.race([
        getJSON(`https://restcountries.com/v3.1/name/italy`),
        getJSON(`https://restcountries.com/v3.1/name/egypt`),
        getJSON(`https://restcountries.com/v3.1/name/mexico`)
    ]);
    console.log(res[0]);
})();

const timeout = function(sec) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error('Request took too long!'));
        }
        , sec * 1000);
    }
    );
};

Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/tanzania`),
    timeout(0.1)
])
    .then(res => console.log(res[0]))
    .catch(err => console.error(err));

// Promise.allSettled
Promise.allSettled([
    Promise.resolve('Success'),
    Promise.reject('ERROR'),
    Promise.resolve('Another success')
]).then(res => console.log(res));

Promise.all([
    Promise.resolve('Success'),
    Promise.reject('ERROR'),
    Promise.resolve('Another success')
])
.then(res => console.log(res))
.catch(err => console.error(err));

// Promise.any
Promise.any([
    Promise.resolve('Success'),
    Promise.reject('ERROR'),
    Promise.resolve('Another success')
])
.then(res => console.log(res))
.catch(err => console.error(err));




console.log('------------------------');
console.log('Coding Challenge #3');
// Coding Challenge #3
/*
PART 1
Write an async function 'loadNPause' that recreates Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr'.
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise to log the image from the array as soon as it is loaded.
5. Part 2 is more difficult, so don't worry if you don't get it. Just watch the solution.

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/


const wait2 = function(seconds) {
    return new Promise(function(resolve) {
        setTimeout(resolve, seconds * 1000);
    }
    );
}

const imgContainer1 = document.querySelector('.images');

const createImage1 = function(imgPath) {
    return new Promise(function(resolve, reject) {
        const img = document.createElement('img');
        img.src = imgPath;
    
    img.addEventListener('load', function() {
        imgContainer1.append(img);
        resolve(img);
    });

    img.addEventListener('error', function() {
        reject(new Error('Image not found'));
        });
    });
};

let currentImage1;

createImage('img/img-1.jpg')
    .then(img => {
        currentImage1 = img;
        console.log('Image 1 loaded');
        return wait2(2);
    })
    .then(() => {
        currentImage1.style.display = 'none';
        return createImage('img/img-2.jpg');
    })
    .then(img => {
        currentImage1 = img;
        console.log('Image 2 loaded');
        return wait2(2);
    })
    .then(() => {
        currentImage1.style.display = 'none';
    })
    .catch(err => console.error(err));

