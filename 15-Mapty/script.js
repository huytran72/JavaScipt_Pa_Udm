'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class Workout {
    date = new Date();
    id = (Date.now() + '').slice(-10);
    clicks = 0;


    constructor(coords, distance, duration) {
        this.coords = coords; // [lat, lng]
        this.distance = distance; // in km
        this.duration = duration; // in min
        this._setDescription();
    }

    _setDescription() {
        // prettier-ignore
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${months[this.date.getMonth()]} ${this.date.getDate()}`;
    }

    click() {
        this.clicks++;
    }
}

class Running extends Workout {
    type = 'cycling';
    constructor(coords, distance, duration, cadence) {
        super(coords, distance, duration);
        this.cadence = cadence;
        this.calcPace();
        this._setDescription();
    }

    calcPace() {
        // min/km
        this.pace = this.duration / this.distance;
        return this.pace;
    }
}

class Cycling extends Workout {
    type = 'cycling';
    constructor(coords, distance, duration, elevationGain) {
        super(coords, distance, duration);
        this.elevationGain = elevationGain;
        this.calcSpeed();
    }

    calcSpeed() {
        // km/h
        this.speed = this.distance / (this.duration / 60);
        return this.speed;
    }
}

const run1 = new Running([39, -12], 5.2, 24, 178);
const cycling1 = new Cycling([39, -12], 27, 95, 523);
console.log(run1, cycling1);


let map, mapEvent;

class App {
    #map;
    #mapEvent;
    #workouts = [];

    constructor() {
        this._getPosition(); 

        form.addEventListener('submit', this._newWorkout.bind(this));
    }
    
    _getPosition() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(this._loadMap,function () {
                        alert('Could not get your position');
                    }
                );
    }

        _loadMap(position) {
            const { latitude } = position.coords;
            const { longitude } = position.coords;
            console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

            const coords = [latitude, longitude];

            this.#map = L.map('map').setView(coords, 13);
            // console.log(map);

            L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            }).addTo(this.#map);

            // Handling clicks on map
            this.#map.on('click', function (mapE) {
                this.#mapEvent = mapE;
                form.classList.remove('hidden');
                inputDistance.focus();
            }
            );
        }

        _showForm() {
            form.classList.remove('hidden');
            inputDistance.focus();
        }

        _toggleElevationField() {
            inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
            inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
        }

        _newWorkout(e) {
            const validInputs = (...inputs) => inputs.every(inp => Number.isFinite(inp));

            e.preventDefault();

            // Get data from form
            const type = inputType.value;
            const distance = +inputDistance.value;
            const duration = +inputDuration.value;
            const { lat, lng } = this.#mapEvent.latlng;
            let workout;

            // Check if data is valid

            // If workout running, create running object
            if (type === 'running') {
                const cadence = +inputCadence.value;
                // Check if data is valid
                if (!Number.isFinite(distance) || !Number.isFinite(duration) || !Number.isFinite(cadence))
                    return alert('Input have to be positive numbers');
                workout = new Running([lat, lng], distance, duration, cadence);
                this.#workouts.push(workout);
            }

            // If workout cycling, create cycling object
            if (type === 'cycling') {
                const elevation = +inputElevation.value;
                // Check if data is valid
                if (!Number.isFinite(distance) || !Number.isFinite(duration) || !Number.isFinite(elevation))
                    return alert('Input have to be positive numbers');
                const workout = new Cycling([lat, lng], distance, duration, elevation);
            }

            // Add new object to workout array
            this.#workouts.push(workout);
            console.log(workout);

            // Render workout on map as marker
            this.renderWorkoutMarker(workout);


            // Hide form + Clear input fields
            inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';

        _renderWorkoutMarker(workout) {
            L.marker(workout.coords)
                .addTo(this.#map)
                .bindPopup(
                    L.popup({
                        maxWidth: 250,
                        minWidth: 100,
                        autoClose: false,
                        closeOnClick: false,
                        className: 'running-popup',
                    })
                )
                .setPopupContent('Workout')
                .openPopup();
        }

        _renderWorkout(workout) {
            let html = `
            <li class="workout workout--${workout.type}" data-id="${workout.id}">
                <h2 class="workout__title">Running on April 14</h2>
                <div class="workout__details">
                    <span class="workout__icon">🏃‍♂️</span>
                    <span class="workout__value">${workout.distance}</span>
                    <span class="workout__unit">km</span>
                </div>
                <div class="workout__details">
                    <span class="workout__icon">⏱</span>
                    <span class="workout__value">${workout.duration}</span>
                    <span class="workout__unit">min</span>
                </div>
            </li>
            `;

            form.insertAdjacentHTML('afterend', html);

            if(workout.type === 'running') {
                html = `
                <li class="workout workout--${workout.type}" data-id="${workout.id}">
                    <h2 class="workout__title">Cycling on April 14</h2>
                    <div class="workout__details">
                        <span class="workout__icon">🚴‍♂️</span>
                        <span class="workout__value">${workout.distance}</span>
                        <span class="workout__unit">km</span>
                    </div>
                    <div class="workout__details">
                        <span class="workout__icon">⏱</span>
                        <span class="workout__value">${workout.duration}</span>
                        <span class="workout__unit">min</span>
                    </div>
                </li>
                `;

            form.insertAdjacentHTML('afterend', html);
            }
        }     
    
    _moveToPopup(e) {
        const workoutEl = e.target.closest('.workout');
        console.log(workoutEl);

        if (!workoutEl) return;

        const workout = this.#workouts.find(work => work.id === workoutEl.dataset.id);
        console.log(workout);

        this.#map.setView(workout.coords, 13, {
            animate: true,
            pan: {
                duration: 1,
            },
        });

        // Using the public interface
        workout.click();
    }
}

const app = new App();













