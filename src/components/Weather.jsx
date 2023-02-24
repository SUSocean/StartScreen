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
        <div>
            <h1>{weatherData.city ? weatherData.city : 'loading'}</h1>
            <h1>{weatherData.temp ? `${weatherData.temp} ℃` : 'loading'}</h1>
            {weatherData.icon ? <img src={weatherData.icon} alt="" /> : 'loading'}
        </div>
    )
}