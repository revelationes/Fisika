/**
 * Parabolic Motion
 *
 * @author Afaan Bilal
 * @link https://afaan.dev/parabolic-motion
 */

const canvas = document.getElementById("c");
var ctx = canvas.getContext("2d");
ctx.lineWidth = 2;

let frameRate = 60;
let intervalMs = Math.floor(1000 / frameRate);

const toRad = (angle) => angle * (Math.PI / 180);
const xOffset = 30;
const yOffset = 600;
const textOffset = 20;
let g = 9.8;
let radius = 10;

let frame = 0;
let intervalHandle = null;
const setupInterval = () => { intervalHandle = setInterval(tick, intervalMs); };
const removeInterval = () => { if (!intervalHandle) return; clearInterval(intervalHandle); intervalHandle = null; };

const btnStart = document.getElementById("start");
const btnPause = document.getElementById("pause_resume");
const btnReset = document.getElementById("reset");

const iH = document.getElementById("ih");
const iV = document.getElementById("iv");
const iA = document.getElementById("ia");
const iR = document.getElementById("ir");
const fr = document.getElementById("fr");
const ag = document.getElementById("ag");

const sP = document.getElementById("sp");
const sH = document.getElementById("sh");
const sV = document.getElementById("sv");
const sC = document.getElementById("sc");
const sA = document.getElementById("sa");
const sG = document.getElementById("sg");
const sD = document.getElementById("sd");

let ih = 0; // initial height
let iv = 0; // initial velocity (m/s)
let ia = 0; // launch angle (degrees)

let sp = true; // show path
let sh = false; // show horizontal
let sv = false; // show vertical
let sc = false; // show coordinates
let sa = true; // show axes
let sg = false; // show grid
let sd = false; // show speed

let a = 0;
let vCos = 0;
let vSin = 0;

const enableInputs = () => {
    btnStart.removeAttribute("disabled");
    btnPause.setAttribute("disabled", "disabled");
    btnReset.setAttribute("disabled", "disabled");
    iH.removeAttribute("disabled");
    iV.removeAttribute("disabled");
    iA.removeAttribute("disabled");
    iR.removeAttribute("disabled");
    fr.removeAttribute("disabled");
    ag.removeAttribute("disabled");
    sP.removeAttribute("disabled");
    sH.removeAttribute("disabled");
    sV.removeAttribute("disabled");
    sC.removeAttribute("disabled");
    sA.removeAttribute("disabled");
    sG.removeAttribute("disabled");
	sD.removeAttribute("disabled");
};

const disableInputs = () => {
    btnStart.setAttribute("disabled", "disabled");
    btnPause.removeAttribute("disabled");
    btnReset.removeAttribute("disabled");
    iH.setAttribute("disabled", "disabled");
    iV.setAttribute("disabled", "disabled");
    iA.setAttribute("disabled", "disabled");
    iR.setAttribute("disabled", "disabled");
    fr.setAttribute("disabled", "disabled");
    ag.setAttribute("disabled", "disabled");
    sP.setAttribute("disabled", "disabled");
    sH.setAttribute("disabled", "disabled");
    sV.setAttribute("disabled", "disabled");
    sC.setAttribute("disabled", "disabled");
    sA.setAttribute("disabled", "disabled");
    sG.setAttribute("disabled", "disabled");
	sD.setAttribute("disabled", "disabled");
};

const drawAxes = () => {
	ctx.strokeStyle = "#21215A";
    ctx.beginPath();
    ctx.moveTo(xOffset, yOffset);
    ctx.lineTo(canvas.width - xOffset, yOffset);
    ctx.stroke();

    ctx.fillText("m", canvas.width - xOffset + 5, yOffset + 2);
    for (let i = 0; i <= 900; i += 50) {
        ctx.fillText(i, xOffset + i - 5, yOffset + textOffset);
    }

    ctx.beginPath();
    ctx.moveTo(xOffset, yOffset);
    ctx.lineTo(xOffset, canvas.height - yOffset);
    ctx.stroke();

    ctx.fillText("m", xOffset - 5, 20);
    for (let i = yOffset; i >= canvas.height - yOffset; i -= 50) {
        ctx.fillText(yOffset - i, xOffset - textOffset, i + 2);
    }
};

const drawGrid = () => {
    ctx.strokeStyle = "#E0754C";

    for (let i = 50; i <= 900; i += 50) {
        ctx.beginPath();
        ctx.moveTo(xOffset + i, yOffset);
        ctx.lineTo(xOffset + i, canvas.height - yOffset);
        ctx.stroke();
    }

    for (let i = yOffset - 50; i >= canvas.height - yOffset; i -= 50) {
        ctx.beginPath();
        ctx.moveTo(xOffset, i);
        ctx.lineTo(canvas.width - xOffset, i);
        ctx.stroke();
    }

    ctx.strokeStyle = "#000";
};

const drawCircle = (x, y) => {
    ctx.strokeStyle = "#5D2049";
	ctx.fillStyle = "#5D2049";
	ctx.moveTo(x, y);
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.stroke();
	ctx.fill();
	ctx.strokeStyle = "#000";
	ctx.fillStyle = "#000";
};

const drawPath = () => {
    ctx.strokeStyle = "#273C99";

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
const drawSpeed = (x,y) => {
    ctx.strokeStyle = "#FF0084";
	ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + vCos, y);
    ctx.stroke();
	ctx.moveTo(x, y);
    ctx.lineTo(x, y - vy);
    ctx.stroke();
	canvas_arrow(ctx, x, y, x, y - vy, 5,"#FF0084");
	canvas_arrow(ctx, x, y, x + vCos, y, 5, "#FF0084");
	ctx.strokeStyle = "#000";
	ctx.fillStyle = "#000";
};
const drawCoordinates = (x, y) => {
    ctx.fillText("t: " + tCoordinate(frame).toFixed(3) + " s", x + 10, y - 50);
    ctx.fillText("x: " + (x - xOffset).toFixed(3) + " m", x + 10, y - 40);
    ctx.fillText("y: " + (yOffset - y).toFixed(3) + " m", x + 10, y - 30);
	ctx.fillStyle = "#f00";
	ctx.fillText("vx: " + vCos.toFixed(3) + " m/s", x + 10, y - 20);
	ctx.fillText("vy: " + vy.toFixed(3) + " m/s", x + 10, y - 10);
	ctx.fillStyle = "#000";
};

const reset = () => {
    ih = iH.value;
    iv = iV.value;
    ia = iA.value;
    radius = iR.value;
    frameRate = fr.value;
    g = ag.value;

    intervalMs = Math.floor(1000 / frameRate);

    sp = sP.checked;
    sh = sH.checked;
    sv = sV.checked;
    sc = sC.checked;
    sa = sA.checked;
    sg = sG.checked;
	sd = sD.checked;

    a = toRad(ia);
    vCos = iv * Math.cos(a);
    vSin = iv * Math.sin(a);

    removeInterval();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    sa && drawAxes();
    sg && drawGrid();
    drawCircle(xOffset, yOffset - ih);
    frame = 0;
    enableInputs();
};

reset();

const tCoordinate = (frame) => frame * intervalMs / 1000;
const xCoordinate = (t) => xOffset + vCos * t;
const yCoordinate = (t) => yOffset - ih - (vSin * t - g * t * t / 2);
const vyComp = (t) => vSin - g*t;

const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let t = tCoordinate(frame); // t in seconds

    x = xCoordinate(t);
    y = yCoordinate(t);
	vy = vyComp(t)

    drawCircle(x, y);
    sp && drawPath();
    sh && drawHorizontal(y);
    sv && drawVertical(x);
    sc && drawCoordinates(x, y);
    sa && drawAxes();
    sg && drawGrid();
	sd && drawSpeed(x, y);

    if (y >= yOffset && frame > 0) {
        frame = 0;
        removeInterval();
    }
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
function canvas_arrow(context, fromx, fromy, tox, toy, r, style){
	context.fillStyle = style;
	var x_center = tox;
	var y_center = toy;
	
	var angle;
	var x;
	var y;
	
	context.beginPath();
	
	angle = Math.atan2(toy-fromy,tox-fromx)
	x = r*Math.cos(angle) + x_center;
	y = r*Math.sin(angle) + y_center;

	context.moveTo(x, y);
	
	angle += (1/3)*(2*Math.PI)
	x = r*Math.cos(angle) + x_center;
	y = r*Math.sin(angle) + y_center;
	
	context.lineTo(x, y);
	
	angle += (1/3)*(2*Math.PI)
	x = r*Math.cos(angle) + x_center;
	y = r*Math.sin(angle) + y_center;
	
	context.lineTo(x, y);
	
	context.closePath();
	
	context.fill();
	context.fillStyle = "000";
}
btnReset.addEventListener("click", reset);

Array.from(document.getElementsByTagName("input")).forEach((e) => { e.addEventListener("change", reset); });
