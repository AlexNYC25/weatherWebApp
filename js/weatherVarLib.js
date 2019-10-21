
/*
    Helper function to send back the correct urt of the 
    image of the weather that corresponds to the correct string
    that is passed
*/

module.exports = {
    weatherToImage:function(weatherTypeString) {
        if (weatherTypeString == "Rain"){
            return '../images/rain.jpg'
        }
        if (weatherTypeString == "Thunderstorm"){
            return '../images/thunderstorm.jpg'
        }
        if (weatherTypeString == "Drizzle" ){
            return '../images/drizzle.jpg'
        }
        if (weatherTypeString == "Snow") {
            return '../images/snow.jpg'
        }
        if (weatherTypeString == "Mist") {
            return '../images/mist.jpg'
        }
        if (weatherTypeString == "Smoke") {
            return '../images/smoke.jpg'
        }   
        if (weatherTypeString == "Haze") {
            return '../images/haze.jpg'
        }
        if (weatherTypeString == "Dust"){
            return '../images/dust.jpg'
        }
        if (weatherTypeString == "Fog"){
            return '../images/fog.jpg'
        }
        if (weatherTypeString == "Sand"){
            return '../images/sand.jpg'
        }  
        if (weatherTypeString == "Dust"){
            return '../images/dust.jpg'
        }
        if (weatherTypeString == "Ash"){
            return '../images/ash.jpg'
        }
        if (weatherTypeString == "Squall"){
            return '../images/squall.jpg'
        }
        if (weatherTypeString == "Tornado"){
            return '../images/tornado.jpg'
        }
        if (weatherTypeString == "Clear"){
            return '../images/clear.jpg'
        }
        if (weatherTypeString == "Clouds"){
            return '../images/cloudy.jpg'
        }
        
        return null;
         
    }
}
