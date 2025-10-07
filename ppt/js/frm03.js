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
let xOffset = 5;
let yOffset = 5;
let x1Offset = 0;
let y1Offset = 0;
let x2Offset = 0;
let y2Offset = 0;
let x3Offset = 0;
let y3Offset = 0;
const textOffset = 20;
let radius = 10;
let ang1 = 0;
let ang2 = 0;
let ang3 = 0;
let vv1 = 0;
let vv2 = 0;
let vv3 = 0;

let frame = 0;
let intervalHandle = null;
const setupInterval = () => { intervalHandle = setInterval(tick, intervalMs); };
const removeInterval = () => { if (!intervalHandle) return; clearInterval(intervalHandle); intervalHandle = null; };

const btnStart = document.getElementById("start");
const btnPause = document.getElementById("pause_resume");
const btnReset = document.getElementById("reset");

const jJ1 = document.getElementById("jj1");
const jJ2 = document.getElementById("jj2");
const jJ3 = document.getElementById("jj3");
const vV = document.getElementById("vv");
const fr = document.getElementById("fr");
const sP = document.getElementById("sp");
const bG = document.getElementById("bg");
const bS = document.getElementById("bs");
const sD = document.getElementById("sd");

let jj1 = 200; // radius 1
let jj2 = 150; // radius 2
let jj3 = 100; // radius 3
let vv = 1; // initial velocity (m/s)

let sp = true; // Roda sepusat
let bg = false; // Roda bersinggungan
let bs = false; // Roda bersabuk
let sd = false; // show vektor v

const enableInputs = () => {
    btnStart.removeAttribute("disabled");
    btnPause.setAttribute("disabled", "disabled");
    btnReset.setAttribute("disabled", "disabled");
    jJ1.removeAttribute("disabled");
    jJ2.removeAttribute("disabled");
    jJ3.removeAttribute("disabled");
    vV.removeAttribute("disabled");
    fr.removeAttribute("disabled");
	sP.removeAttribute("disabled");
	bG.removeAttribute("disabled");
	bS.removeAttribute("disabled");
	sD.removeAttribute("disabled");
};

const disableInputs = () => {
    btnStart.setAttribute("disabled", "disabled");
    btnPause.removeAttribute("disabled");
    btnReset.removeAttribute("disabled");
    jJ1.setAttribute("disabled", "disabled");
    jJ2.setAttribute("disabled", "disabled");
    jJ3.setAttribute("disabled", "disabled");
    vV.setAttribute("disabled", "disabled");
    fr.setAttribute("disabled", "disabled");
	sP.setAttribute("disabled", "disabled");
    bG.setAttribute("disabled", "disabled");
	bS.setAttribute("disabled", "disabled");
	sD.setAttribute("disabled", "disabled");
};

const drawCircle1 = (x, y) => {
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
const drawCircle = (x, y, r,fill) => {
    ctx.strokeStyle = "#5D2049";
	ctx.fillStyle = fill;
	ctx.moveTo(x, y);
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.stroke();
	ctx.fill();
	ctx.strokeStyle = "#000";
	ctx.fillStyle = "#000";
};

const drawVec = (x,y,ang) => {
    ctx.strokeStyle = "#FF0084";
	ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - jj1/5*Math.sin(ang), y - jj1/5*Math.cos(ang));
    ctx.stroke();
	canvas_arrow(ctx, x, y, x - jj1/5*Math.sin(ang), y - jj1/5*Math.cos(ang), 5, "#FF0084")
	ctx.strokeStyle = "#000";
	ctx.fillStyle = "#000";
};
const drawVec2 = (x,y,ang) => {
    ctx.strokeStyle = "#FF0084";
	ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - jj1/5*Math.sin(ang), y + jj1/5*Math.cos(ang));
    ctx.stroke();
	canvas_arrow(ctx, x, y, x - jj1/5*Math.sin(ang), y + jj1/5*Math.cos(ang), 5, "#FF0084")
	ctx.strokeStyle = "#000";
	ctx.fillStyle = "#000";
};
const drawBelt1 = (x1,y1,x2,y2,jj1,jj2) => {
	let ang1 = Math.asin(0.5 * jj1 / (+ jj1 + + jj2 + + 10));
	let ang2 = Math.asin(0.5 * jj2 / (+ jj1 + + jj2 + + 10));
    ctx.strokeStyle = "#5D2049";
	ctx.beginPath();
    ctx.moveTo(x1 + jj1 * Math.sin(ang1), y1 - jj1 * Math.cos(ang1));
    ctx.lineTo(x2 + jj2 * Math.sin(ang2), y2 - jj2 * Math.cos(ang2));
    ctx.stroke();
	ctx.moveTo(x1 + jj1 * Math.sin(ang1), y1 + jj1 * Math.cos(ang1));
    ctx.lineTo(x2 + jj2 * Math.sin(ang2), y2 + jj2 * Math.cos(ang2));
    ctx.stroke();
	ctx.strokeStyle = "#000";
	ctx.fillStyle = "#000";
};
const drawBelt2 = (x1,y1,x2,y2,jj1,jj2) => {
	let ang1 = Math.asin(0.5 * jj1 / (+ jj1 + + jj2 + + 10));
	let ang2 = Math.asin(0.5 * jj2 / (+ jj1 + + jj2 + + 10));
    ctx.strokeStyle = "#5D2049";
	ctx.beginPath();
    ctx.moveTo(x1 + jj1 * Math.cos(ang1), y1 + jj1 * Math.sin(ang1));
    ctx.lineTo(x2 + jj2 * Math.cos(ang2), y2 + jj2 * Math.sin(ang2));
    ctx.stroke();
	ctx.moveTo(x1 - jj1 * Math.cos(ang1), y1 + jj1 * Math.sin(ang1));
    ctx.lineTo(x2 - jj2 * Math.cos(ang2), y2 + jj2 * Math.sin(ang2));
    ctx.stroke();
	ctx.strokeStyle = "#000";
	ctx.fillStyle = "#000";
};
const reset = () => {
    jj1 = jJ1.value;
	jj2 = jJ2.value;
	jj3 = jJ3.value;
    vv = vV.value;
    frameRate = fr.value;
	
	xOffset = 5;
	yOffset = 5;
	x1Offset = 0;
	y1Offset = 0;
	x2Offset = 0;
	y2Offset = 0;
	x3Offset = 0;
	y3Offset = 0;

    intervalMs = Math.floor(1000 / frameRate);

	sp = sP.checked;
    bg = bG.checked;
	bs = bS.checked;
	sd = sD.checked;

    removeInterval();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    frame = 0;
    enableInputs();
	
};

reset();


	
const tCoordinate = (frame) => frame * intervalMs / 1000;
const x1Coordinate = (t) => + x1Offset + + jj1*Math.cos(vv1*t);
const y1Coordinate = (t) => + y1Offset - jj1*Math.sin(vv1*t);
const x2Coordinate = (t) => { 
	if (bg) {
		return + x2Offset - jj2*Math.cos(vv2*t);
	} else {
		return + x2Offset + + jj2*Math.cos(vv2*t);
	};
}
const y2Coordinate = (t) => + y2Offset - jj2*Math.sin(vv2*t);
const x3Coordinate = (t) => + x3Offset + + jj3*Math.cos(vv3*t);
const y3Coordinate = (t) => + y3Offset - jj3*Math.sin(vv3*t);
const T1Coordinate = (t) => vv1*t
const T2Coordinate = (t) => vv2*t
const T3Coordinate = (t) => vv3*t
const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	if (bg) {
    vv1 = vv;
    vv2 = - vv * jj1 / jj2;
	vv3 = vv * jj1 / jj3;
	x1Offset = + xOffset + + jj1;
	y1Offset = + yOffset + + jj1;
	x2Offset = + xOffset + + 2 * jj1 + + jj2;
	y2Offset = + yOffset + + jj1;
	x3Offset = + xOffset + + 2 * jj1 + + jj2;
	y3Offset = + yOffset + + jj1 + + jj2 + + jj3;
} else if (bs) {
    vv1 = vv;
    vv2 = vv * jj1 / jj2;
	vv3 = vv * jj1 / jj3;
	x1Offset = + xOffset + + jj1;
	y1Offset = + yOffset + + jj1;
	x2Offset = + xOffset + + 2 * jj1 + + jj2 + 10;
	y2Offset = + yOffset + + jj1;
	x3Offset = + xOffset + + 2 * jj1 + + jj2 + 10;
	y3Offset = + yOffset + + jj1 + + jj2 + + jj3 + 10;
} else {
	vv1 = vv;
    vv2 = vv;
	vv3 = vv;
	x1Offset = + xOffset + + jj1;
	y1Offset = + yOffset + + jj1;
	x2Offset = + xOffset + + jj1;
	y2Offset = + yOffset + + jj1;
	x3Offset = + xOffset + + jj1;
	y3Offset = + yOffset + + jj1;
}
    let t = tCoordinate(frame); // t in seconds
	ang1 = T1Coordinate(t)
	ang2 = T2Coordinate(t)
	ang3 = T3Coordinate(t)
    x1 = x1Coordinate(t);
    y1 = y1Coordinate(t);
	x2 = x2Coordinate(t);
    y2 = y2Coordinate(t);
	x3 = x3Coordinate(t);
    y3 = y3Coordinate(t);

    
	bs && drawBelt1(x1Offset,y1Offset,x2Offset,y2Offset,jj1,jj2);
	bs && drawBelt2(x2Offset,y2Offset,x3Offset,y3Offset,jj2,jj3);
	drawCircle(x1Offset, y1Offset, jj1,"#D4AFD0");
	drawCircle(x2Offset, y2Offset, jj2,"#E8A7B9");
	drawCircle(x3Offset, y3Offset, jj3,"#EBB8B0");
	drawCircle1(x1, y1);
	drawCircle1(x2, y2);
	drawCircle1(x3, y3);
	
	sd && drawVec(x1,y1,ang1); 
	bg && sd && drawVec2(x2,y2,ang2);
	(bs || sp) && sd && drawVec(x2,y2,ang2);
	sd && drawVec(x3,y3,ang3);
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
