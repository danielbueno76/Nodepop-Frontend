import AdController from './controllers/AdController.js'
import LoaderController from './controllers/LoaderController.js'
import ErrorController from './controllers/ErrorController.js'
import LogOutController from './controllers/LogOutController.js'
import ModifyOrLoginController from './controllers/ModifyOrLoginController.js'

window.addEventListener('DOMContentLoaded', (event) => {
    const loader = document.querySelector('.lds-ring')
    new LoaderController(loader)

    const element = document.querySelector('.posts-list')
    const controller = new AdController(element)
    controller.loadAd()
    
    const errorElement = document.querySelector('.global-errors')
    new ErrorController(errorElement)

    const modifyAdButtons = document.querySelector('.modify-ad')
    new ModifyOrLoginController(modifyAdButtons)
    new LogOutController(modifyAdButtons)
})
