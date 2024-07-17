let currentColor = "white";

const colors = document.querySelectorAll("#colors div");

function checker(event) {
    console.log(event.target.id);
    currentColor = event.target.style.backgroundColor;
    console.log(currentColor)
}

colors.forEach(color => {
    color.addEventListener("click", checker);
});

// const square = document.querySelectorAll("#field div");

const main = document.querySelector("main");
main.addEventListener("click", function(event) {
    if (event.target !== main) { 
    event.target.style.backgroundColor = currentColor;
    }
});


const clear = document.getElementById("clear");


// const red = document.queruSelector('red');
// red.onclick = function () {
//     ...
// }

// const orangered = document.queruSelector('orangered');
// orangered.onclick = function () {
//     ...
// }

// const orange = document.queruSelector('orange');
// orange.onclick = function () {
//     ...
// }

// const yellow = document.queruSelector('yellow');
// yellow.onclick = function () {
//     ...
// }

// const yellowgreen = document.queruSelector('yellowgreen');
// yellowgreen.onclick = function () {
//     ...
// }

// const lightgreen = document.queruSelector('lightgreen')
// lightgreen.onclick = function () {
//     ...
// }

// const green = document.queruSelector('green');
// green.onclick = function () {
//     ...
// }

// const turquoise = document.queruSelector('turquoise');
// turquoise.onclick = function () {
//     ...
// }

// const cyan = document.queruSelector('cyan');
// cyan.onclick = function () {
//     ...
// }

// const lightskyblue = document.queruSelector('lightskyblue');
// lightskyblue.onclick = function () {
//     ...
// }

// const dodgerblue = document.queruSelector('dodgerblue');
// dodgerblue.onclick = function () {
//     ...
// }

// const blue = document.queruSelector('blue');
// blue.onclick = function () {
//     ...
// }

// const darkblue = document.queruSelector('darkblue');
// darkblue.onclick = function () {
//     ...
// }

// const indigo = document.queruSelector('indigo');
// indigo.onclick = function () {
//     ...
// }

// const darkmagenta = document.queruSelector('darkmagenta');
// darkmagenta.onclick = function () {
//     ...
// }

// const violet = document.queruSelector('violet');
// violet.onclick = function () {
//     ...
// }

// const lightpink = document.queruSelector('lightpink');
// lightpink.onclick = function () {
//     ...
// }

// const lightgray = document.queruSelector('lightgray');
// lightgray.onclick = function () {
//     ...
// }

// const gray = document.queruSelector('gray');
// gray.onclick = function () {
//     ...
// }

// const black = document.queruSelector('black')
// black.onclick = function () {
//     ...
// }

// const white = document.queruSelector('white')
// white.onclick = function () {
//     ...
// }
