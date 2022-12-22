const randomButton = document.querySelector('.random')
const adviceText = document.querySelector('.advice')
const adviceId = document.querySelector('.id')

function fetchAdvice (){
    fetch('https://api.adviceslip.com/advice')
    .then((response) => response.json())
    .then((data) => {
        adviceId.textContent = `Advice #${data.slip.id}`
        adviceText.textContent = `${data.slip.advice}`
    }); 
}

fetchAdvice () 

randomButton.addEventListener('click', function() {
    fetchAdvice ()
})