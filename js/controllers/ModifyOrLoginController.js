import BaseController from './BaseController.js';
import dataService from '../services/DataService.js';


export default class ModifyOrLoginController extends BaseController {

    constructor(element) {
        super(element);
        this.checkIfUserIsLogged();
    }

    async checkIfUserIsLogged() {
        const usesIsLogged = await dataService.isUserLogged();
        if (usesIsLogged) {
            const modifyAdButton = this.element.querySelector('.modify-ad-button');
            modifyAdButton.classList.remove('is-hidden');
            const obtainQuery = await dataService.getQuery(window.location.search)
            modifyAdButton.href += `?id=${obtainQuery['id']}`
            const logoutButton = this.element.querySelector('.logout-button');
            logoutButton.classList.remove('is-hidden');
        } else {
            const loginRegisterButtons = this.element.querySelector('.login-register-buttons');
            loginRegisterButtons.classList.remove('is-hidden');
        }
    }

}
