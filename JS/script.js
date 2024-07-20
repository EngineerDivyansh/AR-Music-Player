import {Howl, Howler} from 'howler';

// music files
var piano = new Howl({
    src: ['../audio/piano.mp3']
})

var drums = new Howl({
    src: ['../audio/drums.mp3']
})

var guitar = new Howl({
    src: ['../audio/guitar.mp3']
})

var mic = new Howl({
    src: ['../audio/mic.mp3']
});

//play music
mic.play();
drums.play();
piano.play();
guitar.play();

//functions to mute and unmute audio
function removeDrums() {
    drums.mute(true);
}

function addDrums() {
    drums.mute(false);
}

function removeMic() {
    mic.mute(true);
}

function addMic() {
    mic.mute(false);
}
function removeGuitar() {
    guitar.mute(true);
}
function addGuitar() {
    guitar.mute(false);
}
function removePiano() {
    piano.mute(true);
}
function addPiano() {
    piano.mute(false);
}

//functions to merge music with AR
window.onload = function () {
    const drumsMarker = document.getElementById('drums-marker');
    drumsMarker.addEventListener('markerFound', function () {
        addDrums();
    });
    drumsMarker.addEventListener('markerLost', function () {
        removeDrums();
    });

    const pianoMarker = document.getElementById('piano-marker');
    pianoMarker.addEventListener('markerFound', function () {
        addPiano();
    });
    pianoMarker.addEventListener('markerLost', function () {
        removePiano();
    });

    const micMarker = document.getElementById('mic-marker');
    micMarker.addEventListener('markerFound', function () {
        addMic();
    });
    micMarker.addEventListener('markerLost', function () {
        removeMic();
    });

    const guitarMarker = document.getElementById('guitar-marker');
    guitarMarker.addEventListener('markerFound', function () {
        addGuitar();
    });
    guitarMarker.addEventListener('markerLost', function () {
        removeGuitar();
    });
}
