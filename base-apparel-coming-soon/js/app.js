const submitbtn = document.querySelector('.btn')
const email = document.querySelector('.email')
const error = document.querySelector('.error-message')

const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

submitbtn.addEventListener("click", function (event) {
    event.preventDefault()
    if (email.value.match(mailformat)) {
        email.classList.add("valid");
        submitbtn.classList.add('valid')
        error.textContent= 'Success'
        error.style.color = 'var(--Valid)'
        return true;
    }
    else {
        email.classList.remove('valid')
        submitbtn.classList.remove('valid')
        email.classList.add('error')
        submitbtn.classList.add('error')
        error.classList.add('error')
        error.style.color = 'var(--Soft-Red)'
        error.textContent = `Please provide a valid email`;
        return false;
    }
});

