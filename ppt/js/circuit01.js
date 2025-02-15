/**
 * Circuit01
 */
"use strict"

/*
var wW=window.innerWidth;
var wH=window.innerHeight;
*/
var canvasHTML=document.getElementById("Circuit01");
/*
canvasHTML.width=wW;
canvasHTML.height=wH;
*/
var ctx=canvasHTML.getContext("2d");
var ix;
var iy;
var x;
var y;
var d;
var dx;
var dy;

function beginCircuit(a,b) {
    ctx.lineWidth=1.5;
    ctx.strokeStyle="#000";
    ctx.beginPath();
    x=a;
    y=b;
    d=0;
    dx=1;
    dy=0;
    ix=x;
    iy=y;
    ctx.moveTo(x,y);
    drawWire(50);
    drawPower();
}
function endCircuit() {
    ctx.lineTo(ix,iy);
    ctx.stroke();
}
function drawWire(l) {
    x+=dx*l;
    y+=dy*l;
    ctx.lineTo(x,y);
}       
function drawPower() {
    var n;
    drawWire(10);
    n=3;
    ctx.moveTo(x+10*dy,y+10*dx);
    ctx.lineTo(x-10*dy,y-10*dx);
    x+=dx*5;
    y+=dy*5;
    while(n--) {
		ctx.moveTo(x+15*dy,y+15*dx);
		ctx.lineTo(x-15*dy,y-15*dx);
		x+=dx*5;
		y+=dy*5;
		ctx.moveTo(x+10*dy,y+10*dx);
		ctx.lineTo(x-10*dy,y-10*dx);
		if(n!=0) {
			x+=dx*5;
			y+=dy*5;
		}
    }
    ctx.moveTo(x,y);
    drawWire(10);
}
function drawCapacitor() {
    drawWire(22.5);
    ctx.moveTo(x+10*dy,y+10*dx);
    ctx.lineTo(x-10*dy,y-10*dx);
    x+=dx*5;
    y+=dy*5;
    ctx.moveTo(x+10*dy,y+10*dx);
    ctx.lineTo(x-10*dy,y-10*dx);
    ctx.moveTo(x,y);
    drawWire(22.5);
}
function drawInductor() {
    var n,xs,ys;
    drawWire(9);
    n=4;
    xs=1+Math.abs(dy);
    ys=1+Math.abs(dx);
    x+=dx*6;
    y+=dy*6;
    ctx.scale(xs,ys);
    while(n--) {
		ctx.moveTo(x/xs+5*Math.abs(dx),y/ys+5*dy);
		ctx.arc(x/xs,y/ys,5,Math.PI/2*dy,Math.PI+Math.PI/2*dy,1);
		x+=6.5*dx;
		y+=6.5*dy;
		if(n!=0) {
			if(dx>=0) {
				ctx.moveTo(x/xs-5*dx,y/ys-5*dy);
				}
			ctx.moveTo(x/xs-5*dx,y/ys-5*dy);
			ctx.arc(x/xs-6.5/2*dx,y/ys-6.5/2*dy,1.5,Math.PI+Math.PI/2*dy,Math.PI/2*dy,1);
		}
    }
    ctx.moveTo(x/xs-1.75*dx,y/ys-1.75*dy);
    ctx.scale(1/xs,1/ys);
    ctx.lineTo(x,y);
    drawWire(9);
}
function drawTrimmer() {
    ctx.moveTo(x+35*dx-7*dy,y+35*dy-7*dx);
    ctx.lineTo(x+15*dx+7*dy,y+15*dy+7*dx);
    ctx.moveTo(x+13*dx+4*dy,y+13*dy+4*dx);
    ctx.lineTo(x+17*dx+10*dy,y+17*dy+10*dx);
    ctx.moveTo(x,y);
    drawCapacitor();
}
function drawResistor() {
    var n;
    drawWire(10);
    n=5;
    x+=dx*5;
    y+=dy*5;
    while(n--) {
		ctx.lineTo(x-5*dy,y-5*dx);
		ctx.lineTo(x+5*dy,y+5*dx);
		x+=5*dx;
		y+=5*dy;
	}
	ctx.lineTo(x,y);
    drawWire(10);
}
function drawLamp() {
    drawWire(15);
	x+=dx*10;
    y+=dy*10;
	ctx.moveTo(x,y);
	ctx.arc(x, y, 10, Math.PI/4, 9 * Math.PI/4);
	ctx.stroke();
	ctx.moveTo(x+(-10)*Math.sin(Math.PI/4),y+(-10)*Math.sin(Math.PI/4));
	ctx.lineTo(x+(10)*Math.sin(Math.PI/4),y+(10)*Math.sin(Math.PI/4));
	ctx.moveTo(x+(10)*Math.sin(Math.PI/4),y+(-10)*Math.sin(Math.PI/4));
	ctx.lineTo(x+(-10)*Math.sin(Math.PI/4),y+(10)*Math.sin(Math.PI/4));
	x+=dx*10;
    y+=dy*10;
    ctx.moveTo(x,y);
    drawWire(15);
}
function drawVolt() {
    drawWire(10);
	ctx.arc(x+15*dx,y+15*dy,15,Math.PI+(d*Math.PI/2),3*Math.PI+(d*Math.PI/2));
	ctx.stroke();
	x+=dx*15;
    y+=dy*15;
    ctx.moveTo(x,y);
	ctx.font = "20px Arial";
	ctx.fillText("V",x-7.5,y+7.5);
	x+=dx*15;
    y+=dy*15;
    ctx.moveTo(x,y);
    drawWire(10);
}
function drawAmp() {
    drawWire(10);
	ctx.arc(x+15*dx,y+15*dy,15,Math.PI+(d*Math.PI/2),3*Math.PI+(d*Math.PI/2));
	ctx.stroke();
	x+=dx*15;
    y+=dy*15;
    ctx.moveTo(x,y);
	ctx.font = "20px Arial";
	ctx.fillText("A",x-7.5,y+7.5);
	x+=dx*15;
    y+=dy*15;
    ctx.moveTo(x,y);
    drawWire(10);
}
function drawVS() {
    drawWire(10);
	ctx.arc(x+15*dx,y+15*dy,15,Math.PI+(d*Math.PI/2),3*Math.PI+(d*Math.PI/2));
	ctx.stroke();
	x+=dx*15;
    y+=dy*15;
    ctx.moveTo(x,y);
	ctx.arc(x-5,y,5,0,Math.PI,1);
	ctx.moveTo(x,y);
	ctx.arc(x+5,y,5,Math.PI,0,1);
	x+=dx*15;
    y+=dy*15;
    ctx.moveTo(x,y);
    drawWire(10);
}
function drawCS() {
    drawWire(10);
	ctx.arc(x+15*dx,y+15*dy,15,Math.PI+(d*Math.PI/2),3*Math.PI+(d*Math.PI/2));
	ctx.stroke();
	x+=dx*5;
    y+=dy*5;
    ctx.moveTo(x,y);
	x+=dx*20;
    y+=dy*20;
	ctx.lineTo(x,y);
    ctx.moveTo(x,y);
	ctx.lineTo(x-5*dy-5*dx,y-5*dy+5*dx);
	ctx.moveTo(x,y);
	ctx.lineTo(x+5*dy-5*dx,y-5*dy-5*dx);
	x+=dx*5;
    y+=dy*5;
    ctx.moveTo(x,y);
    drawWire(10);
}
function turnClockwise() {
    d++;
    dx=Math.cos((Math.PI/2)*d);
    dy=Math.sin((Math.PI/2)*d);
}
function turnCounterClockwise() {
    d--;
    dx=Math.cos((Math.PI/2)*d);
    dy=Math.sin((Math.PI/2)*d);
}


beginCircuit(250, 250);
drawCS();
turnClockwise();
drawCS();
turnClockwise();
drawCapacitor();
drawCS();
drawVS();
turnClockwise();
drawCS();
endCircuit();