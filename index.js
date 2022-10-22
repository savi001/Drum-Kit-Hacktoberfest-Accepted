var l = document.querySelectorAll(".drum").length;

for(var i = 0; i < l; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handclick);
}
function handclick() {
    if(document.activeElement.id == "w"){
        var sound = new Audio("sounds/tom-1.mp3");
        sound.play();
        this.style.color = "white";
    }
    else if(document.activeElement.id == "a"){
        var sound = new Audio("sounds/tom-2.mp3");
        sound.play();
        this.style.color = "white";
    }
    else if(document.activeElement.id == "s"){
        var sound = new Audio("sounds/tom-3.mp3");
        sound.play();
        this.style.color = "white";
    }
    else if(document.activeElement.id == "d"){
        var sound = new Audio("sounds/tom-4.mp3");
        sound.play();
        this.style.color = "white";
    }
    else if(document.activeElement.id == "j"){
        var sound = new Audio("sounds/crash.mp3");
        sound.play();
        this.style.color = "white";
    }
    else if(document.activeElement.id == "k"){
        var sound = new Audio("sounds/kick-bass.mp3");
        sound.play();
        this.style.color = "white";
    }
    else if(document.activeElement.id == "l"){
        var sound = new Audio("sounds/snare.mp3");
        sound.play();
        this.style.color = "white";
    }
}