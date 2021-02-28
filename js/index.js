import AdsListController from './controllers/AdsListController.js'
import LoaderController from './controllers/LoaderController.js'
import ErrorController from './controllers/ErrorController.js'
import NewAdOrLoginController from './controllers/NewAdOrLoginController.js'
import LogOutController from './controllers/LogOutController.js'
import SearchController from './controllers/SearchController.js'

window.addEventListener('DOMContentLoaded', (event) => {

    const loader = document.querySelector('.lds-ring')
    new LoaderController(loader)

    const element = document.querySelector('.posts-list')
    const controller = new AdsListController(element)
    controller.loadAds()
    
    const errorElement = document.querySelector('.global-errors')
    new ErrorController(errorElement)

    const newAdButtons = document.querySelector('.new-ad')
    new NewAdOrLoginController(newAdButtons)
    new LogOutController(newAdButtons)

    const searchInput = document.querySelector('input[type="search"]')
    new SearchController(searchInput)
})
