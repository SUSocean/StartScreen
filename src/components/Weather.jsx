import React from 'react'

export default function Weather() {

    const [weatherData, setWeatherData] = React.useState({
        city: '',
        temp: '',
        icon: '',
        succesFetch: true,
        errorMessage: ''
    })

    React.useEffect(() => {
        navigator.geolocation.getCurrentPosition(getLocation, error)
    }, [])

    function getLocation(position) {

        const { latitude, longitude } = position.coords

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=eb31762f42e8cee24453dc3428978512&units=metric`)
            .then(res => res.json())
            .then(data => {
                setWeatherData((prevState) => (
                    {
                        ...prevState,
                        city: data.name,
                        temp: Math.floor(data.main.temp),
                        icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
                    }
                )
                )
            })
    }


    function error(err) {
        console.log('error')
        setWeatherData((prevState) => (
            {
                ...prevState,
                succesFetch: false,
                errorMessage: err.message
            }
        ))
    }



    return (
        <div className='main--weather'>
            {weatherData.succesFetch && <img className='main--weather-icon' src={weatherData.icon} alt="weather icon" />}
            {weatherData.succesFetch && <h1 className='main--weather-temperature'>{weatherData.temp}</h1>}
            {weatherData.succesFetch && <h1 className='main--weather--city'>{weatherData.city ? weatherData.city : 'loading'}</h1>}
            {!weatherData.succesFetch && <p className='main-wearher--warning'>Unable to receive your geolocation</p>}
            {!weatherData.succesFetch && <p className='main-wearher--warning'>{weatherData.errorMessage}</p>}
        </div>
    )
}