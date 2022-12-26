const billInput = document.getElementById("bill")
const peopleInput = document.getElementById("people")
const errorMsg = document.getElementById("error")



//input validation and send bill, people, tip value
function handleInputs() {
    let bill = billInput.value
    let people = peopleInput.value

    if (people === "" || people === "0") {
        errorMsg.classList.remove("hide")
    }
    else {
        errorMsg.classList.add("hide")
        renderTexts(bill, people, tip)
    }
}

billInput.addEventListener("change", () => {
    handleInputs()
})

peopleInput.addEventListener("change", () => {
    handleInputs()
})


//tip button selected and clear

let tipBtns = document.querySelectorAll(".tip-btn")
const customInputTip = document.getElementById("custom")

//tip buttons selection
tipBtns.forEach(tipBtn => {
    tipBtn.addEventListener("click", () => {
        clearTipBtns()
        tipBtn.classList.add("selected")
        let tipText = tipBtn.innerText
        tip = tipText.replace("%", "")
        handleInputs(tip)
        return tip
    })
});

// getting custom button value
customInputTip.addEventListener("change", () => {
    tip = customInputTip.value
    handleInputs()
})

//clear tip buttons
function clearTipBtns() {
    customInputTip.value = ""
    tipBtns.forEach(tipBtn => {
        tipBtn.classList.remove("selected")
    })
}

//calculating result 
const tipAmount = document.getElementById("amount")
const totalAmount = document.getElementById("total")
const resetBtn = document.querySelector(".reset-btn")

function renderTexts(bill, people, tip) {
    tipPerPeople = bill * (tip / 100) / people
    tipAmount.innerText = "$" + tipPerPeople.toFixed(2)
    totalAmount.innerText = "$" + ((bill / people) + tipPerPeople).toFixed(2)
}

//reset result
function reset() {
    billInput.value = ""
    peopleInput.value = ""
    customInputTip.value = ""

    tipAmount.innerText = "$0.00"
    totalAmount.innerText = "$0.00"
}


resetBtn.addEventListener('click', function () {
    reset()
})