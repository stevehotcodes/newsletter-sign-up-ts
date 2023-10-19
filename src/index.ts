const signUpWrapper_el=document.querySelector(".sign-up-wrapper") as HTMLDivElement
const successMessage_el=document.querySelector("#success-message") as HTMLDivElement;
const dismiss_btn=document.querySelector("#dismiss-btn") as HTMLButtonElement;
const email_input=document.querySelector("#email-input")as HTMLInputElement;

class Form{
   

    constructor(emailInput:HTMLInputElement,successMessageElement:HTMLDivElement,button:HTMLButtonElement){
        this.emailInput=emailInput,
        this.successMessageElement=successMessageElement
        this.form=document.querySelector("#subscribe-form") as HTMLFormElement;
        this.button=button

    }
    public form: HTMLFormElement
    public emailInput: HTMLInputElement;
    public successMessageElement: HTMLDivElement;
    public button:HTMLButtonElement;

    handleFormSubmit(){
        this.form.addEventListener('submit', (e:Event)=>{
            e.preventDefault();
            console.log('clicked');
            if (this.emailInput.value!=="e")

        if(this.emailInput.value!==" "){
            this.successMessageElement.style.display='block';
            console.log(this.emailInput.value)
            setTimeout(()=>{
                this.successMessageElement.style.display="none"
            },3000)
        }
        this.emailInput.value=" "

        })
    }

    dismissEvent(button:HTMLButtonElement){
        this.button.addEventListener('click',(e:Event)=>{
            this.successMessageElement.style.display='none'
        })

    }

}

window.addEventListener('load',()=>{
    let signUpForm = new Form(email_input, successMessage_el,dismiss_btn);
    signUpForm.handleFormSubmit();
    signUpForm.dismissEvent(dismiss_btn)
    
    
})



