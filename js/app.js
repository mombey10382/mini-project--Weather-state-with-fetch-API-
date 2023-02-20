const weather = new Weather('تهران' , 'تهران');

// weather.changeLocation('شیراز' , 'فارس');

document.addEventListener('DOMContentLoaded',getWeather);

function getWeather(){
    weather.getWeather()
                .then( result => console.log(result) )
                .catch( err => console.log(err.message) );
}