import dataService from "../services/DataService.js";
import RegisterFormController from "./RegisterFormController.js";


export default class LoginFormController extends RegisterFormController {
    
    async makePost(user) {
        const data = await dataService.login(user)
        dataService.saveToken(data.accessToken)
        let next = '/'
        const queryParams = window.location.search.replace('?', '')
        const queryParamsParts = queryParams.split('=')
        if (queryParamsParts.length >= 2 && queryParamsParts[0] === 'next') {
            next = queryParamsParts[1]
        }
        window.location.href = next
    }

    checkPasswords() {
        //we do not want to use it in login
    }
}