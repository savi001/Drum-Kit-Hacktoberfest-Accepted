var l = document.querySelectorAll(".drum").length;

for(var i = 0; i < l; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handclick);
}

document.addEventListener("keydown",function(event){
    document.querySelector('.'+(event.key)).style.color="white";
    handclick(event.key);
 
  
});
function handclick(key) {
    if(document.activeElement.id === "w" || key==="w"){
        var sound = new Audio("sounds/tom-1.mp3");
        sound.play();
        this.style.color = "white";
    }
    else if(document.activeElement.id === "a" || key==="a"){
        var sound = new Audio("sounds/tom-2.mp3");
        sound.play();
        this.style.color = "white";
    }
    else if(document.activeElement.id === "s" || key==="s"){
        var sound = new Audio("sounds/tom-3.mp3");
        sound.play();
        this.style.color = "white";
    }
    else if(document.activeElement.id === "d" ||key==="d"){
        var sound = new Audio("sounds/tom-4.mp3");
        sound.play();
        this.style.color = "white";
    }
    else if(document.activeElement.id === "j" || key==="j"){
        var sound = new Audio("sounds/crash.mp3");
        sound.play();
        this.style.color = "white";
    }
    else if(document.activeElement.id === "k" || key==="k"){
        var sound = new Audio("sounds/kick-bass.mp3");
        sound.play();
        this.style.color = "white";
    }
    else if(document.activeElement.id === "l" || key==="l"){
        var sound = new Audio("sounds/snare.mp3");
        sound.play();
        this.style.color = "white";
    }
}