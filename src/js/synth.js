function createSynth(){
    keyboard = new QwertyHancock({
         id: 'keyboard',
         /*width: 1200,*/
         height: 250,
         octaves: 2,
         startNote: 'C4'
    });

    document.getElementById("synth-effects").style.display = "block";
}

function animateBar(barElement, withTimeout, timeout, oscIndex){
    var v =  0;
    var s = 'up';
    var i = 0;

    var redraw = function () {
        if(v == 15 || v == 0){
            i++;
        }

        s = v == 15 ? 'down' : (v == 0 ? 'up' : s);
        s == 'up' ? v++ : v--;

        barElement
            .find('input:eq('+v+')')
            .val(Math.floor(Math.sin(i+v*i)*1000))
            .trigger('change');

        if(canLoop[oscIndex]){
            timeout = window.setTimeout(redraw, 1000/60);
        }
    };

    redraw();

    if(withTimeout){
        window.setTimeout(function(){ window.clearTimeout(timeout); }, 1000);
    }
}
