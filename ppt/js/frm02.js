/**
 * Parabolic Motion
 *
 * @author Afaan Bilal
 * @link https://afaan.dev/parabolic-motion
 */

const canvas = document.getElementById("c");
var ctx = canvas.getContext("2d");

let frameRate = 60;
let intervalMs = Math.floor(1000 / frameRate);

const toRad = (angle) => angle * (Math.PI / 180);
const xOffset = 325;
const yOffset = 325;
const textOffset = 20;
let aa = 0;
let radius = 10;

let frame = 0;
let intervalHandle = null;
const setupInterval = () => { intervalHandle = setInterval(tick, intervalMs); };
const removeInterval = () => { if (!intervalHandle) return; clearInterval(intervalHandle); intervalHandle = null; };

const btnStart = document.getElementById("start");
const btnPause = document.getElementById("pause_resume");
const btnReset = document.getElementById("reset");

const jJ = document.getElementById("jj");
const vV = document.getElementById("vv");
const sS = document.getElementById("ss");
const iR = document.getElementById("ir");
const fr = document.getElementById("fr");
const ag = document.getElementById("ag");

const sP = document.getElementById("sp");
const sH = document.getElementById("sh");
const sV = document.getElementById("sv");
const sC = document.getElementById("sc");
const sA = document.getElementById("sa");
const sG = document.getElementById("sg");

let jj = 250; // initssl height
let vv = 10; // initssl velocity (m/s)
let ss = 0; // launch angle (degrees)

let sp = true; // show path
let sh = false; // show horizontal
let sv = false; // show vertical
let sc = false; // show coordinates
let sa = true; // show axes
let sg = false; // show grid

let a = 0;
let ang = 0;
let vCos = 0;
let vSin = 0;

const enableInputs = () => {
    btnStart.removeAttribute("disabled");
    btnPause.setAttribute("disabled", "disabled");
    btnReset.setAttribute("disabled", "disabled");
    jJ.removeAttribute("disabled");
    vV.removeAttribute("disabled");
    sS.removeAttribute("disabled");
    iR.removeAttribute("disabled");
    fr.removeAttribute("disabled");
    ag.removeAttribute("disabled");
    sP.removeAttribute("disabled");
    sH.removeAttribute("disabled");
    sV.removeAttribute("disabled");
    sC.removeAttribute("disabled");
    sA.removeAttribute("disabled");
    sG.removeAttribute("disabled");
};

const disableInputs = () => {
    btnStart.setAttribute("disabled", "disabled");
    btnPause.removeAttribute("disabled");
    btnReset.removeAttribute("disabled");
    jJ.setAttribute("disabled", "disabled");
    vV.setAttribute("disabled", "disabled");
    sS.setAttribute("disabled", "disabled");
    iR.setAttribute("disabled", "disabled");
    fr.setAttribute("disabled", "disabled");
    ag.setAttribute("disabled", "disabled");
    sP.setAttribute("disabled", "disabled");
    sH.setAttribute("disabled", "disabled");
    sV.setAttribute("disabled", "disabled");
    sC.setAttribute("disabled", "disabled");
    sA.setAttribute("disabled", "disabled");
    sG.setAttribute("disabled", "disabled");
};

const drawAxes = () => {
    ctx.beginPath();
    ctx.moveTo(canvas.width - 625, yOffset);
    ctx.lineTo(canvas.width - 25, yOffset);
    ctx.stroke();

    ctx.fillText("m", canvas.width - 15, yOffset - 2);
    for (let i = 0; i <= 300; i += 50) {
        ctx.fillText(i, xOffset + i + 5, yOffset + textOffset);
		ctx.fillText(i, xOffset + 5, yOffset + textOffset - i);
		ctx.fillText(-i, xOffset - i + 5, yOffset + textOffset);
		ctx.fillText(-i, xOffset + 5, yOffset + textOffset + i);
    }

    ctx.beginPath();
    ctx.moveTo(xOffset, canvas.height - 615);
    ctx.lineTo(xOffset, canvas.height - 25);
    ctx.stroke();

    ctx.fillText("m", xOffset - 2, 20);
};

const drawGrid = () => {
    ctx.strokeStyle = "#999";

    for (let i = -300; i <= 600; i += 50) {
        ctx.beginPath();
        ctx.moveTo(xOffset + i, canvas.height - 625);
        ctx.lineTo(xOffset + i, canvas.height - 25);
        ctx.stroke();
		ctx.moveTo(canvas.width - 625, yOffset + i);
        ctx.lineTo(canvas.width - 25, yOffset + i);
        ctx.stroke();
    }

    ctx.strokeStyle = "#000";
};

const drawCircle = (x, y) => {
    ctx.moveTo(x, y);
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.stroke();
	ctx.fill();
};
const drawRadius = (x, y) => {
	ctx.strokeStyle = "green";
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(xOffset, yOffset);
    ctx.stroke();
	ctx.strokeStyle = "#000";
};

const drawPath = () => {
    ctx.strokeStyle = "#00f";

    let px = 0;
    let py = 0;

    for (let i = 0; i <= frame; i++) {
        let t = tCoordinate(i); // t in seconds

        let x = xCoordinate(t);
        let y = yCoordinate(t);

        if (!px) px = x;
        if (!py) py = y;

        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(x, y);
        ctx.stroke();

        px = x;
        py = y;
    }

    ctx.strokeStyle = "#000";
};

const drawVertical = (x) => {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
};

const drawHorizontal = (y) => {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
};



const drawCoordinates = (x, y) => {
    ctx.fillText("t: " + tCoordinate(frame).toFixed(3) + " s", x + 10, y - 50);
    ctx.fillText("x: " + (x - xOffset).toFixed(3) + " m", x + 10, y - 40);
    ctx.fillText("y: " + (yOffset - y).toFixed(3) + " m", x + 10, y - 30);
	ctx.fillText("θ: " + ((ang/Math.PI)%2).toFixed(3) + "π rad", x + 10, y - 20);
};

const reset = () => {
    jj = jJ.value;
    vv = vV.value;
    ss = sS.value;
    radius = iR.value;
    frameRate = fr.value;
    aa = ag.value;

    intervalMs = Math.floor(1000 / frameRate);

    sp = sP.checked;
    sh = sH.checked;
    sv = sV.checked;
    sc = sC.checked;
    sa = sA.checked;
    sg = sG.checked;

    a = toRad(ss);


	

    removeInterval();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    sa && drawAxes();
    sg && drawGrid();
    drawCircle(xOffset + jj*Math.cos(a), yOffset - jj*Math.sin(a));
    frame = 0;
    enableInputs();
};

reset();

const tCoordinate = (frame) => frame * intervalMs / 1000;
const xCoordinate = (t) => xOffset + jj*Math.cos(a + vv*t/jj + 0.5*aa*t*t);
const yCoordinate = (t) => yOffset - jj*Math.sin(a + vv*t/jj + 0.5*aa*t*t);
const TCoordinate = (t) => a + vv*t/jj + 0.5*aa*t*t;

const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let t = tCoordinate(frame); // t in seconds

    x = xCoordinate(t);
    y = yCoordinate(t);
	ang = TCoordinate(t)

    drawCircle(x, y);
	drawRadius(x, y);
    sp && drawPath();
    sh && drawHorizontal(y);
    sv && drawVertical(x);
    sc && drawCoordinates(x, y);
    sa && drawAxes();
    sg && drawGrid();


};

const tick = () => { draw(); frame++; };

btnStart.addEventListener("click", () => {
    if (intervalHandle) return;

    setupInterval();

    disableInputs();
});

btnPause.addEventListener("click", () => {
    if (intervalHandle) {
        removeInterval();
        btnPause.textContent = "Resume";
    } else {
        setupInterval();
        btnPause.textContent = "Pause";
    }
});

btnReset.addEventListener("click", reset);

Array.from(document.getElementsByTagName("input")).forEach((e) => { e.addEventListener("change", reset); });