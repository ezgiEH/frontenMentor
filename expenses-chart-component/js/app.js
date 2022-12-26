const mon = document.querySelector('.mon')
const tue = document.querySelector('.tue')
const wed = document.querySelector('.wed')
const thu = document.querySelector('.thu')
const fri = document.querySelector('.fri')
const sat = document.querySelector('.sat')
const sun = document.querySelector('.sun')

const monModal = document.querySelector('.mon-modal')
const tueModal = document.querySelector('.tue-modal')
const wedModal = document.querySelector('.wed-modal')
const thuModal = document.querySelector('.thu-modal')
const friModal = document.querySelector('.fri-modal')
const satModal = document.querySelector('.sat-modal')
const sunModal = document.querySelector('.sun-modal')

// api url
const api_url = "./data.json";
// Defining async function
async function getapi(url) {
    const response = await fetch(url);
    var data = await response.json();
    return data
}


const fetchData = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve(
        getapi(api_url)
    ), 1000);
})

fetchData()
    .then(
        (data) => data.map((item) => {
            const nowDay = new Date().getDay()

            switch (item.day) {
                case 'mon':
                    mon.style.height = `${item.amount*2}px`
                    monModal.textContent = `$${item.amount}`
                    nowDay === 1 ? mon.style.background = 'var(--Cyan)' : mon.style.background = 'var(--Soft-red)'
                    break;
                case 'tue':
                    tue.style.height = `${item.amount*2}px`
                    tueModal.textContent = `$${item.amount}`
                    nowDay === 2 ? tue.style.background = 'var(--Cyan)' : tue.style.background = 'var(--Soft-red)'
                    break;
                case 'wed':
                    wed.style.height = `${item.amount*2}px`
                    wedModal.textContent = `$${item.amount}`
                    nowDay === 3 ? wed.style.background = 'var(--Cyan)' : wed.style.background = 'var(--Soft-red)'
                    break;
                case 'thu':
                    thu.style.height = `${item.amount*2}px`
                    thuModal.textContent = `$${item.amount}`
                    nowDay === 4 ? thu.style.background = 'var(--Cyan)' : thu.style.background = 'var(--Soft-red)'
                    break;
                case 'fri':
                    fri.style.height = `${item.amount*2}px`
                    friModal.textContent = `$${item.amount}`
                    nowDay === 5 ? fri.style.background = 'var(--Cyan)' : fri.style.background = 'var(--Soft-red)'
                    break;
                case 'sat':
                    sat.style.height = `${item.amount*2}px`
                    satModal.textContent = `$${item.amount}`
                    nowDay === 6 ? sat.style.background = 'var(--Cyan)' : sat.style.background = 'var(--Soft-red)'
                    break;
                case 'sun':
                    sun.style.height = `${item.amount*2}px`
                    sunModal.textContent = `$${item.amount}`
                    nowDay === 0 ? sun.style.background = 'var(--Cyan)' : sun.style.background = 'var(--Soft-red)' 
                    break;
                default:
                
            }

        })
    )

