/* Qwerty Hancock 0.6.0 (c) 2012-18 Stuart Memo */
!function() {
    var a = this
      , b = "undefined" == typeof global ? a : a.window
      , c = "0.6.0"
      , d = {}
      , e = !1
      , f = {}
      , g = {
        65: "Cl",
        87: "C#l",
        83: "Dl",
        69: "D#l",
        68: "El",
        70: "Fl",
        84: "F#l",
        71: "Gl",
        89: "G#l",
        90: "G#l",
        72: "Al",
        85: "A#l",
        74: "Bl",
        75: "Cu",
        79: "C#u",
        76: "Du",
        80: "D#u",
        59: "Eu",
        186: "Eu",
        222: "Fu",
        221: "F#u",
        220: "Gu"
    }
      , h = function(a) {
        return Math.floor((d.width - a) / a)
    }
      , i = function(a) {
        var b;
        user_settings = a || {},
        d = {
            id: user_settings.id || "keyboard",
            octaves: user_settings.octaves || 3,
            width: user_settings.width,
            height: user_settings.height,
            startNote: user_settings.startNote || "A3",
            whiteKeyColour: user_settings.whiteKeyColour || "#fff",
            blackKeyColour: user_settings.blackKeyColour || "#000",
            activeColour: user_settings.activeColour || "yellow",
            borderColour: user_settings.borderColour || "#000",
            keyboardLayout: user_settings.keyboardLayout || "en"
        },
        b = document.getElementById(d.id),
        "undefined" == typeof d.width && (d.width = b.offsetWidth),
        "undefined" == typeof d.height && (d.height = b.offsetHeight),
        d.startOctave = parseInt(d.startNote.charAt(1), 10),
        A(),
        F.call(this, b)
    }
      , j = function(a) {
        var b, c, d = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
        return c = 3 === a.length ? a.charAt(2) : a.charAt(1),
        b = d.indexOf(a.slice(0, -1)),
        b = 3 > b ? b + 12 + 12 * (c - 1) + 1 : b + 12 * (c - 1) + 1,
        440 * Math.pow(2, (b - 49) / 12)
    }
      , k = function(a) {
        (null !== a || void 0 === typeof a) && (a.style.backgroundColor = d.activeColour)
    }
      , l = function(a) {
        null !== a && ("white" === a.getAttribute("data-note-type") ? a.style.backgroundColor = d.whiteKeyColour : a.style.backgroundColor = d.blackKeyColour)
    }
      , m = function(a) {
        var b, c = 0, e = a.length, f = [];
        for (b = 0; e > b; b++)
            if (d.startNote.charAt(0) === a[b]) {
                c = b;
                break
            }
        for (b = 0; e > b; b++)
            b + c > e - 1 ? f[b] = a[b + c - e] : f[b] = a[b + c];
        return f
    }
      , n = function(a) {
        a.el.style.backgroundColor = d.whiteKeyColour,
        a.el.style.border = "1px solid " + d.borderColour,
        a.el.style.borderRight = 0,
        a.el.style.height = d.height + "px",
        a.el.style.width = a.width + "px",
        a.el.style.borderRadius = "0 0 5px 5px",
        a.noteNumber === w() - 1 && (a.el.style.border = "1px solid " + d.borderColour)
    }
      , o = function(a) {
        var b = h(w())
          , c = Math.floor(b / 2);
        a.el.style.backgroundColor = d.blackKeyColour,
        a.el.style.border = "1px solid " + d.borderColour,
        a.el.style.position = "absolute",
        a.el.style.left = Math.floor((b + 1) * (a.noteNumber + 1) - c / 2) + "px",
        a.el.style.width = c + "px",
        a.el.style.height = d.height / 1.5 + "px",
        a.el.style.borderRadius = "0 0 3px 3px"
    }
      , p = function(a) {
        a.el.style.display = "inline-block",
        a.el.style["-webkit-user-select"] = "none",
        "white" === a.colour ? n(a) : o(a)
    }
      , q = function(a) {
        var b = function(a) {
            a.style.cursor = "default",
            a.style.fontSize = "0px",
            a.style.height = d.height + "px",
            a.style.padding = 0,
            a.style.position = "relative",
            a.style.listStyle = "none",
            a.style.margin = 0,
            a.style.width = d.width + "px",
            a.style["-webkit-user-select"] = "none"
        };
        b(a.container),
        b(a.el)
    }
      , r = function(a, b) {
        "li" == a.tagName.toLowerCase() && (e = !0,
        k(a),
        b(a.title, j(a.title)))
    }
      , s = function(a, b) {
        "li" == a.tagName.toLowerCase() && (e = !1,
        l(a),
        b(a.title, j(a.title)))
    }
      , t = function(a, b) {
        e && (k(a),
        b(a.title, j(a.title)))
    }
      , u = function(a, b) {
        e && (l(a),
        b(a.title, j(a.title)))
    }
      , v = function(a) {
        return a.el = document.createElement("li"),
        a.el.id = a.id,
        a.el.title = a.id,
        a.el.setAttribute("data-note-type", a.colour),
        p(a),
        a
    }
      , w = function() {
        return 7 * d.octaves
    }
      , x = function() {
        var a, b, c = this, e = [], f = 0, g = d.startOctave, i = w();
        for (a = 0; i > a; a++)
            a % this.whiteNotes.length === 0 && (f = 0),
            bizarre_note_counter = this.whiteNotes[f],
            "C" === bizarre_note_counter && 0 !== a && g++,
            b = v({
                colour: "white",
                octave: g,
                width: h(i),
                id: this.whiteNotes[f] + g,
                noteNumber: a
            }),
            e.push(b.el),
            a !== i - 1 && this.notesWithSharps.forEach(function(d, j) {
                d === c.whiteNotes[f] && (b = v({
                    colour: "black",
                    octave: g,
                    width: h(i) / 2,
                    id: c.whiteNotes[f] + "#" + g,
                    noteNumber: a
                }),
                e.push(b.el))
            }),
            f++;
        return e
    }
      , y = function(a) {
        a.keys.forEach(function(b) {
            a.el.appendChild(b)
        })
    }
      , z = function(a) {
        d.keyPressOffset = "C" === a[0] ? 0 : 1
    }
      , A = function() {
        var a = {
            container: document.getElementById(d.id),
            el: document.createElement("ul"),
            whiteNotes: m(["C", "D", "E", "F", "G", "A", "B"]),
            notesWithSharps: m(["C", "D", "F", "G", "A"])
        };
        return a.keys = x.call(a),
        z(a.whiteNotes),
        q(a),
        y(a),
        a.container.appendChild(a.el),
        a
    }
      , B = function(a) {
        return g[a].replace("l", parseInt(d.startOctave, 10) + d.keyPressOffset).replace("u", (parseInt(d.startOctave, 10) + d.keyPressOffset + 1).toString())
    }
      , C = function(a, b) {
        var c;
        return a.keyCode in f ? !1 : (f[a.keyCode] = !0,
        "undefined" != typeof g[a.keyCode] ? (c = B(a.keyCode),
        b(c, j(c)),
        k(document.getElementById(c)),
        !0) : !1)
    }
      , D = function(a, b) {
        var c;
        return delete f[a.keyCode],
        "undefined" != typeof g[a.keyCode] ? (c = B(a.keyCode),
        b(c, j(c)),
        l(document.getElementById(c)),
        !0) : !1
    }
      , E = function(a) {
        return a.ctrlKey || a.metaKey || a.altKey
    }
      , F = function(a) {
        var c = this;
        // b.addEventListener("keydown", function(a) {
        //     E(a) || C(a, c.keyDown) && a.preventDefault()
        // }),
        // b.addEventListener("keyup", function(a) {
        //     E(a) || D(a, c.keyUp) && a.preventDefault()
        // }),
        a.addEventListener("mousedown", function(a) {
            r(a.target, c.keyDown)
        }),
        a.addEventListener("mouseup", function(a) {
            s(a.target, c.keyUp)
        }),
        a.addEventListener("mouseover", function(a) {
            t(a.target, c.keyDown)
        }),
        a.addEventListener("mouseout", function(a) {
            u(a.target, c.keyUp)
        }),
        "ontouchstart"in document.documentElement && (a.addEventListener("touchstart", function(a) {
            r(a.target, c.keyDown)
        }),
        a.addEventListener("touchend", function(a) {
            s(a.target, c.keyUp)
        }),
        a.addEventListener("touchleave", function(a) {
            u(a.target, c.keyUp)
        }),
        a.addEventListener("touchcancel", function(a) {
            u(a.target, c.keyUp)
        }))
    }
      , G = function(a) {
        this.version = c,
        this.keyDown = function() {}
        ,
        this.keyUp = function() {}
        ,
        i.call(this, a)
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = G),
    exports.QwertyHancock = G) : a.QwertyHancock = G
}(this);
