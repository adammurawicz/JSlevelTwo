const API_KEY = 'b7125f1e12692942e0d54a9367a68f4e'
const unit = '&units=metric'

export const getWeatherByCity = (city) => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}${unit}`

    return fetch(URL)
        .then(res => res.json())
        .then(data => data
        )
        .catch(error => console.log(`Fatal Error of API: ${error}`))
}