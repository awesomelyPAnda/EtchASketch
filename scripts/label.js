const slider = document.getElementById("range");
const output = document.getElementById("output");
const container = document.querySelector(".grid-container");
const econtainer = document.querySelector(".bruh") 
let mousedown = false
let mouseover = false


function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


function backgroundcolor(){
    let value
    if (colorb == true) {
        value = colorval.value
    }
    if (rainbowb == true) {
        value = getRandomColor()
    }
    if (eraseb == true) {
        value = "#f2f1f0"
    }
    return value
}


function gridBuild() {
    const size = slider.value;
    output.textContent = `${size} x ${size}`;

    container.innerHTML = "";

    container.style.display = "grid";
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.style.border = "1px solid black";
        container.appendChild(square);
        square.addEventListener("mouseover", function() {
            mouseover = true
        square.addEventListener("mousedown", () =>{
            mousedown = true
        })
        econtainer.addEventListener("mouseup", () =>{
            mousedown = false
        })
        if(mousedown && mouseover == true){
            square.style.backgroundColor = backgroundcolor()
        }
    })
    }   
}

gridBuild()

slider.oninput = gridBuild
