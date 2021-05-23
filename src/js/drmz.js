/*maps keyboard letters to drum sounds*/
var keyboardMap = {
    'q':36,
    'w':37,
    'e':38,
    'a':39,
    's':40,
    'd':41,
    'z':42,
    'x':43,
    'c':44
};

function createDrumMachine(){
    document.getElementById("drum-machine").style.display = "block";
}

function playDrumSound(note){
    const drmAudioElem = document.querySelector('audio[data-key="'+note+'"]');
    playDrumSoundFromElement(drmAudioElem);
}

function playDrumSoundFromElement(e){
    //if from KeyboardEvent
    if(e && e.key && keyboardMap[e.key]){
        e = document.querySelector('audio[data-key="'+keyboardMap[e.key]+'"]');
    }

    //if from MouseEvent
    if(e && e.srcElement && e.srcElement.dataset && e.srcElement.dataset.key){
        e = document.querySelector('audio[data-key="'+e.srcElement.dataset.key+'"]');
    }

    if(!e || !e.dataset || !e.dataset.key){
        return;
    }

    const key = document.querySelector('.key[data-key="'+e.dataset.key+'"]');

    if(!key || !key.dataset || !key.dataset.key){
        return;
    }

    if(!drmAudio["key-"+key.dataset.key]){
        drmAudio["key-"+key.dataset.key] = audioContext.createMediaElementSource(e);
    }

    createPatching();

    e.currentTime = 0;
    e.play();

    key.classList.add('playing');
}

function removeTransition(e){
    if(e.propertyName !== 'transform'){
        return;
    }
    this.classList.remove('playing');
}

window.addEventListener('keydown', playDrumSoundFromElement);

const keys = document.querySelectorAll('.key');
for(var i = 0; i < keys.length; i++){
    keys[i].addEventListener('transitionend', removeTransition);
    keys[i].addEventListener('click', playDrumSoundFromElement);
    // keys[i].addEventListener('touchstart', playDrumSoundFromElement);
}
