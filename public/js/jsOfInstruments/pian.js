
// function digitar(event) {
//      var tecla = event.keyCode;
//     // console.log("teste")
//     // var audio = new Audio('http://carolinegabriel.com/demo/js-keyboard/sounds/048.wav')
//     var audio = new Audio(sounds[0].audiosSounds)

//     tecla.toUpperCase
//     if(tecla == 65){
//         audio.play()
//     }
//     console.log(tecla)
// }
// window.addEventListener("keydown",digitar)




// const keys = document.querySelectorAll(".key")
//     note = document.querySelector(".nowplaying"),
//     hints = document.querySelectorAll(".hints");

// function playNote(e) {
//     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
// const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

//   if (!key) return;
//   const keyNote = key.getAttribute("data-note");

//   key.classList.add("playing");
//   note.innerHTML = keyNote;
//     audio.currentTime = 0;
//     audio.play();
//     console.log(e.keyCode)
// }

// window.addEventListener("keydown", playNote);











// const notaAtual = document.querySelectorAll(".divItemTeclas");
var divAtual = document.getElementById("notaAtual")
var logs = document.getElementById("divLogsOfInstrument1")
const chord = document.getElementById("teste")

function tocarAcorde(e) {
    
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const nota = document.querySelector(`.divItemTeclas[data-key="${e.keyCode}"]`)
    // var MediaAcordeMin = (cont/60)

    const actuChord = nota.getAttribute("data-nota")

    // if(audio){
    //     logs.innerHTML=""
    //     for(var i = 0; i< teste2.length;i++){
    //         logs.innerHTML += `${teste2[i]} <br>`
    //     }
    // }
   
    // console.log(teste2)
   
    audio.currentTime = 0;
    audio.play();
    // console.log(actuChord)
    divAtual.innerHTML = actuChord
}

window.addEventListener("keydown", tocarAcorde)