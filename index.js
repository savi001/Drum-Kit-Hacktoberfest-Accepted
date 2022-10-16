var l = document.querySelectorAll(".drum").length;

for(var i = 0; i < l; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handclick);
}
function handclick() {
    var sound = new Audio("sounds/tom-1.mp3");
    sound.play();
    this.style.color = "white";
   
}