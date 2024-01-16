let A = false;
let B = true;

function lamp() {
    let bulb = document.getElementById("bulb");
    let light = document.getElementById("light");
    let state = (A&&B) || (!A&&!B)
    if (state) {
        light.style.opacity = 0.2
        bulb.style.background = "#FAEB83"
        console.log("nyala");
    }  else {
        light.style.opacity = null
        bulb.style.background = null
        console.log("mati");
    }
}

function saklarA(io) {
    let saklar = document.getElementById("saklar");
    let saklaroff = document.getElementById("saklaroff");
    A = io
    if (A == true) {
        saklar.style.display = "none"
        saklaroff.style.display = "block"
    } else {
        saklaroff.style.display = "none"
        saklar.style.display = "block"
    }
    lamp();
}

function saklarB(io) {
    let saklarB = document.getElementById("saklarB");
    let saklaroffB = document.getElementById("saklaroffB");
    B = io
    if (B == true) {
        saklarB.style.display = "none"
        saklaroffB.style.display = "block"
    } else {
        saklaroffB.style.display = "none"
        saklarB.style.display = "block"
    }
    lamp();
}