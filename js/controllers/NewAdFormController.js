import BaseController from "./BaseController.js";
import dataService from "../services/DataService.js";

export default class NewAdFormController extends BaseController {

    constructor(element) {
        super(element);
        this.checkIfUserIsLogged();
        this.attachEventListeners();
        this.focusInTextarea();
    }

    async checkIfUserIsLogged() {
        const userIsLogged = await dataService.isUserLogged();
        if (!userIsLogged) {
            window.location.href = '/login.html?next=/new-ad.html';
        } else {
            this.publish(this.events.FINISH_LOADING);
        }
    }

    focusInTextarea() {
        const textarea = this.element.querySelector('textarea');
        textarea.focus();
    }

    attachEventListeners() {
        const textarea = this.element.querySelector('textarea');
        textarea.addEventListener('keyup', () => {
            const button = this.element.querySelector('button');
            if (this.element.checkValidity()) {
                button.removeAttribute('disabled');
            } else {
                button.setAttribute('disabled', true);
            }
        });

        this.element.addEventListener('submit', async event => {
            event.preventDefault();
            const ad = {
                message: null,
                image: null
            }
            if (this.element.elements.file.files.length > 0) {
                ad.image = this.element.elements.file.files[0];
            }
            this.publish(this.events.START_LOADING);
            try {
                await dataService.saveAd(ad);
                window.location.href = '/?mensaje=adtOK'
            } catch (error) {
                this.publish(this.events.ERROR, error)
            } finally {
                this.publish(this.events.FINISH_LOADING)
            }
        });
    }

}
