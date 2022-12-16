//DOMContentLoaded event listener helps to ensure that the code 
//runs only after the DOM is fully loaded and ready, which can help prevent errors.

document.addEventListener('DOMContentLoaded', function() {
    const submitBtn = document.querySelector('.btn')
    const emailText = document.querySelector('.email')
    const error = document.querySelector('.error-message')
  
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
    submitBtn.addEventListener('click', function(event){
        event.preventDefault();
        if(emailText.value.match(mailformat)){
            error.classList.add('hide')
            emailText.classList.remove('error')
            submitBtn.textContent = `Success`;
            return true
        }
        else{
            error.classList.remove('hide')
            emailText.classList.add('error')
            submitBtn.textContent = `Notify Me`;
            return false;
        }
    })
  });
