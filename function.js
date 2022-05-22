console.log("this will be included sucessfully");
let formname = document.getElementById('name');
let email = document.getElementById('email');
let password = document.getElementById('password');
let phonenumber = document.getElementById('mobilenumber');
let nameInvalid = document.getElementById('nameInvalid');
let phInvalid = document.getElementById('phInvalid');
let emailInvalid=document.getElementById('emailInvalid');
let passwordInvalid=document.getElementById('passwordInvalid');
let btn=document.getElementById('btn');
let alert=document.getElementById('alert');
let valid=document.getElementsByClassName('valid-feedback');
//console.log(formname.value);

formname.addEventListener('blur', () => {
    let regex = /^[a-zA-Z]([a-zA-Z]){2,10}$/;
    let message = "Sorry user name must be 4-10 character and can't start with number or any special symbol(@ $ # ! & etc..) and it consist only character";
   FormValidation(regex,formname,nameInvalid,message);
});

email.addEventListener('blur', () => {
    let regex=/(^[a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-z]){2,5}$/;
    let message="Sorry email start with (0-9)number(a-z)latter and must use @ and .com or .edu or .in etc";
    let emailtext=document.getElementById('emailtext');
    emailtext.innerText="";
    FormValidation(regex,email,emailInvalid,message);
    //console.log("blured");
})
password.addEventListener('blur', () => {
    let regex=/^[A-Za-z0-9]([a-zA-Z0-9_@%#&*!]){8,20}$/;
    let message="Sorry password should be 8 character or long and mixed with number alphabate symbol";
    FormValidation(regex,password,passwordInvalid,message);
    //console.log("blured");
})
phonenumber.addEventListener('blur', () => {
    //console.log("blured");
    let regex = /^[0-9]{10}$/;
    let message = "Phone number must be 10 digit and can't contain any alphabet";
    FormValidation(regex,phonenumber,phInvalid,message);
});
btn.addEventListener('click',(e)=>{
    alert.classList.add('show');
    setTimeout(() => {
        alert.classList.remove('show');
    },4000 );
});

function FormValidation(regex, validation, validationContainer, message) {

    if (validation.value == "") {
        validationContainer.innerText = "Plz fill the box this is mendatory";
        validation.classList.add('is-invalid');
        validation.classList.remove('is-valid');
    }
    else if (regex.test(validation.value)) {
        validation.classList.remove('is-invalid');
        validation.classList.add('is-valid');
    }
    else {
        validationContainer.innerText = message;
        validation.classList.add('is-invalid');
        validation.classList.remove('is-valid');
    }
}