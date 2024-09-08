var drums = document.querySelectorAll(".drum").length
for (i = 0; i < drums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", clickme)

}
function clickme() {
    var letter = this.innerHTML;
    switch (letter) {
        case "w":
            var aud = new Audio('crash.mp3');
            aud.play()
            break;
        case "a":
            var aud = new Audio('kick-bass.mp3');
            aud.play()
            break;
        case "s":
            var aud = new Audio('tom-1.mp3')
            aud.play()
            break;
        case "d":
            var aud = new Audio('tom-2.mp3')
            aud.play()
            break;
        case "j":
            var aud = new Audio('tom-3.mp3')
            aud.play()
            break;

        case "k":
            var aud = new Audio('tom-4.mp3')
            aud.play()
            break;
        case "l":
            var aud = new Audio('snare.mp3')
            aud.play()
            break;



    }
    jai(letter)

}
document.addEventListener("keypress", function (event) {  // keypress in whole document and click only to specific buttons
    var alpha = event.key
    switch (alpha) {
        case "w":
            var aud = new Audio('crash.mp3');
            aud.play()
            break;
        case "a":
            var aud = new Audio('kick-bass.mp3');
            aud.play()
            break;
        case "s":
            var aud = new Audio('tom-1.mp3')
            aud.play()
            break;
        case "d":
            var aud = new Audio('tom-2.mp3')
            aud.play()
            break;
        case "j":
            var aud = new Audio('tom-3.mp3')
            aud.play()
            break;

        case "k":
            var aud = new Audio('tom-4.mp3')
            aud.play()
            break;
        case "l":
            var aud = new Audio('snare.mp3')
            aud.play()
            break;



    }
    jai(alpha)
})
//animation
function jai(name) {
document.querySelector("."+name).classList.add("pressed")
setTimeout(function (){
    document.querySelector("."+name).classList.remove("pressed")
},600)

}



