const slider = document.getElementById("range");
const output = document.getElementById("output");
const container = document.querySelector(".grid-container");
const econtainer = document.querySelector(".bruh") 
let mousedown = false
let mouseover = false

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
            square.style.backgroundColor = colorval.value
        }
    })
    }   
}

gridBuild()

slider.oninput = gridBuild
