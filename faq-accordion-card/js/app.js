let answer = document.querySelectorAll(".accordion")

// answer.forEach((event) => {
//     event.addEventListener('click', ()=> {
//         if (event.classList.contains("active")) {
//             event.classList.remove("active");
//          } else {
//             event.classList.add("active");
//             console.log(event.classList)
//          }
//     })
// })
answer.forEach((accordion) => {
    accordion.addEventListener("click", () => {
        if (accordion.classList.contains("active")) {
            accordion.classList.remove("active");
        }
        else {
            answer.forEach((a) => a.classList.remove("active"));
            accordion.classList.add("active");
        }
    });
});