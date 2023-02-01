function toggleText() {
    var checkbox = document.querySelector("input[type='checkbox']");
    var annually = document.getElementsByClassName("price-annually");
    var monthly =  document.getElementsByClassName("price-monthly");


    for (var i = 0; i < annually.length; i++) {
        if (checkbox.checked) {
            annually[i].style.display = "block";
            monthly[i].style.display = "none";
          } else {
            annually[i].style.display = "none";
            monthly[i].style.display = "block";
          }
        }
    }
  