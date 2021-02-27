import BaseController from './BaseController.js';
import dataService from '../services/DataService.js';


export default class RegisterFormController extends BaseController {

    constructor(element) {
        super(element);
        this.attachEventListener();
    }

    async makePost (user) {
        await dataService.registerUser(user);
        alert('User created successfully');
        window.location.href = '/login.html';  // redirect to to login
    }

    checkInputErrors() {
        this.element.querySelectorAll('input').forEach(input => {
            const button = this.element.querySelector('button');
            if (input.validity.valid) {
                input.classList.add('is-success');
                input.classList.remove('is-danger');
            } else {
                input.classList.remove('is-success');
                input.classList.add('is-danger');
                console.error(input.validationMessage)
            }

            // check if the form is ok to disable or to allow the button.
            if (this.element.checkValidity()) {
                button.removeAttribute('disabled');
            } else {
                button.setAttribute('disabled', true);
            }
        });
    }

    checkPasswords() {
        this.element.querySelectorAll('input[type="password"]').forEach(input => {
            const button = this.element.querySelector('button');
            input.addEventListener('keyup', event => { 
                const passInput = this.element.elements['password'];
                const passConfirmInput = this.element.elements['password-confirm'];
                if (passInput.value !== passConfirmInput.value) {
                    passInput.setCustomValidity('The password does not match');
                    passConfirmInput.setCustomValidity('The password does not match');
                } else {
                    passInput.setCustomValidity('');
                    passConfirmInput.setCustomValidity('');
                }
                this.checkInputErrors();
            });
        })
    }

    attachEventListener() {

        this.element.addEventListener('submit', async (event) => {
            event.preventDefault();  // avoid default behaviour
            const user = {
                username: this.element.elements.email.value,
                password: this.element.elements.password.value
            };
            this.publish(this.events.START_LOADING);
            try {
                await this.makePost(user);
            } catch(error) {
                this.publish(this.events.ERROR, error);
            } finally {
                this.publish(this.events.FINISH_LOADING);
            }
        });

        this.element.querySelectorAll('input').forEach(input => {
            input.addEventListener('keyup', event => { 
                this.checkInputErrors();
            });
        });

        this.checkPasswords()
    }

}
