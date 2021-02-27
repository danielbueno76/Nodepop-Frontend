import BaseController from "./BaseController.js";
import dataService from "../services/DataService.js";

export default class NewAdFormController extends BaseController {

    constructor(element) {
        super(element);
        this.checkIfUserIsLogged();
        this.attachEventListeners();
    }

    async checkIfUserIsLogged() {
        const userIsLogged = await dataService.isUserLogged();
        if (!userIsLogged) {
            window.location.href = '/login.html?next=/new-ad.html';
        } else {
            this.publish(this.events.FINISH_LOADING);
        }
    }

    attachEventListeners() {
        this.element.addEventListener('submit', async event => {
            event.preventDefault();
            const ad = {
                name: this.element.elements.name.value,
                price: this.element.elements.price.value,
                sale: this.element.elements.sale[1].checked, // if it is true this means that is for sell, otherwise the user wants to buy this product.
                image: null
            }
            if (this.element.elements.file.files.length > 0) {
                ad.image = this.element.elements.file.files[0];
            }
            this.publish(this.events.START_LOADING);
            try {
                await dataService.saveAd(ad);
                window.location.href = '/?mensaje=adOK'
            } catch (error) {
                this.publish(this.events.ERROR, error)
            } finally {
                this.publish(this.events.FINISH_LOADING)
            }
        });
    }

}
