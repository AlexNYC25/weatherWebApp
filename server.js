const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const weatherVarLib = require('./js/weatherVarLib')

const app = express();

const port = 3000;
const host = 'localhost';

// INPORTANT: Before running the program add in ypur apikey from openeathermap.org
const apiKey = '********************';

app.set('views', './views');
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index', {weather: null, urlPic: '../images/clear.jpg' ,error: null});
});

app.use(express.static(__dirname + '/public'));

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
                let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}`;
                console.log(weatherText);
                weatherUrl = weatherVarLib.weatherToImage(weather.weather[0].main)
                res.render('index', {weather: weatherText, urlPic: weatherUrl ,error: null});
            }
        }
    })
});

app.listen(port, host, () => {
    console.log(`server started as ${host} port ${port}`);
});