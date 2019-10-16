
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
    
        }
        if (weatherTypeString == "Mist") {
    
        }
        if (weatherTypeString == "Smoke") {
    
        }
        if (weatherTypeString == "Haze") {
    
        }
        if (weatherTypeString == "Dust"){
    
        }
        if (weatherTypeString == "Fog"){
    
        }
        if (weatherTypeString == "Sand"){
    
        }
        if (weatherTypeString == "Dust"){
    
        }
        if (weatherTypeString == "Ash"){
    
        }
        if (weatherTypeString == "Squall"){
    
        }
        if (weatherTypeString == "Tornado"){
    
        }
        if (weatherTypeString == "Clear"){
    
        }
        if (weatherTypeString == "Clouds"){
    
        }
        
        return null;
         
    }
}
