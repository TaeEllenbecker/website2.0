const form = document.getElementById('form');
const formName = document.getElementById('formName');
const formEmail = document.getElementById('email');
const formMessage = document.getElementById('message');

function validName(){
    if (formName.value.trim() === '') {
        formName.nextElementSibling.textContent = 'Please type your name';
    } else {
        formName.nextElementSibling.textContent = '';
    }
}

function validEmail(){
    if (formEmail.value.trim() === '') {
        formEmail.nextElementSibling.textContent = 'Please type your email';
    } 
    else if( !((formEmail.value.trim()).includes('@') ) )  {
        formEmail.nextElementSibling.textContent = '';
        formEmail.nextElementSibling.textContent = 'Please type a valid email';
    }
    else{
        formEmail.nextElementSibling.textContent = '';
    }
}

function validateMessage() {
    if (formMessage.value.trim() === '') {
        formMessage.nextElementSibling.textContent = 'Please type your message';
    } else {
        formMessage.nextElementSibling.textContent = '';
    }
}

const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', (e) => {
    validName();
    validEmail();
    validateMessage();
    e.preventDefault();
});