/*https://gist.github.com/YuxiUx/ef84328d95b10d0fcbf537de77b936cd*/
/*I had to rewrite this as my stupid minifyer didn't like the exponentiation ** operator*/
function midiNoteToFreq(note) {
    var a = 440;
    var b = (a / 32);
    var c = ((note - 9) / 12);
    return b * Math.pow(2, c);
}

function freqToMidiNote(frequency) {
     return Math.round(69 + 12 * Math.log2(frequency / 440));
}

function setMIDI() {
    navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);
}

function onMIDIFailure() {
    console.log('Could not access your MIDI devices :(');
}

function onMIDISuccess(midiAccess) {
    midiAccess.inputs.forEach(
        function(item){
            item.onmidimessage = getMIDIMessage;
        }
    );
}

function getMIDIMessage(message) {
    var command = message.data[0];
    var note = message.data[1];
    var velocity = (message.data.length > 2) ? message.data[2] : 0; // a velocity value might not be included with a noteOff command

    switch (command) {
        case 144: // noteOn
            if (velocity > 0) {
                MIDINoteOn(note, velocity);
            } else {
                MIDINoteOff(note);
            }
            break;
        case 128: // noteOff
            MIDINoteOff(note);
            break;
    }
}

function MIDINoteOn(note) {
    var frequency = midiNoteToFreq(note);
    if(note < 36 || note > 44){
        startNote('', frequency);
    }else{
        playDrumSound(note);
    }
}

function MIDINoteOff(note) {
    var frequency = midiNoteToFreq(note);
    stopNote('', frequency);
}
