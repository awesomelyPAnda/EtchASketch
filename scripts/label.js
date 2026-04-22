const slider = document.getElementById("range");
const output = document.getElementById("output");
const container = document.querySelector(".grid-container");

slider.oninput = function () {
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
    }
};

container.style.display = "grid";
    container.style.gridTemplateColumns = `repeat(16, 1fr)`;
    container.style.gridTemplateRows = `repeat(16, 1fr)`;

    for (let i = 0; i < 256; i++) {
        const square = document.createElement("div");
        square.style.border = "1px solid black";
        container.appendChild(square);
    }