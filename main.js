window.addEventListener('load',()=>{
    const signupWrapper_el=document.querySelector(".sign-up-wrapper");
    
    const successMessage_el=document.querySelector("#success-message");
    const form= document.querySelector("#subscribe-btn")
    // successMessage_el.style.display='none';

    const dismiss_btn=document.querySelector("#dismiss-btn");
    const subscribe_btn_el=document.querySelector("#subscribe-btn");
    const email_input=document.querySelector("#email-input");


    console.log(dismiss_btn,subscribe_btn_el,email_input,successMessage_el);
    form.addEventListener('submit',()=>{
    if(email_input.value!=""){
        successMessage_el.style.display='block'; 
        console.log(email_input.value)
        return;
    }
        
        email_input.value="";
        window.location.reload()
    

    })
    signupWrapper_el.style.backdropFilter='blur(50px)';
    dismiss_btn.addEventListener('click',()=>{
        successMessage_el.style.display='none'
    })

 

})