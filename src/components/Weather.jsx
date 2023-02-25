import React from 'react'

export default function Weather() {

    const [weatherData, setWeatherData] = React.useState({
        city: '',
        temp: '',
        icon: ''
    })

    React.useEffect(() => {
        navigator.geolocation.getCurrentPosition(getLocation)

        function getLocation(position) {
            const { latitude, longitude } = position.coords

            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=eb31762f42e8cee24453dc3428978512&units=metric`)
                .then(res => res.json())
                .then(data => {
                    setWeatherData(() => (
                        {
                            city: data.name,
                            temp: Math.floor(data.main.temp),
                            icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
                        }
                    ))
                })
        }
    }, [])

    return (
        <div className='main--weather'>
            {weatherData.icon ? <img className='main--weather-icon' src={weatherData.icon} alt="weather icon" /> : 'loading'}
            <h1 className='main--weather-temperature'>{weatherData.temp ? `${weatherData.temp} ℃` : 'loading'}</h1>
            <h1 className='main--weather--city'>{weatherData.city ? weatherData.city : 'loading'}</h1>
        </div>
    )
}