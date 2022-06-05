var card1 = document.getElementById("card1")
var card2 = document.getElementById("card2")
var card3 = document.getElementById("card3")
var card4 = document.getElementById("card4")
var card5 = document.getElementById("card5")
var card6 = document.getElementById("card6")
var card7 = document.getElementById("card7")
var card8 = document.getElementById("card8")
var card9 = document.getElementById("card9")


function soundsPlay(sound) {
    const audio = new Audio(sound)

    audio.currentTime = 0;
    audio.play();

}

function startPlay1() {
    soundsPlay("http://lapoc.de/samples/telshow-tele/cleanmidbass-E01-slap.wav")
}

function startPlay2() {
    soundsPlay("http://cd.textfiles.com/sbsw/BEEPCHMS/FIDDLE.WAV")
}

function startPlay3() {
    soundsPlay("http://mrclan.com/fastdl/tfc/sound/b.wav")
}

function startPlay4() {
    soundsPlay("http://www.drumsoundz.com/Snare3.wav")
}

function startPlay5() {
    soundsPlay("http://lapoc.de/samples/telshow-tele/cleandiskant-G01.wav")
}

function startPlay6() {
    soundsPlay("http://cd.textfiles.com/sbsw/INSTRMNT/FLUTEMI.WAV")
}
function startPlay7() {
    soundsPlay("http://soundcavern.free.fr/bass/bass001.wav")
}
function startPlay8() {
    soundsPlay("http://cd.textfiles.com/sbmm/SOUNDS/BANJO.WAV")
}
function startPlay9() {
    soundsPlay("http://cd.textfiles.com/sbsw/BEEPCHMS/SAX.WAV")
}



card1.addEventListener("click", startPlay1)
card2.addEventListener("click", startPlay2)
card3.addEventListener("click", startPlay3)
card4.addEventListener("click", startPlay4)
card5.addEventListener("click", startPlay5)
card6.addEventListener("click", startPlay6)
card7.addEventListener("click", startPlay7)
card8.addEventListener("click", startPlay8)
card9.addEventListener("click", startPlay9)

