import BaseController from "./BaseController.js";
import dataService from "../services/DataService.js";

export default class ModifyAdFormController extends BaseController {

    constructor(element) {
        super(element);
        this.obtainAd()
        .then((ad) =>{
            this.checkIfUserIsLogged();
            this.fillValuesOfForm(ad);
            this.attachEventListeners(ad);
        })
        .catch(function(error) {
            console.log(error)
        })
    }

    async obtainAd() {
        const obtainQuery = dataService.getQuery(window.location.search)
        const idAd = obtainQuery.id ? obtainQuery.id : null; // if undefined -> null. null is better
        return await dataService.getAd(idAd)
    }

    async checkIfUserIsLogged() {
        const userIsLogged = await dataService.isUserLogged();
        if (!userIsLogged) {
            window.location.href = `/login.html?next=/modify-ad.html${window.location.search}`;
        } else {
            this.publish(this.events.FINISH_LOADING);
        }
    }

    async fillValuesOfForm(ad) {
        this.element.elements.name.value = ad.name
        this.element.elements.price.value = ad.price
        if (ad.sale) {
            this.element.elements.sale[1].checked = true
        }
        else {
            this.element.elements.sale[0].checked = true
        }
    }

    attachEventListeners(ad) {
        this.element.addEventListener('submit', async event => {
            event.preventDefault();
            ad.name = this.element.elements.name.value,
            ad.price = this.element.elements.price.value,
            ad.sale = this.element.elements.sale[1].checked // if it is true this means that is for sell, otherwise the user wants to buy this product.
            let changeImage = false;
            if (this.element.elements.file.files.length > 0) { // if we load a file we change the image, otherwise we do not.
                ad.image = this.element.elements.file.files[0];
                changeImage = true;
            }
            this.publish(this.events.START_LOADING);
            try {
                await dataService.updateAd(ad, changeImage);
                window.location.href = `/ad.html${window.location.search}&mensaje=adModified`
            } catch (error) {
                this.publish(this.events.ERROR, error)
            } finally {
                this.publish(this.events.FINISH_LOADING)
            }
        });
    }

}
