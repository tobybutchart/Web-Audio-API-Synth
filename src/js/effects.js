/*main effects - add remove here to display on the effects rack*/
effects = [{
        "effectType":"overdrive",
        "backgroundColor":"#3299BB",
        "labelText":"Overdrive",
        "controlForegroundColor":"#FFFFFF",
        "controlBackgroundColor":"#BCBCBC",
        "fontFamily":"Arizonia",
        "controls":[
            {
                "controlName":"overdriveOutputGain",
                "min":"0",
                "max":"1",
                "value":"0",
                "step":"0.01",
                "controlText":"Gain",
                "controlProperty":"outputGain"
            },
            {
                "controlName":"overdriveDrive",
                "min":"0",
                "max":"1",
                "value":"0",
                "step":"0.01",
                "controlText":"Drive",
                "controlProperty":"drive"
            },
            {
                "controlName":"overdriveCurveAmount",
                "min":"0",
                "max":"1",
                "value":"1",
                "step":"0.01",
                "controlText":"Amount",
                "controlProperty":"curveAmount"
            },
            {
                "controlName":"overdriveAlgorithmIndex",
                "min":"0",
                "max":"5",
                "value":"4",
                "step":"1",
                "controlText":"Type",
                "controlProperty":"algorithmIndex"
            },
            {
                "controlName":"overdriveBypass",
                "min":"0",
                "max":"1",
                "value":"1",
                "step":"1",
                "controlText":"Bypass",
                "controlProperty":"bypass"
            }
        ]
    },
    /*{
        "effectType":"bitcrusher",
        "backgroundColor":"#990100",
        "labelText":"bitcrusher",
        "controlForegroundColor":"#000000",
        "controlBackgroundColor":"#64908A",
        "fontFamily":"VT323",
        "controls":[
            {
                "controlName":"bitcrusherBits",
                "min":"1",
                "max":"16",
                "value":"16",
                "step":"1",
                "controlText":"bits",
                "controlProperty":"bits"
            },
            {
                "controlName":"bitcrusherNormFreq",
                "min":"0",
                "max":"1",
                "value":"1",
                "step":"0.01",
                "controlText":"freq",
                "controlProperty":"normfreq"
            },
            {
                "controlName":"bitcrusher",
                "min":"256",
                "max":"16384",
                "value":"4096",
                "step":"2",
                "controlText":"buffer",
                "controlProperty":"bufferSize"
            }
        ]
    },*/
    {
        "effectType":"delay",
        "backgroundColor":"#000000",
        "labelText":"Delay",
        "controlForegroundColor":"#B22222",
        "controlBackgroundColor":"#424254",
        "fontFamily":"Just Another Hand",
        "controls":[
            {
                "controlName":"delayFeedback",
                "min":"0",
                "max":"1",
                "value":"0.25",
                "step":"0.01",
                "controlText":"Feedback",
                "controlProperty":"feedback"
            },
            {
                "controlName":"delayDelay",
                "min":"0",
                "max":"10000",
                "value":"250",
                "step":"50",
                "controlText":"Delay",
                "controlProperty":"delayTime"
            },

            {
                "controlName":"delayWet",
                "min":"0",
                "max":"1",
                "value":"0.5",
                "step":"0.01",
                "controlText":"Wet",
                "controlProperty":"wet"
            },
            {
                "controlName":"delayDry",
                "min":"0",
                "max":"1",
                "value":"0.5",
                "step":"0.01",
                "controlText":"Dry",
                "controlProperty":"dry"
            },
            {
                "controlName":"delayCutoff",
                "min":"20",
                "max":"22000",
                "value":"2000",
                "step":"10",
                "controlText":"Cutoff",
                "controlProperty":"cutoff"
            },
            {
                "controlName":"delayBypass",
                "min":"0",
                "max":"1",
                "value":"1",
                "step":"1",
                "controlText":"Bypass",
                "controlProperty":"bypass"
            }
        ]
    },
    {
    "effectType":"chorus",
    "backgroundColor":"#134993",
    "labelText":"Chorus",
    "controlForegroundColor":"#FFFFFF",
    "controlBackgroundColor":"#3299BB",
    "fontFamily":"Pacifico",
    "controls":[
        {
            "controlName":"chorusRate",
            "min":"0",
            "max":"8",
            "value":"1",
            "step":"0.1",
            "controlText":"Rate",
            "controlProperty":"rate"
        },
        {
            "controlName":"chorusFeedback",
            "min":"0",
            "max":"1",
            "value":"0.04",
            "step":"0.01",
            "controlText":"Feedback",
            "controlProperty":"feedback"
        },
        {
            "controlName":"chorusDelay",
            "min":"0",
            "max":"1",
            "value":"0.04",
            "step":"0.01",
            "controlText":"Delay",
            "controlProperty":"delay"
        },
        {
            "controlName":"chorusBypass",
            "min":"0",
            "max":"1",
            "value":"1",
            "step":"1",
            "controlText":"Bypass",
            "controlProperty":"bypass"
        }
    ]
},
{
    "effectType":"tremolo",
    "backgroundColor":"#CC2A41",
    "labelText":"Tremolo",
    "controlForegroundColor":"#E8CAA4",
    "controlBackgroundColor":"#64908A",
    "fontFamily":"Lobster Two",
    "controls":[
        {
            "controlName":"tremoloIntensity",
            "min":"0",
            "max":"1",
            "value":"0.3",
            "step":"0.01",
            "controlText":"Intensity",
            "controlProperty":"intensity"
        },
        {
            "controlName":"tremoloRate",
            "min":"0.001",
            "max":"8",
            "value":"4",
            "step":"0.01",
            "controlText":"Rate",
            "controlProperty":"rate"
        },
        {
            "controlName":"tremoloStereoPhase",
            "min":"0",
            "max":"180",
            "value":"0",
            "step":"1",
            "controlText":"Phase",
            "controlProperty":"stereoPhase"
        },
        {
            "controlName":"tremoloBypass",
            "min":"0",
            "max":"1",
            "value":"1",
            "step":"1",
            "controlText":"Bypass",
            "controlProperty":"bypass"
        }
    ]
},
{
    "effectType":"filter",
    "backgroundColor":"#793A8B",
    "labelText":"Filter",
    "controlForegroundColor":"#E77A42",
    "controlBackgroundColor":"#85A08D",
    "fontFamily":"Pattaya",
    "controls":[
        {
            "controlName":"filterFrequency",
            "min":"20",
            "max":"22050",
            "value":"800",
            "step":"10",
            "controlText":"Frequency",
            "controlProperty":"frequency"
        },
        {
            "controlName":"filterQ",
            "min":"0.001",
            "max":"100",
            "value":"1",
            "step":"0.001",
            "controlText":"Q",
            "controlProperty":"Q"
        },
        {
            "controlName":"filterGain",
            "min":"-40",
            "max":"40",
            "value":"0",
            "step":"1",
            "controlText":"Gain",
            "controlProperty":"gain"
        },
        {
            "controlName":"filterBypass",
            "min":"0",
            "max":"1",
            "value":"1",
            "step":"1",
            "controlText":"Bypass",
            "controlProperty":"bypass"
        }
    ]
},
{
    "effectType":"wahwah",
    "backgroundColor":"#33793E",
    "labelText":"Wah Wah",
    "controlForegroundColor":"#FBE4D1",
    "controlBackgroundColor":"#93AB8F",
    "fontFamily":"Teko",
    "controls":[
        {
            "controlName":"wahwahBaseFrequency",
            "min":"0",
            "max":"1",
            "value":"0.25",
            "step":"0.01",
            "controlText":"Frequency",
            "controlProperty":"baseFrequency"
        },
        {
            "controlName":"wahwahExcursionOctaves",
            "min":"1",
            "max":"6",
            "value":"2",
            "step":"1",
            "controlText":"Octaves",
            "controlProperty":"excursionOctaves"
        },
        {
            "controlName":"wahwahSweep",
            "min":"0",
            "max":"1",
            "value":"0.2",
            "step":"0.01",
            "controlText":"Sweep",
            "controlProperty":"sweep"
        },
        {
            "controlName":"wahwahResonance",
            "min":"1",
            "max":"100",
            "value":"10",
            "step":"1",
            "controlText":"Resonance",
            "controlProperty":"resonance"
        },
        {
            "controlName":"wahwahSensitivity",
            "min":"-1",
            "max":"1",
            "value":"0.5",
            "step":"0.01",
            "controlText":"Sensitivity",
            "controlProperty":"sensitivity"
        },
        {
            "controlName":"wahwahBypass",
            "min":"0",
            "max":"1",
            "value":"1",
            "step":"1",
            "controlText":"Bypass",
            "controlProperty":"bypass"
        }
    ]
},
{
    "effectType":"gain",
    "backgroundColor":"#6B5344",
    "labelText":"Gain",
    "controlForegroundColor":"#FFFFFF",
    "controlBackgroundColor":"#6B5344",
    "fontFamily":"Oleo Script",
    "controls":[
        {
            "controlName":"gainGain",
            "min":"0",
            "max":"1",
            "value":"0.5",
            "step":"0.01",
            "controlText":"Volume",
            "controlProperty":"gain"
        }
    ]
},
/*{
    "effectType":"moog",
    "backgroundColor":"#793A8B",
    "labelText":"Moog",
    "controlForegroundColor":"#85A08D",
    "controlBackgroundColor":"#E77A42",
    "fontFamily":"Pattaya",
    "controls":[
        {
            "controlName":"moogCutoff",
            "min":"0",
            "max":"1",
            "value":"0.06",
            "step":"0.01",
            "controlText":"Cutoff",
            "controlProperty":"cutoff"
        },
        {
            "controlName":"moogResonance",
            "min":"0",
            "max":"4",
            "value":"3.5",
            "step":"0.01",
            "controlText":"Resonance",
            "controlProperty":"resonance"
        },
        {
            "controlName":"moogBufferSize",
            "min":"256",
            "max":"16384",
            "value":"4096",
            "step":"2",
            "controlText":"Buffer Size",
            "controlProperty":"bufferSize"
        }
    ]
}*/
/*{
    "effectType":"phaser",
    "backgroundColor":"#AB3E5B",
    "labelText":"Phaser",
    "controlForegroundColor":"#FFBE40",
    "controlBackgroundColor":"#EF746F",
    "fontFamily":"Berkshire Swash",
    "controls":[
        {
            "controlName":"phaserRate",
            "min":"0.01",
            "max":"8",
            "value":"1.2",
            "step":"0.01",
            "controlText":"Rate",
            "controlProperty":"rate"
        },
        {
            "controlName":"phaserDepth",
            "min":"0",
            "max":"1",
            "value":"0.3",
            "step":"0.01",
            "controlText":"Depth",
            "controlProperty":"depth"
        },
        {
            "controlName":"phaserFeedback",
            "min":"0",
            "max":"1",
            "value":"0.2",
            "step":"0.01",
            "controlText":"Feedback",
            "controlProperty":"feedback"
        },
        {
            "controlName":"phaserPhase",
            "min":"0",
            "max":"180",
            "value":"30",
            "step":"1",
            "controlText":"Phase",
            "controlProperty":"stereoPhase"
        },
        {
            "controlName":"phaserFrequency",
            "min":"500",
            "max":"1500",
            "value":"700",
            "step":"10",
            "controlText":"Frequency",
            "controlProperty":"baseModulationFrequency"
        },
        {
            "controlName":"phaserBypass",
            "min":"0",
            "max":"1",
            "value":"0",
            "step":"1",
            "controlText":"Bypass",
            "controlProperty":"bypass"
        }
    ]
},*/
/*{
    "effectType":"pingPongDelay",
    "backgroundColor":"#6B5344",
    "labelText":"Ping Pong",
    "controlForegroundColor":"#F8ECC9",
    "controlBackgroundColor":"#F1BBBA",
    "fontFamily":"Cookie",
    "controls":[
        {
            "controlName":"pingPongWetLevel",
            "min":"0",
            "max":"1",
            "value":"0",
            "step":"0.01",
            "controlText":"Wet",
            "controlProperty":"wetLevel"
        },
        {
            "controlName":"pingPongFeedback",
            "min":"0",
            "max":"1",
            "value":"0.3",
            "step":"0.01",
            "controlText":"Feedback",
            "controlProperty":"feedback"
        },
        {
            "controlName":"pingPongDelayTimeLeft",
            "min":"1",
            "max":"10000",
            "value":"150",
            "step":"10",
            "controlText":"Left",
            "controlProperty":"delayTimeLeft"
        },
        {
            "controlName":"pingPongDelayTimeRight",
            "min":"1",
            "max":"10000",
            "value":"300",
            "step":"10",
            "controlText":"Right",
            "controlProperty":"delayTimeRight"
        }
    ]
}*/
]

/*create effects*/
var tuna = new Tuna(audioContext);

if(indexOfEffect("chorus") > -1){
    var chorus = new tuna.Chorus({
        rate: effects[indexOfEffect("chorus")].controls[0].value,
        feedback: effects[indexOfEffect("chorus")].controls[1].value,
        delay: effects[indexOfEffect("chorus")].controls[2].value,
        bypass: effects[indexOfEffect("chorus")].controls[3].value
    });
}

if(indexOfEffect("delay") > -1){
    var delay = new tuna.Delay({
        feedback: effects[indexOfEffect("delay")].controls[0].value,
        delayTime: effects[indexOfEffect("delay")].controls[1].value,
        wetLevel: effects[indexOfEffect("delay")].controls[2].value,
        dryLevel: effects[indexOfEffect("delay")].controls[3].value,
        cutoff: effects[indexOfEffect("delay")].controls[4].value,
        bypass: effects[indexOfEffect("delay")].controls[5].value
    });
}

if(indexOfEffect("wahwah") > -1){
    var wahwah = new tuna.WahWah({
        automode: true,
        baseFrequency: effects[indexOfEffect("wahwah")].controls[0].value,
        excursionOctaves: effects[indexOfEffect("wahwah")].controls[1].value,
        sweep: effects[indexOfEffect("wahwah")].controls[2].value,
        resonance: effects[indexOfEffect("wahwah")].controls[3].value,
        sensitivity: effects[indexOfEffect("wahwah")].controls[4].value,
        bypass: effects[indexOfEffect("wahwah")].controls[5].value
    });
}

if(indexOfEffect("tremolo") > -1){
    var tremolo = new tuna.Tremolo({
        intensity: effects[indexOfEffect("tremolo")].controls[0].value,
        rate: effects[indexOfEffect("tremolo")].controls[1].value,
        stereoPhase: effects[indexOfEffect("tremolo")].controls[2].value,
        bypass: effects[indexOfEffect("tremolo")].controls[3].value
    });
}

if(indexOfEffect("phaser") > -1){
    var phaser = new tuna.Phaser({
        rate: effects[indexOfEffect("phaser")].controls[0].value,
        depth: effects[indexOfEffect("phaser")].controls[1].value,
        feedback: effects[indexOfEffect("phaser")].controls[2].value,
        stereoPhase: effects[indexOfEffect("phaser")].controls[3].value,
        baseModulationFrequency: effects[indexOfEffect("phaser")].controls[4].value,
        bypass: effects[indexOfEffect("phaser")].controls[5].value
    });
}

if(indexOfEffect("overdrive") > -1){
    var overdrive = new tuna.Overdrive({
        outputGain: effects[indexOfEffect("overdrive")].controls[0].value,
        drive: effects[indexOfEffect("overdrive")].controls[1].value,
        curveAmount: effects[indexOfEffect("overdrive")].controls[2].value,
        algorithmIndex: effects[indexOfEffect("overdrive")].controls[3].value,
        bypass: effects[indexOfEffect("overdrive")].controls[4].value
    });
}

if(indexOfEffect("pingPongDelay") > -1){
    var pingPongDelay = new tuna.PingPongDelay({
        wetLevel: effects[indexOfEffect("pingPongDelay")].controls[0].value,
        feedback: effects[indexOfEffect("pingPongDelay")].controls[1].value,
        delayTimeLeft: effects[indexOfEffect("pingPongDelay")].controls[2].value,
        delayTimeRight: effects[indexOfEffect("pingPongDelay")].controls[3].value,
    });
}

if(indexOfEffect("bitcrusher") > -1){
    var bitcrusher = new tuna.Bitcrusher({
        bits: effects[indexOfEffect("bitcrusher")].controls[0].value,
        normfreq: effects[indexOfEffect("bitcrusher")].controls[1].value,
        bufferSize: effects[indexOfEffect("bitcrusher")].controls[2].value
    });
}

if(indexOfEffect("moog") > -1){
    var moog = new tuna.MoogFilter({
        cutoff: effects[indexOfEffect("moog")].controls[0].value,
        resonance: effects[indexOfEffect("moog")].controls[1].value,
        bufferSize: effects[indexOfEffect("moog")].controls[2].value
    });
}

if(indexOfEffect("filter") > -1){
    var filter = new tuna.Filter({
        frequency: effects[indexOfEffect("filter")].controls[0].value,
        Q: effects[indexOfEffect("filter")].controls[1].value,
        gain: effects[indexOfEffect("filter")].controls[2].value,
        filterType: "lowpass",
        bypass: effects[indexOfEffect("filter")].controls[3].value
    });
}

if(indexOfEffect("gain") > -1){
    var gain = new tuna.Gain({
        gain: effects[indexOfEffect("gain")].controls[0].value,
    });
}

function createRackEffects(){
    /*create effects rack*/
    var rack = document.getElementById('effects-rack');

    if(rack){
        for(var i = 0; i < effects.length; i++) {
            var effect = effects[i];
            var controls = effect.controls;

            var divOuter = document.createElement("div");
            divOuter.classList.add("col-xs-12", "col-sm-12", "col-md-12", "col-lg-12");
            divOuter.style.textAlign = "center";
            divOuter.style.backgroundColor = effect.backgroundColor;
            rack.appendChild(divOuter);

            var divHeader = document.createElement("div");
            divHeader.classList.add("col-xs-12", "col-sm-12", "col-md-12", "col-lg-5");
            divOuter.appendChild(divHeader);

            var effectLabel = document.createElement("h6");
            var effectLabelText = document.createTextNode(effect.labelText);
            effectLabel.classList.add(effect.effectType+"-text-lg");
            effectLabel.style.paddingTop = "15px";
            effectLabel.style.fontSize = "75px";
            effectLabel.style.fontFamily = effect.fontFamily;
            effectLabel.style.color = effect.controlForegroundColor;
            effectLabel.appendChild(effectLabelText);
            divHeader.appendChild(effectLabel);

            var divControls = document.createElement("div");
            divControls.classList.add("col-xs-12", "col-sm-12", "col-md-12", "col-lg-7");
            divOuter.appendChild(divHeader);

            var tableControls = document.createElement("table");
            tableControls.classList.add("table");
            var tableControlsRow = document.createElement("tr");

            for(var j = 0; j < controls.length; j++) {
                var control = controls[j];

                var tableControlsData = document.createElement("td");
                var tableControlsInput = document.createElement("input");
                tableControlsInput.classList.add("effect-dial");
                tableControlsInput.setAttribute("name", control.controlName);
                tableControlsInput.setAttribute("id", control.controlName);
                tableControlsInput.setAttribute("data-effectIndex", i);
                tableControlsInput.setAttribute("data-controlIndex", j);
                tableControlsInput.setAttribute("type", "text");
                tableControlsInput.setAttribute("data-fgColor", effect.controlForegroundColor);
                tableControlsInput.setAttribute("data-bgColor", effect.controlBackgroundColor);
                tableControlsInput.setAttribute("data-min", control.min);
                tableControlsInput.setAttribute("data-max", control.max);
                tableControlsInput.setAttribute("value", control.value);
                tableControlsInput.setAttribute("data-step", control.step);
                tableControlsInput.setAttribute("data-width", "80");
                tableControlsInput.setAttribute("data-height", "80");
                tableControlsInput.setAttribute("data-displayInput", "false");
                tableControlsInput.setAttribute("data-displayPrevious", "true");
                tableControlsInput.setAttribute("data-thickness", "1");
                tableControlsInput.setAttribute("data-rotation", "anticlockwise");
                tableControlsData.appendChild(tableControlsInput);
                tableControlsRow.appendChild(tableControlsData);
            }

            tableControls.appendChild(tableControlsRow);
            var tableControlsRow = document.createElement("tr");

            for(var j = 0; j < controls.length; j++) {
                var control = controls[j];

                var tableControlsData = document.createElement("td");
                var tableControlsLabel = document.createElement("label");
                var tableControlsLabelText = document.createTextNode(control.controlText);
                tableControlsLabel.classList.add(effect.effectType+"-text-sm");
                tableControlsLabel.classList.add("effect-text-sm");
                // tableControlsLabel.style.fontSize = "24px";
                tableControlsLabel.style.fontFamily = effect.fontFamily;
                tableControlsLabel.style.color = effect.controlForegroundColor;
                tableControlsLabel.setAttribute("for", control.controlName);
                tableControlsLabel.appendChild(tableControlsLabelText);
                tableControlsData.appendChild(tableControlsLabel);
                tableControlsRow.appendChild(tableControlsData);
            }

            tableControls.appendChild(tableControlsRow);
            divControls.appendChild(tableControls);
            divOuter.appendChild(divControls);
        }
    }
}

function indexOfEffect(effectString){
    for(var i = 0; i < effects.length; i++) {
        if(effects[i].effectType.toLowerCase() == effectString.toLowerCase()){
            return i;
        }
    }
    return -1;
}
