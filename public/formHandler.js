const form = document.getElementById('form');
const formName = document.getElementById('formName');
const formEmail = document.getElementById('email');
const formMessage = document.getElementById('message');

function validName() {
    const nameError = formName.nextElementSibling;
    if (formName.value.trim() === '') {
        nameError.textContent = 'Please type your name';
        return false;
    } else {
        nameError.textContent = '';
        return true;
    }
}

function validEmail() {
    const emailError = formEmail.nextElementSibling;
    const emailValue = formEmail.value.trim();
    if (emailValue === '') {
        emailError.textContent = 'Please type your email';
        return false;
    } else if (!emailValue.includes('@')) {
        emailError.textContent = 'Please type a valid email';
        return false;
    } else {
        emailError.textContent = '';
        return true;
    }
}

function validMessage() {
    const messageError = formMessage.nextElementSibling;
    if (formMessage.value.trim() === '') {
        messageError.textContent = 'Please type your message';
        return false;
    } else {
        messageError.textContent = '';
        return true;
    }
}

form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const isNameValid = validName();
    const isEmailValid = validEmail();
    const isMessageValid = validMessage();

    if (isNameValid && isEmailValid && isMessageValid) {
        const formData = {
            formName: formName.value.trim(),
            email: formEmail.value.trim(),
            message: formMessage.value.trim()
        };

        try {
            const response = await fetch('/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams(formData)
            });

            if (response.ok) {
                console.log('Message sent!');
                alert("Your message was sent!");
                form.reset(); // optional: clear the form
            } else {
                console.error('Server responded with error:', response.status);
                alert("There was an error sending your message.");
            }
        } catch (error) {
            console.error('Fetch error:', error);
            alert("Network error. Please try again later.");
        }
    }
});
