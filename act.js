const form = document.getElementById('post');
const name3 = document.getElementById('name3');
const aadhar = document.getElementById('aadhar');
const email = document.getElementById('email');
const mobno = document.getElementById('mobno');
const password = document.getElementById('password');
const pincode = document.getElementById('pincode');
const name2 = document.getElementById('name2');
const email2 = document.getElementById('email2');
const mobno2 = document.getElementById('mobno2');
const password2= document.getElementById('password2');
form.addEventListener('submit', e => {
   
    ValidateInputs();
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

const setError =(element,message) =>
{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')

}
const setSuccess = element => {
    const inputControl = element.parentElement ;
    const errorDisplay =inputControl.querySelector('.error');
    errorDisplay.innerText='';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};
const isValidEmail =email =>
{
    const re =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(string(email).toLowerCase());
}

const ValidateInputs = () => {
    const name3Value =name3.value.trim();
    const aadharValue =aadhar.value.trim();
    const emailValue = email.value.trim();
    const mobnoValue = mobno.value.trim();
    const passwordValue = password.value.trim();
    const pincodeValue = pincode.value.trim();
    const name2Value = name2.value.trim();
    const email2Value = email2.value.trim();
    const mobno2Value = mobno2.value.trim();
    const password2Value = password2.value.trim();
    if(name3Value==='')
    {
        setError(name3,'**username is required');
    }
    else{
        setSuccess(name3);
    }
     if(aadharValue ==="")
    {
        setError(aadhar,'**aadhar reqd');
    }
    else if(aadharValue.length > 12 || aadharValue.length < 12)
    {
        setError(aadhar,'**12 characters are required');
    }

    else {
        setSuccess(aadhar);
    }
    if(emailValue === '')
    {
        setError(email,'**email is required');
    }
    else if(!isValidEmail(emailValue))
    {
        setError(email,'**provide a valid email address')
    }
    else{
        setSuccess(email);
    }
    if(mobnoValue.length >10  && mobnoValue.length <10)
    { 
        setError(mobno,'**invalid mobile no');

    }
    else {
        setSuccess(mobno);
    }
    if(passwordValue ==='')
    {
        setError(password, '**password is required');
    }
    else if(passwordValue.length < 8){

        setError(password,'**password must be atleast 8 character');

    }
    else {
        setSuccess(password);
    }
    if ( pincodeValue.length >6 || pincodeValue.length <6)
    {
        setError( pincode,'**enter correct pincode');
    }
   else {
    setSuccess(pincode);
   }
   if(mobno2Value.length >10  || mobno2Value.length <10)
   { 
       setError(mobno2,'**invalid mobile no');

   }
   else {
       setSuccess(mobno2);
   }
   if(email2Value === '')
   {
       setError(email2,'**email is required');
   }
   else if(!isValidEmail(email2Value))
   {
       setError(email2,'**provide a valid email address')
   }
   else{
       setSuccess(email2);
   }
   if(password2Value ==='')
    {
        setError(password2, '**password is required');
    }
    else if(password2Value.length < 8){
        setError(password2,'**password must be atleast 8 character');

    }
    else {
        setSuccess(password2);
    }
    if(name2Value==='')
    {
        setError(name2,'**username is required');
    }
    else{
        setSuccess(name2);
    }
};