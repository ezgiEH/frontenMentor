const ratingNumbers = document.querySelectorAll(".rating-info");
const defaultActive = document.querySelector(".default-active");
const selectedInfo = document.querySelector(".selected-info");
const submitbtn = document.querySelector(".btn-orange");
const frontCard = document.querySelector(".card-rating")
const backCard = document.querySelector(".card-back")


ratingNumbers.forEach((button) => {
    button.addEventListener("click", function () {
        ratingNumbers.forEach((ifSelected) => {
            ifSelected.classList.remove("selected")
        });
        button.classList.add("selected")
        defaultActive.classList.remove("default-active")
    })
});


submitbtn.addEventListener("click", function () {
    const selected = document.querySelector(".selected")
    let selectedValue = selected.textContent;
    frontCard.classList.add("hidden");
    backCard.classList.add("show-card")
    selectedInfo.textContent = `You selected ${selectedValue} out of 5`;
});