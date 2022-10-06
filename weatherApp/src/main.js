import {getWeatherByCity} from './apiService.js'

const viewElement = {}

const GetDomElement = () => {
    viewElement.mainContainer = document.querySelector('#mainContainer')
    viewElement.weatherSearchView = document.querySelector('#weatherSearchView')
    viewElement.weatherForecastView = document.querySelector('#weatherForecastView')

    viewElement.searchInput = document.querySelector('#searchInput')
    viewElement.searchButton = document.querySelector('#searchButton')
    viewElement.weatherCityContainer = document.querySelector('#weatherCityContainer')

    viewElement.weatherCity = document.querySelector('#weatherCity')
    viewElement.weatherIcon = document.querySelector('#weatherIcon')

    viewElement.weatherCurrentTemp = document.querySelector('#weatherCurrentTemp')
    viewElement.weatherMaxTemp = document.querySelector('#weatherMaxTemp')
    viewElement.weatherMinTemp = document.querySelector('#weatherMinTemp')

    viewElement.returnToSearchBtn = document.querySelector('#returnToSearchBtn')
}

const setupListener = () => {
    viewElement.searchInput.addEventListener('keydown', onEnterSubmit)
    viewElement.searchButton.addEventListener('click', onClickSubmit)
    viewElement.returnToSearchBtn.addEventListener('click', returnToSearch)
}

const startApp = () => {
    GetDomElement()
    setupListener()
}

const onEnterSubmit = e => {
    if(e.keyCode === 13) {
        fadeInOut()
        let query = viewElement.searchInput.value || 'Poznan'
        getWeatherByCity(query).then(data => {
            console.log(data.main);
            switchView()
            fadeInOut()
        })
    }
}

const onClickSubmit = () => {
    let query = viewElement.searchInput.value || 'Poznan'
    getWeatherByCity(query).then(data => {
        console.log(data.main);
        switchView()
    })
}

const fadeInOut = () => {
    if(viewElement.mainContainer.style.opacity === '1' || viewElement.mainContainer.style.opacity === '') {
        viewElement.mainContainer.style.opacity = '0'
    } else {
        viewElement.mainContainer.style.opacity = '1'
    }
}

const switchView = () => {
    if(viewElement.weatherSearchView.style.display !== 'none') {
        viewElement.weatherSearchView.style.display = 'none'
        viewElement.weatherForecastView.style.display = 'flex'
    } else {
        viewElement.weatherForecastView.style.display = 'none'
        viewElement.weatherSearchView.style.display = 'flex'
    }
}

const returnToSearch = () => {
    fadeInOut()
    setTimeout(() => {
        switchView()
        fadeInOut()
    }, 500)
}

document.addEventListener('DOMContentLoaded', startApp)
console.log(viewElement);

