import BaseController from './BaseController.js';
import dataService from '../services/DataService.js';


export default class LogOutController extends BaseController {

    constructor(element) {
        super(element);
        this.attachEventListener();
    }

    async checkIfUserIsLogged() {
        const usesIsLogged = await dataService.isUserLogged();
        if (usesIsLogged) {
            await dataService.deleteToken()
        }
    }

    attachEventListener() {
        this.element.querySelector('.logout-button').addEventListener('click', async (event) => {            
            this.checkIfUserIsLogged()
        })
    }

}
