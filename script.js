var bodyDiv = document.getElementById("bg");
var color = document.getElementById("colorPicker");
var btn = document.getElementById("button");

btn.onclick = function() {
    bodyDiv.style.backgroundColor = color.value;
}