async function getJoke() {
    await fetch('https://icanhazdadjoke.com/', {
        headers: {
            accept: 'application/json'
        }
    })
    .then(response => response.json())
        .then(data => {
            printJoke(data.joke);
        });
};

async function getChuckNorrisJoke() {
    await fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
        .then(data => {
            printJoke(data.value);
        });
};

function randomJokes() {
    let randomNumber = Math.floor((Math.random() * (100 - 1 + 1)) + 1);
    if (randomNumber % 2 === 0) {
        getJoke();
    } else {
        getChuckNorrisJoke();
    };
};

function printJoke(data:any) {
    let newJoke = document.getElementById("ct-getJoke");
    let jokeContainer = document.createElement("div");
    jokeContainer.className = "joke";
    let newJokeData = document.createTextNode(data);
    jokeContainer.appendChild(newJokeData);
    newJoke?.appendChild(jokeContainer);
    
    let joke = document.getElementsByClassName('joke');
    if (joke.length > 1) {
        newJoke?.children[0].remove();
    };
}; 

let reportJokes:Array<any> = [];

const score = (id:number) => {
    const date:Date = new Date();
    let dateText:string = date.toISOString();
    let jokeText:string | undefined = document.querySelector('.joke')?.innerHTML;
    reportJokes.push({ joke: jokeText, score: id, date: dateText });
    alert('Thank you! please click next to continue')
    console.log(reportJokes);
    return reportJokes;
};

async function getWeather() {
    await fetch("http://api.weatherstack.com/current?access_key=2709d4316593d954c6d106bdcf524a66&query=Barcelona")
    .then(response => response.json())
        .then(data => {
            printWeather(data);
        });
};

function printWeather(data:any) {
    let newWeather = document.getElementById('ct-weather');
    let weatherContainer = document.createElement("div");
    weatherContainer.className = "weather";
    let newCondition = document.createTextNode(`${data.location.name}, ${data.current.temperature}°C - ${data.current.weather_descriptions[0]}`);
    weatherContainer.appendChild(newCondition);
    newWeather?.appendChild(weatherContainer);
}

window.addEventListener('load', getWeather, false);

