// sidebar
function openNav() {
    document.getElementById("sidebar").style.display = "block";
}

function closeNav() {
    document.getElementById("sidebar").style.display = "none";
    document.getElementById("main").style.marginLeft = "0";
}
// sidebar

//Dropdown
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}
//Dropdown