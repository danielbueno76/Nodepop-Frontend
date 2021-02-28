import BaseController from './BaseController.js';
import dataService from '../services/DataService.js';
import { adView } from '../views.js';
import DeleteButtonController from './DeletebuttonController.js';

export default class AdController extends BaseController {

    constructor(element) {
        super(element)
        this.subscribe(this.events.AD_DELETED, ev => {
            window.location.href = "/"
        })
    }

    render(ad) {
        this.element.innerHTML = '';

        const article = document.createElement('article');
        article.innerHTML = adView(ad);
        const deleteButton = article.querySelector('button');
        if (deleteButton) {
            new DeleteButtonController(deleteButton, ad);
        }
        this.element.appendChild(article);
        
    }

    async loadAd() {
        this.publish(this.events.START_LOADING, {});
        try {
            const queryParam = window.location.search.replace('?', '')
            const queryParamParts = queryParam.split('=')
            const id = queryParamParts.length === 2 ? queryParamParts[1] : null;
            const ad = await dataService.getAd(id);
            this.render(ad);
        } catch (error) {
            console.error(error);
            this.publish(this.events.ERROR, error);
        } finally {
            this.publish(this.events.FINISH_LOADING, {});
        }
    }

}
