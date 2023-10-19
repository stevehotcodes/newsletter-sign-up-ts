"use strict";
const signUpWrapper_el = document.querySelector(".sign-up-wrapper");
const successMessage_el = document.querySelector("#success-message");
const dismiss_btn = document.querySelector("#dismiss-btn");
const email_input = document.querySelector("#email-input");
class Form {
    constructor(emailInput, successMessageElement, button) {
        this.emailInput = emailInput,
            this.successMessageElement = successMessageElement;
        this.form = document.querySelector("#subscribe-form");
        this.button = button;
    }
    handleFormSubmit() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log('clicked');
            if (this.emailInput.value !== " ") {
                this.successMessageElement.style.display = 'block';
                console.log(this.emailInput.value);
                setTimeout(() => {
                    this.successMessageElement.style.display = "none";
                }, 3000);
            }
            this.emailInput.value = " ";
        });
    }
    dismissEvent(button) {
        this.button.addEventListener('click', (e) => {
            this.successMessageElement.style.display = 'none';
        });
    }
}
window.addEventListener('load', () => {
    let signUpForm = new Form(email_input, successMessage_el, dismiss_btn);
    signUpForm.handleFormSubmit();
    signUpForm.dismissEvent(dismiss_btn);
});
