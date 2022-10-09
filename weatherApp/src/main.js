import { getWeatherByCity } from './apiService.js'
import { mapListToDOMElements } from './domActions.js'


class WeatherApp {
    constructor() {
        this.viewElems = {}
        this.InitializeApp()
    }
    
    InitializeApp = () => {
        this.connectDOMElements()
        this.setupListeners()
    }
    
    connectDOMElements = () => {
        const listOfIds = Array.from(document.querySelectorAll('[id]')).map(elem => elem.id)
        this.viewElems = mapListToDOMElements(listOfIds)
    }

    setupListeners = () => {
        this.viewElems.searchInput.addEventListener('keydown', this.handleSubmit)
        this.viewElems.searchButton.addEventListener('keydown', this.handleSubmit)
        this.viewElems.returnToSearchBtn.addEventListener('click', this.returnToSearch)
    }

    handleSubmit = () => {
        if (event.type === 'click' || event.key === 'Enter') {
            this.fadeInOut()
            let query = this.viewElems.searchInput.value
            getWeatherByCity(query).then(data => {
            this.displayWeatherData(data)
            })
        }
    }


fadeInOut = () => {
    if(this.viewElems.mainContainer.style.opacity === '1' || this.viewElems.mainContainer.style.opacity === '') {
        this.viewElems.mainContainer.style.opacity = '0'
    } else {
        this.viewElems.mainContainer.style.opacity = '1'
    }
}

switchView = () => {
    if(this.viewElems.weatherSearchView.style.display !== 'none') {
        this.viewElems.weatherSearchView.style.display = 'none'
        this.viewElems.weatherForecastView.style.display = 'block'
    } else {
        this.viewElems.weatherForecastView.style.display = 'none'
        this.viewElems.weatherSearchView.style.display = 'flex'
    }
}

   returnToSearch = () => {
        this.fadeInOut()
        setTimeout(() => {
            this.switchView()
            this.fadeInOut()
        }, 500)
    }

displayWeatherData = data => {
    this.switchView()
    this.fadeInOut()

    this.viewElems.weatherCity.textContent = data.main.name
    this.viewElems.weatherIcon.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
    this.viewElems.weatherIcon.setAttribute('alt', data.weather[0].main)

    this.viewElems.weatherCurrentTemp.textContent = `Current temp: ${data.main.temp.toFixed(1)}°C`
    this.viewElems.weatherMaxTemp.textContent = `Max temp: ${data.main.temp_min.toFixed(1)}°C`
    this.viewElems.weatherMinTemp.textContent = `Min temp: ${data.main.temp_max.toFixed(1)}°C`
    console.log(data.weather[0].main);
    }
}
document.addEventListener('DOMContentLoader', new WeatherApp())