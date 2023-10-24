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
        this.errorMessage="Invalid Email Syntax"
      
    }
    public form: HTMLFormElement
    public emailInput: HTMLInputElement;
    public successMessageElement: HTMLDivElement;
    public button:HTMLButtonElement;
    public errorMessage:string



    handleFormSubmit(){
        this.form.addEventListener('submit', (e:Event)=>{
            e.preventDefault();
                // console.log('clicked');
                //validating the email input
                // (()=>{

                //     const regex=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
                //     if(this.emailInput.value){
                //         if(!regex.test(this.emailInput.value)){
                //           this.emailInput.style.backgroundColor="hsl(4, 100%, 67%);"  
                //           this.emailInput.style.border="2px solid hsl(4, 100%, 67%);" 
                                                 
                //         }
                //     }

                // }) ()

            // if (this.emailInput.value!==" ")

        if(this.emailInput.value!==" "){
            signUpWrapper_el.style.filter="blur(5px)"
            this.successMessageElement.style.display='block';
            console.log(this.emailInput.value)
            setTimeout(()=>{
                this.successMessageElement.style.display="none"
                signUpWrapper_el.style.filter="none"
            },3000)
        }
        this.emailInput.value=" "
       

        })
    }

    dismissEvent(button:HTMLButtonElement){
        this.button.addEventListener('click',(e:Event)=>{
            this.successMessageElement.style.display='none'
            signUpWrapper_el.style.filter="none"
            location.reload()
        })

    }

}

window.addEventListener('load',()=>{
    let signUpForm = new Form(email_input, successMessage_el,dismiss_btn);
    signUpForm.handleFormSubmit();
    signUpForm.dismissEvent(dismiss_btn)
    
    
})



