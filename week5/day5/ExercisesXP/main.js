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



const main = document.querySelector("main");
main.addEventListener("click", function(event) {
    if (event.target !== main) { 
    event.target.style.backgroundColor = currentColor;
    }
});


const clear = document.getElementById("clear");

clear.addEventListener("click", function() {
    const squares = document.querySelectorAll("#field div");
    squares.forEach(square => {
        square.style.backgroundColor = 'white';
    });
});


// I did it in general, the color changes by clicking;
// I'll figure out how to add a fill when the mouse is pressed (mouseup, mousedown, I suppose...)