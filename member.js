const form = document.getElementById('membership');
const name2 = document.getElementById('name2');
const qual = document.getElementById('qual');
const email = document.getElementById('email');
const interest = document.getElementById('interest');
const mobno = document.getElementById('mobno');
const join = document.getElementById('join');

form.addEventListener('submit', e => {
    ValidateInputs();if(isFormValid()==true){
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
    const name2Value = name2.value.trim();
    const qualValue = qual.value.trim();
    const emailValue = email.value.trim();
    const mobnoValue = mobno.value.trim();
    const interestValue = interest.value.trim();
    const joinValue = join.value.trim();

    if(name2Value==='')
    {
        setError(name2,' **username is required');
    }
    else{
        setSuccess(name2);
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
    if(qualValue==="")
    {
        setError(qual,'**qualification reqd');
    }
    else{
        setSuccess(qual);
    }
    if(interestValue ==="")
    {
        setError(interest,'**interest reqd');
    }
    else{
        setSuccess(interest);
    }
    if(joinValue ==="")
    {
        setError(join,'**join reqd');
    }
    else{
        setSuccess(join);
    }

};