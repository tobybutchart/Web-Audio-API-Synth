function createPatching(){
    osc1.connect(gainNode);
    osc2.connect(gainNode);
    lfo1.connect(gainNode);

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
