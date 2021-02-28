import dataService from "../services/DataService.js";
import RegisterFormController from "./RegisterFormController.js";


export default class LoginFormController extends RegisterFormController {
    
    async makePost(user) {
        const data = await dataService.login(user)
        dataService.saveToken(data.accessToken)
        let next = '/'
        const obtainQuery = dataService.getQuery(window.location.search)
        if (obtainQuery.next) {
            next = obtainQuery.next
        }
        window.location.href = next
    }

    checkPasswords() {
        //we do not want to use it in login
    }
}