let ramdomBG = document.getElementById("ramdomBG");
let random = document.getElementById("random");

// Genarate Random Color Code
function genarateRandomColor() {
    return `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
}
// Update Background and Display
function updateBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

ramdomBG.addEventListener("click", function () {
    let randomColor = genarateRandomColor();
    updateBackgroundColor(randomColor);
})

