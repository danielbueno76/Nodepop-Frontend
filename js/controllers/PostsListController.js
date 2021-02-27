import BaseController from './BaseController.js';
import dataService from '../services/DataService.js';
import { adView } from '../views.js';
import { noAdView } from '../views.js';
import DeleteButtonController from './DeletebuttonController.js';

export default class PostsListController extends BaseController {

    constructor(element) {
        super(element)
        this.subscribe(this.events.SEARCH, query => {
            this.loadPosts(query)
        })
        this.subscribe(this.events.AD_DELETED, ev => {
            this.loadPosts()
        })
    }

    render(ads) {
        this.element.innerHTML = '';
        if (ads.length == 0) {
            this.element.innerHTML = noAdView();
        }

        for (const ad of ads) {
            const article = document.createElement('article');
            article.innerHTML = adView(ad);
            const deleteButton = article.querySelector('button');
            if (deleteButton) {
                new DeleteButtonController(deleteButton, ad);
            }
            this.element.appendChild(article);
        }
    }

    async loadPosts(query=null) {
        this.publish(this.events.START_LOADING, {});
        try {
            const ads = await dataService.getAds(query);
            this.render(ads);
        } catch (error) {
            console.error(error);
            this.publish(this.events.ERROR, error);
        } finally {
            this.publish(this.events.FINISH_LOADING, {});
        }
    }

}
