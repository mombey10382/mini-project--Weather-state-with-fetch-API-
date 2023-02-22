const weather = new Weather('تهران' , 'تهران');

const ui = new UI();
// weather.changeLocation('شیراز' , 'فارس');

document.addEventListener('DOMContentLoaded',getWeather);

function getWeather(){
    weather.getWeather()
                .then( result => {
                    console.log(result);
                    ui.paint(result , weather.location);
                } )
                .catch( err => console.log(err.message) );
}