const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const weatherVarLib = require('./js/weatherVarLib')

const app = express();

const port = 3000;
const host = 'localhost';

const apiKey = 'fc3c85998a2ef0e974db38b35368cb9d';

app.set('views', './views');
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index', {weather: null ,error: null});
});

app.post('/', (req, res) => {
    let city = req.body.city;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

    request(url, (err, response, body) => {
        if(err){
            res.render('index', {weather: null, imageId:null ,error: 'Error, please try again'});
        } else {
            let weather = JSON.parse(body)
            if (weather.main == undefined){
                res.render('index', {weather: null, imageId:null,  error: 'error'});
            } else {
                let weatherText = `It's ${weather.main.temp} degrees in ${weather.name} and its ${weather.weather[0].main }!`;
                console.log(weatherText);
                //weatherUrl = weatherVarLib.weatherToImage(weather.weather[0].main)
                let t = weatherVarLib.weatherToImage('Rain');
                //console.log(weatherUrl)
                console.log(t)
                res.render('index', {weather: weatherText ,error: null});
            }
        }
    })
});

app.listen(port, host, () => {
    console.log(`server started as ${host} port ${port}`);
});