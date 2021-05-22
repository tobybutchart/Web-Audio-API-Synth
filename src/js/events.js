$(window).resize(function(){
    var parentWidth = $('#div-custom-osc1').width();
    $('#bars-custom-osc1').trigger("configure", {width:parentWidth});

    var parentWidth = $('#div-custom-osc2').width();
    $('#bars-custom-osc2').trigger("configure", {width:parentWidth});

    var parentWidth = $('#div-lfo1').width();
    $('#xy-lfo1').trigger("configure", {width:parentWidth});
});

function setOsc(waveform, osc, barsID, frequency){
    osc.frequency.setTargetAtTime(frequency, audioContext.currentTime, 0);

    if(waveform === 'custom'){
        var f = [];

        $(barsID).each(function(index, element) {
            f.push(parseFloat($(element).val() / 1000));
        });

        sineTerms = new Float32Array(f);
        cosineTerms = new Float32Array(sineTerms.length);
        customWaveform = audioContext.createPeriodicWave(cosineTerms, sineTerms);

        osc.setPeriodicWave(customWaveform);
    }else{
        osc.type = waveform;
    }
}

function startNote(note, frequency){
    osc1 = audioContext.createOscillator();
    osc2 = audioContext.createOscillator();
    lfo1 = audioContext.createOscillator();

    setOsc(document.getElementById("osc1Type").value, osc1, '#bars-custom-osc1 :input', frequency);
    setOsc(document.getElementById("osc2Type").value, osc2, '#bars-custom-osc2 :input', frequency);

    lfo1.frequency.setTargetAtTime(parseFloat($('#lfo1-freq').val() / 5), audioContext.currentTime, 0);
    lfo1.type = document.getElementById("lfo1Type").value;

    createPatching();

    oscillators[frequency] = [osc1, osc2, lfo1];

    osc1.detune.value = document.getElementById("dial-finetune-osc1").value;
    osc2.detune.value = document.getElementById("dial-finetune-osc2").value;

    osc1.start(audioContext.currentTime);
    osc2.start(audioContext.currentTime);
    lfo1.start(audioContext.currentTime);
}

function stopNote(note, frequency){
    if(oscillators[frequency]){
        oscillators[frequency].forEach(function (oscillator) {
            oscillator.stop(audioContext.currentTime);
        });
    }
}

function setEvents(){
    $(".effect-dial").knob({
        'release' : function (v) {
            var e = this.$[0];
            var effectIndex = parseInt(this.$[0].dataset.effectindex);
            var controlIndex = parseInt(this.$[0].dataset.controlindex);
            var effect = window[effects[effectIndex].effectType];

            effect[effects[effectIndex].controls[controlIndex].controlProperty] = v;
        }
    });

    keyboard.keyDown = function (note, frequency) {
        var midiNote = freqToMidiNote(frequency);

        /*stops keyboard clashing with drum sounds*/
        if(![60, 61, 62, 63, 64, 68].includes(midiNote)){
            startNote(note, frequency);
        }else{
            playDrumSound(note);
        }
    };

    keyboard.keyUp = function (note, frequency) {
        stopNote(note, frequency);
    };

    $(".dial").dial();

    $(".bars").bars({
        'width':545,
        'cols':16,
        'min':-100,
        'max':100,
        'fgColor':"#FFF"
    });

    $(".xy").xy();

    var timeoutOSC1;
    var timeoutOSC2;

    $("#randomise-osc1").bind('click',
        function() {
            animateOSC1 = true;
            animateBar($(".bar-osc1"), true, timeoutOSC1, 1);
        }
    );

    $("#start-osc1").bind('click',
        function() {
            canLoop[1] = true;
            animateBar($(".bar-osc1"), false, timeoutOSC1, 1);
        }
    );

    $("#stop-osc1").bind('click',
        function() {
            canLoop[1] = false;
        }
    );

    $("#randomise-osc2").bind('click',
        function() {
            animateOSC2 = true;
            animateBar($(".bar-osc2"), true, timeoutOSC2, 2);
        }
    );

    $("#start-osc2").bind('click',
        function() {
            canLoop[2] = true;
            animateBar($(".bar-osc2"), false, timeoutOSC2, 2);
        }
    );

    $("#stop-osc2").bind('click',
        function() {
            canLoop[2] = false;
        }
    );
}
