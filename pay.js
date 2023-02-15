const form = document.getElementById('form');
const owner = document.getElementById('own');
const cvv = document.getElementById('cvv');
const card = document.getElementById('card');
form.addEventListener('submit',e=>{
   
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


const setError=(element,message)=>{
    const inputControl=element.parentElement;
    const errorDisplay=inputControl.querySelector('.error');
    errorDisplay.innerText=message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
 }
 const setSuccess=element=>{
    const inputControl=element.parentElement;
    const errorDisplay=inputControl.querySelector('.error');
    errorDisplay.innerText='';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
 };
 const validateInputs=()=>{
   
    const ownerValue=owner.value.trim();
    const cvvValue=cvv.value.trim();
    const cardValue=card.value.trim();
    if(ownerValue === '')
    setError(owner,'**Owner Name required');
    else
    setSuccess(owner);
    if(cvvValue === '') {
        setError(cvv, '**cvv is required');
    } else if (cvvValue.length >3 || cvvValue.length <3 ) {
        setError(cvv, '**cvv must not exceed 3 characters')
    } else {
        setSuccess(cvv);
    }
    if(cardValue === '') {
        setError(card, '**Card Number is required');
    } else if (cardValue.length >12 || cardValue.length <12 ) {
        setError(card, '**Card Number must not exceed 12 characters')
    } else {
        setSuccess(card);
    }
    
   
 
 }