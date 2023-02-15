const form=document.getElementById('frm');
const email=document.getElementById('email');
const password=document.getElementById('password');
form.addEventListener('submit',e=>{
   validateInputs();
   if(isFormValid()==true){
    form.submit();
 }else {
     e.preventDefault();
 }

});

function isFormValid(){
const inputContainers = form.querySelectorAll('.input-group');
let result = true;
inputContainers.forEach((container)=>{
    if(container.classList.contains('error')){
        result = false;
    }
});
return result;
}

const isValidEmail = email => {
   const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(String(email).toLowerCase());
}

const setError=(element,message)=>{
   const inputControl=element.parentElement;
   const errorDisplay=inputControl.querySelector('.error');
   errorDisplay.innerText=message;
   inputControl.classList.add('error');
   inputControl.classList.remove('success');
}
const setSuccess=element=>{
   const inputControl=element.parentElement;
   const errorDisplay=inputControl.querySelector('.error');
   errorDisplay.innerText='';
   inputControl.classList.add('success');
   inputControl.classList.remove('error');
}
const validateInputs=()=>{
   
   const emailValue=email.value.trim();
   const pwdValue=password.value.trim();
   
   if(emailValue === '') {
       setError(email, '**Email is required');
   } else if (!isValidEmail(emailValue)) {
       setError(email, '**Provide a valid email address');
   } else {
       setSuccess(email);
   }
   if(pwdValue === '') {
       setError(password, '**password is required');
   } else if (pwdValue>8 ) {
       setError(password, '**Password must not exceed 8 characters')
   } else {
       setSuccess(password);
   }
   
  

}