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
const xOffset = 25;
const yOffset = 325;
const textOffset = 20;
let radius = 5;
let x1Offset = 925;

let frame = 0;
let intervalHandle = null;
const setupInterval = () => { intervalHandle = setInterval(tick, intervalMs); };
const removeInterval = () => { if (!intervalHandle) return; clearInterval(intervalHandle); intervalHandle = null; };

const btnStart = document.getElementById("start");
const btnPause = document.getElementById("pause_resume");
const btnReset = document.getElementById("reset");

const rrR = document.getElementById("rrr");
const llL = document.getElementById("lll");
const ccC = document.getElementById("ccc");
const iiI = document.getElementById("iii");
const vV = document.getElementById("vv");
const fr = document.getElementById("fr");
const rR = document.getElementById("rr");
const lL = document.getElementById("ll");
const cC = document.getElementById("cc");

let rrr = 25; // radius 1
let lll = 15; // radius 2
let ccc = 10; // radius 3
let iii = 10; // radius 3
let vv = 100; // initial velocity (m/s)
let v = 4; // initial velocity (m/s)

let rr = true; // Resistor
let ll = true; // Induktor
let cc = true; // Kapasitor

const enableInputs = () => {
    btnStart.removeAttribute("disabled");
    btnPause.setAttribute("disabled", "disabled");
    btnReset.setAttribute("disabled", "disabled");
    rrR.removeAttribute("disabled");
    llL.removeAttribute("disabled");
    ccC.removeAttribute("disabled");
    iiI.removeAttribute("disabled");
    vV.removeAttribute("disabled");
    fr.removeAttribute("disabled");
	rR.removeAttribute("disabled");
	lL.removeAttribute("disabled");
	cC.removeAttribute("disabled");
};

const disableInputs = () => {
    btnStart.setAttribute("disabled", "disabled");
    btnPause.removeAttribute("disabled");
    btnReset.removeAttribute("disabled");
    rrR.setAttribute("disabled", "disabled");
    llL.setAttribute("disabled", "disabled");
    ccC.setAttribute("disabled", "disabled");
	iiI.setAttribute("disabled", "disabled");
    vV.setAttribute("disabled", "disabled");
    fr.setAttribute("disabled", "disabled");
	rR.setAttribute("disabled", "disabled");
    lL.setAttribute("disabled", "disabled");
	cC.setAttribute("disabled", "disabled");
};

const drawAxes = () => {
	ctx.font = "14px Times New Roman";
    ctx.strokeStyle = "#21215A";
	ctx.beginPath();
    ctx.moveTo(xOffset, yOffset);
    ctx.lineTo(xOffset + + 650, yOffset);
    ctx.stroke();

    ctx.fillText("t", xOffset + + 650 , yOffset - 2);
    for (let i = 0; i <= 600; i += 50) {
		ctx.fillText(i, xOffset + 5, yOffset + textOffset - i);
		ctx.fillText(-i, xOffset + 5, yOffset + textOffset + i);
    }
	for (let i = 1; i <= 8; i += 1) {
		ctx.fillText(i/4+" π", xOffset + i*(25*Math.PI) + 5, yOffset + textOffset);
    }

    ctx.beginPath();
    ctx.moveTo(xOffset, canvas.height - 625);
    ctx.lineTo(xOffset, canvas.height - 25);
    ctx.stroke();

    ctx.fillText("V", xOffset - 2, 20);
	ctx.font = "12px Times New Roman";
	ctx.fillText("©Wahyu Dwi Anggoro",canvas.width - 115,10);
};const drawAxes2 = () => {
    ctx.strokeStyle = "#21215A";
	ctx.beginPath();
    ctx.moveTo(x1Offset - 200, yOffset);
    ctx.lineTo(x1Offset + + 200, yOffset);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x1Offset, yOffset + + 200);
    ctx.lineTo(x1Offset,  yOffset - 200);
    ctx.stroke();
};
const drawGrid = () => {
    ctx.strokeStyle = "mediumorchid";
    for (let i = 25*Math.PI; i <= 200*Math.PI; i += 25*Math.PI) {
        ctx.beginPath();
        ctx.moveTo(xOffset + i, yOffset + 300);
        ctx.lineTo(xOffset + i, yOffset -300);
        ctx.stroke();
    }
	for (let i = -50; i >= -300; i -= 50) {
        ctx.beginPath();
		ctx.moveTo(xOffset , yOffset + i);
        ctx.lineTo(xOffset + 200*Math.PI, yOffset + i);
        ctx.stroke();
    }
	for (let i = 50; i <= 300; i += 50) {
        ctx.beginPath();
		ctx.moveTo(xOffset , yOffset + i);
        ctx.lineTo(xOffset + 200*Math.PI, yOffset + i);
        ctx.stroke();
    }
    ctx.strokeStyle = "#000";
};

const drawCircle = (x, y, color) => {
    ctx.strokeStyle = color;
	ctx.fillStyle = color;
	ctx.moveTo(x, y);
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.stroke();
	ctx.fill();
	ctx.strokeStyle = "#000";
	ctx.fillStyle = "#000";
};

const drawPathI = () => {
    ctx.strokeStyle = "DodgerBlue";
    let px = 0;
    let py = 0;
    for (let i = 0; i <= frame; i++) {
        let t = tCoordinate(i); // t in seconds
        let x = xCoordinate(t);
        let y = yICoordinate(t);
        if (!px) px = x;
        if (!py) py = y;
        ctx.beginPath();
        ctx.moveTo(px, py);
        if (px < x) ctx.lineTo(x, y);
        ctx.stroke();
        px = x;
        py = y;
    }
    ctx.strokeStyle = "#000";
};
const drawPathR = () => {
    ctx.strokeStyle = "Tomato";
    let px = 0;
    let py = 0;
    for (let i = 0; i <= frame; i++) {
        let t = tCoordinate(i); // t in seconds
        let x = xCoordinate(t);
        let y = yRCoordinate(t);
        if (!px) px = x;
        if (!py) py = y;
        ctx.beginPath();
        ctx.moveTo(px, py);
        if (px < x) ctx.lineTo(x, y);
        ctx.stroke();
        px = x;
        py = y;
    }
    ctx.strokeStyle = "#000";
};
const drawPathL = () => {
    ctx.strokeStyle = "SlateBlue";
    let px = 0;
    let py = 0;
    for (let i = 0; i <= frame; i++) {
        let t = tCoordinate(i); // t in seconds
        let x = xCoordinate(t);
        let y = yLCoordinate(t);
        if (!px) px = x;
        if (!py) py = y;
        ctx.beginPath();
        ctx.moveTo(px, py);
        if (px < x) ctx.lineTo(x, y);
        ctx.stroke();
        px = x;
        py = y;
    }
    ctx.strokeStyle = "#000";
};
const drawPathC = () => {
    ctx.strokeStyle = "MediumSeaGreen";
    let px = 0;
    let py = 0;
    for (let i = 0; i <= frame; i++) {
        let t = tCoordinate(i); // t in seconds
        let x = xCoordinate(t);
        let y = yCCoordinate(t);
        if (!px) px = x;
        if (!py) py = y;
        ctx.beginPath();
        ctx.moveTo(px, py);
        if (px < x) ctx.lineTo(x, y);
        ctx.stroke();
        px = x;
        py = y;
    }
    ctx.strokeStyle = "#000";
};
const drawPathT = () => {
    ctx.strokeStyle = "maroon";
    let px = 0;
    let py = 0;
    for (let i = 0; i <= frame; i++) {
        let t = tCoordinate(i); // t in seconds
        let x = xCoordinate(t);
        let y = yTCoordinate(t);
        if (!px) px = x;
        if (!py) py = y;
        ctx.beginPath();
        ctx.moveTo(px, py);
        if (px < x) ctx.lineTo(x, y);
        ctx.stroke();
        px = x;
        py = y;
    }
    ctx.strokeStyle = "#000";
};
const drawHorizontal = (y,color) => {
	ctx.strokeStyle = color;
	ctx.lineWidth = 1;
    ctx.beginPath();
	ctx.setLineDash([5, 5]);
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
	ctx.setLineDash([]);
	ctx.strokeStyle = "#000";
	ctx.lineWidth = 2;
};
const drawFasor = (x,y,f,color,ang) => {
    ctx.strokeStyle = color;
	ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + + f*Math.cos(ang),y - f*Math.sin(ang));
    ctx.stroke();
	canvas_arrow(ctx, x, y, x + + f*Math.cos(ang), y - f*Math.sin(ang), 5, color);
	ctx.strokeStyle = "#000";
	ctx.fillStyle = "#000";
};
const drawLegend = () => {
	ctx.font = "18px Times New Roman";
    ctx.fillStyle = "DodgerBlue";
	ctx.fillText("I = Kuat Arus (Perbesaran 10 ×)", x1Offset, yOffset - 300);
	ctx.fillStyle = "Tomato";
	ctx.fillText("VR = Tegangan Resistor", x1Offset, yOffset - 285);
	ctx.fillStyle = "SlateBlue";
	ctx.fillText("VL = Tegangan Induktor", x1Offset, yOffset - 270);
	ctx.fillStyle = "MediumSeaGreen";
	ctx.fillText("VC = Tegangan Kapasitor", x1Offset, yOffset - 255);
	ctx.fillStyle = "maroon";
	ctx.fillText("VT = Tegangan Total", x1Offset, yOffset - 240);
	ctx.fillStyle = "#000";
	ctx.font = "12px Times New Roman";
};
const reset = () => {
	iii = iiI.value;
    rrr = rrR.value;
	lll = llL.value;
	ccc = ccC.value;
    vv = vV.value;
    frameRate = fr.value;
	
    intervalMs = Math.floor(1000 / frameRate);

	rr = rR.checked;
    ll = lL.checked;
	cc = cC.checked;

    removeInterval();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    frame = 0;
    enableInputs();
	drawAxes();
	drawAxes2();
	drawGrid();
	
};

reset();


	
const tCoordinate = (frame) => frame * (vv/200) * intervalMs / 1000;
const xCoordinate = (t) => + xOffset + + (50*(v*t)%(200*Math.PI));
const yICoordinate = (t) => + yOffset - iii*10*Math.sin(v*t);
const yRCoordinate = (t) => + yOffset - rrr*iii*Math.sin(v*t);
const yLCoordinate = (t) => + yOffset - lll*vv*0.001*iii*Math.sin(v*t + + 0.5*Math.PI);
const yCCoordinate = (t) => + yOffset - (1000000/(ccc*vv))*iii*Math.sin(v*t - 0.5*Math.PI);
const phi = () => { 
	if (rr && ll) {
		return Math.atan((lll*vv*0.001)/rrr);
	} else if (rr && cc) {
		return Math.atan(((1000000/(ccc*vv)))/rrr);
	} else if (ll && cc) {
		return 0;
	} else if (rr && ll && cc) {
		return Math.atan(((lll*vv*0.001 - 1000000/(ccc*vv)))/rrr);
	};
};
const yTCoordinate = (t) => { 
	if (rr && ll) {
		return + yOffset - iii*(rrr*Math.sin(v*t) + + lll*vv*0.001*Math.cos(v*t));
	} else if (rr && cc) {
		return + yOffset - iii*(rrr*Math.sin(v*t) - (1000000/(ccc*vv))*Math.cos(v*t));
	} else if (ll && cc) {
		return + yOffset - iii*(lll*vv*0.001*Math.cos(v*t) - (1000000/(ccc*vv))*Math.cos(v*t));
	} else if (rr && ll && cc) {
		return + yOffset - iii*(rrr*Math.sin(v*t) + + lll*vv*0.001*Math.cos(v*t) - (1000000/(ccc*vv))*Math.cos(v*t));
	};
};
const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
	
    let t = tCoordinate(frame); // t in seconds
    x = xCoordinate(t);
    yI = yICoordinate(t);
    yR = yRCoordinate(t);
    yL = yLCoordinate(t);
	yC = yCCoordinate(t);
	yT = yTCoordinate(t);

    drawAxes();
	drawAxes2();
	drawGrid();
	drawLegend();
	drawCircle(x,yI,"DodgerBlue");
	drawPathI();
	
	drawHorizontal(yI, "DodgerBlue");
	if (rr) {
		drawCircle(x,yR,"Tomato");
		drawPathR();
		drawHorizontal(yR, "Tomato");
		drawFasor(x1Offset,yOffset,rrr*iii,"Tomato",v*t);
	};
	if (ll) {
		drawCircle(x,yL, "SlateBlue");
		drawPathL();
		drawHorizontal(yL, "SlateBlue");
		drawFasor(x1Offset,yOffset,lll*vv*0.001*iii,"SlateBlue",v*t + + 0.5*Math.PI);
	};
	if (cc) {
		drawCircle(x,yC, "MediumSeaGreen");
		drawPathC();
		drawHorizontal(yC, "MediumSeaGreen");
		drawFasor(x1Offset,yOffset,(1000000/(ccc*vv))*iii,"MediumSeaGreen",v*t - 0.5*Math.PI);
	}
	if ((rr && ll) || (rr && cc) || (ll && cc)) {
		drawCircle(x,yT, "maroon");
		drawPathT();
		drawHorizontal(yT, "maroon");
		
	};
	if (rr && ll) {
		drawFasor(x1Offset,yOffset,iii*Math.sqrt(rrr*rrr+lll*vv*0.001*lll*vv*0.001),"maroon",v*t + + Math.atan((lll*vv*0.001)/rrr));
	} else if (rr && cc) {
		drawFasor(x1Offset,yOffset,iii*Math.sqrt(rrr*rrr+(1000000/(ccc*vv))*(1000000/(ccc*vv))),"maroon",v*t - Math.atan(((1000000/(ccc*vv)))/rrr));
	} else if (ll && cc) {
		drawFasor(x1Offset,yOffset,iii*(lll*vv*0.001-(1000000/(ccc*vv))),"maroon",v*t + + 0.5*Math.PI );
	} else if (rr && ll && cc) {
		drawFasor(x1Offset,yOffset,iii*Math.sqrt(rrr*rrr+(lll*vv*0.001-(1000000/(ccc*vv)))*(lll*vv*0.001-(1000000/(ccc*vv)))),"maroon",v*t + + Math.atan(((lll*vv*0.001 - 1000000/(ccc*vv)))/rrr));
	};
	drawFasor(x1Offset,yOffset,iii*10,"DodgerBlue",v*t);
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
