

let els = document.getElementsByClassName("btn")
let el = document.querySelector(".btn");

function modLink() {
    let inputBox = `
    <p class="link-box">Test listener</p>
    `
    el.insertAdjacentHTML("beforebegin", inputBox);
}

Array.from(els).forEach(function(e) {
    e.addEventListener("contextmenu", modLink);
})


