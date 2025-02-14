var audio = document.getElementById("audioPlayer");

window.onload = function() {
    audio.volume = .1;
};

function changeAudio() {
    if (!audio.paused) {
        audio.pause();
        document.getElementById("audio-change").innerHTML = "play";
        document.getElementById("recordPlayer").style.animationPlayState = "paused";
    } else {
        audio.play()
        document.getElementById("audio-change").innerHTML = "pause";
        document.getElementById("recordPlayer").style.animationPlayState = "running";
    }
}       

function increaseVolume() {
    if (audio.volume < 1.0) {
        audio.volume = Math.min(1.0, audio.volume + 0.1); // Increase volume by 0.1
    }
}        
        
function decreaseVolume() {
    if (audio.volume > 0.0) {
        audio.volume = Math.max(0.0, audio.volume - 0.1); // Decrease volume by 0.1
    }
}        