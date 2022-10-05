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
}

const startApp = () => {
    GetDomElement()
    setupListener()
}

const onEnterSubmit = () => {

}

const onClickSubmit = () => {
    
}

document.addEventListener('DOMContentLoaded', startApp)
console.log(viewElement);

