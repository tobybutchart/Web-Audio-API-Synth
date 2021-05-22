function createPatching(){
    if(osc1){
        osc1.connect(gainNode);
    }
    if(osc2){
        osc2.connect(gainNode);
    }
    if(lfo1){
        lfo1.connect(gainNode);
    }

    for (var audio in drmAudio) {
         drmAudio[audio].connect(gainNode);
    }

    gainNode.connect(window[effects[0].effectType]);

    for(var i = 0; i < effects.length; i++) {
        var effect = window[effects[i].effectType];
        var nextEffect = (i < (effects.length - 1) ? window[effects[i + 1].effectType] : null);

        if(nextEffect){
            effect.connect(nextEffect);
        }else{
            effect.connect(audioContext.destination);
        }
    }
}
