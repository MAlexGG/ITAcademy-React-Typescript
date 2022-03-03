"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        yield fetch('https://icanhazdadjoke.com/', {
            headers: {
                accept: 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
            printJoke(data.joke);
        });
    });
}
;
function getChuckNorrisJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        yield fetch('https://api.chucknorris.io/jokes/random')
            .then(response => response.json())
            .then(data => {
            printJoke(data.value);
        });
    });
}
;
function randomJokes() {
    let randomNumber = Math.floor((Math.random() * (100 - 1 + 1)) + 1);
    if (randomNumber % 2 === 0) {
        getJoke();
    }
    else {
        getChuckNorrisJoke();
    }
    ;
}
;
function printJoke(data) {
    let newJoke = document.getElementById("ct-getJoke");
    let jokeContainer = document.createElement("div");
    jokeContainer.className = "joke";
    let newJokeData = document.createTextNode(data);
    jokeContainer.appendChild(newJokeData);
    newJoke === null || newJoke === void 0 ? void 0 : newJoke.appendChild(jokeContainer);
    let joke = document.getElementsByClassName('joke');
    if (joke.length > 1) {
        newJoke === null || newJoke === void 0 ? void 0 : newJoke.children[0].remove();
    }
    ;
}
;
let reportJokes = [];
const score = (id) => {
    var _a;
    const date = new Date();
    let dateText = date.toISOString();
    let jokeText = (_a = document.querySelector('.joke')) === null || _a === void 0 ? void 0 : _a.innerHTML;
    reportJokes.push({ joke: jokeText, score: id, date: dateText });
    alert('Thank you! please click next to continue');
    console.log(reportJokes);
    return reportJokes;
};
function getWeather() {
    return __awaiter(this, void 0, void 0, function* () {
        yield fetch("http://api.weatherstack.com/current?access_key=2709d4316593d954c6d106bdcf524a66&query=Barcelona")
            .then(response => response.json())
            .then(data => {
            printWeather(data);
        });
    });
}
;
function printWeather(data) {
    let newWeather = document.getElementById('ct-weather');
    let weatherContainer = document.createElement("div");
    weatherContainer.className = "weather";
    let newCondition = document.createTextNode(`${data.location.name}, ${data.current.temperature}°C - ${data.current.weather_descriptions[0]}`);
    weatherContainer.appendChild(newCondition);
    newWeather === null || newWeather === void 0 ? void 0 : newWeather.appendChild(weatherContainer);
}
window.addEventListener('load', getWeather, false);
