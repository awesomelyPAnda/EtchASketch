const slider = document.getElementById("range")
const output = document.getElementById("output")

slider.oninput = function(){
    output.textContent = `${slider.value} x ${slider.value}`
}