let btn = document.getElementById("toggleBtn");
let bulb = document.getElementById("Bulb");
btn.addEventListener("click", toggleBulb);

function toggleBulb(e) {
if(btn.textContent.includes("on")){
    bulb.src="images/bulb-on.png";
    btn.textContent = "Turn off"
}else{
    bulb.src="images/bulb-off.png";
    btn.textContent = "Turn on"
}
}
