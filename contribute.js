const form=document.getElementById('form');
const name2=document.getElementById('name');
const aadhar=document.getElementById('aadhar');
const phon=document.getElementById('phon');
const city=document.getElementById('city');
const email=document.getElementById('email');
const amount=document.getElementById('amount');
form.addEventListener('submit',e=>{
    // e.preventDefault();
    validateInputs();

    if(isFormValid()==true){
        form.submit();
     }else {
         e.preventDefault();
     }

});

function isFormValid(){
    const inputContainers = form.querySelectorAll('.input-control');
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
    const nameValue= name2.value.trim();
    const aadharValue= aadhar.value.trim();
    const phnValue= phon.value.trim();
    const cityValue= city.value.trim();
    const emailValue=email.value.trim();
    const amountValue=amount.value.trim();
    if(nameValue === ''){
        setError(name2,'**Name is required');
    }
    else
    setSuccess(name2);
    if(emailValue === '') {
        setError(email, '**Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, '**Provide a valid email address');
    } else {
        setSuccess(email);
    }
    if(aadharValue === '') {
        setError(aadhar, 'aadhar is required');
    } else if (aadharValue.length > 12||aadharValue.length <12 ) {
        setError(aadhar, '**Aadhar must be of 12 digits.')
    } else {
        setSuccess(aadhar);
    }
    if(phnValue === '') 
        setError(phon, '**Phnno is required');
     else if (phnValue.length < 10 ||phnValue.length>10) {
        setError(phon, '**PhnNo must be of 10 digits.')
      
    } else {
        setSuccess(phon);
    }
    if(cityValue === ''){
        setError(city,'**city is required');
    }
    else
    setSuccess(city);
    if(amountValue === '')
    setError(amount,'**amount is required');
    else
    setSuccess(amount);
    

}
