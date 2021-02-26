const canvas=document.getElementById("canvaselement");
const ctx=canvas.getContext("2d");
const width=400;
const height=500;
canvas.width=width;
canvas.height=height;
//create rectangle
function createrec(){
ctx.fillStyle="black";
ctx.fillRect(0,0,width,height);
ctx.fill();
}
createrec();
//create paddle
let paddle1={
	width:40,
	height:10,
	dx:10,
	xposi:200-width/2
};
let paddle2={
	width:40,
	height:10,
	dx:10,
	xposi:200-width/2
};
function drawpaddle(){
	ctx.beginPath();
	ctx.moveTo(paddle1.xposi,10);
	ctx.fillStyle="white";
	ctx.fillRect(paddle1.xposi,10,paddle1.width,paddle1.height);
	ctx.beginPath();
	ctx.moveTo(paddle2.xposi,480);
	ctx.fillStyle="white";
	ctx.fillRect(paddle2.xposi,480,paddle2.width,paddle2.height);
}
drawpaddle();
//create horizontalline
function horiline(){
	ctx.beginPath();
	ctx.moveTo(0,250);
	ctx.lineTo(400,250);
	ctx.strokeStyle="white";
	ctx.stroke();
}
horiline();
//create circle
const ball={
	xposi:200,
	yposi:250,
	size:10,
	dx:3,
	dy:2
};
function circleball(){
	ctx.beginPath();
	ctx.moveTo(ball.xposi,ball.yposi);
	ctx.fillStyle="white";
	ctx.arc(ball.xposi,ball.yposi,10,0,Math.PI*2,false);
	ctx.fill();
	
}
circleball();
//upperplayer
addEventListener('click',update);
let player1=0;
let player2=0;
function collision(){
	if(ball.xposi+ball.size>canvas.width)
	{
		ball.dx=-ball.dx;
	}
	if(ball.xposi-ball.size<0)
	{
		ball.dx=-ball.dx;
	}
	if((paddle1.xposi-paddle1.width<=ball.xposi && paddle1.xposi+paddle1.width>=ball.xposi) && ball.yposi==ball.size+20)
	{
		ball.dy=-ball.dy;
	}
	if((paddle2.xposi-paddle2.width<=ball.xposi && paddle2.xposi+paddle2.width>=ball.xposi) && ball.yposi==500-ball.size-20)
	{
		ball.dy=-ball.dy;
	}
	
	if(ball.yposi<ball.size+20)
	{
		ball.xposi=200;
		ball.yposi=250;
		++player2;
		document.getElementById("player2").innerHTML=player2;
	}
	if(ball.yposi>500-ball.size+20)
	{
		ball.xposi=200;
		ball.yposi=250;
		++player1;
		document.getElementById("player1").innerHTML=player1;
	}
}
function update(){
ctx.clearRect(0,0,canvas.width,canvas.height);
createrec();
drawpaddle();
horiline();
circleball();
ball.xposi+=ball.dx;
ball.yposi+=ball.dy;
collision();
requestAnimationFrame(update);
}

addEventListener("keydown",function(event){
	if(event.key=="ArrowLeft")
	{
		if(paddle1.xposi+paddle1.width>40)
		{
			ctx.clearRect(0,0,canvas.width,canvas.height);
			paddle1.xposi-=paddle1.dx;
			createrec();
			drawpaddle();
			horiline();
		}
	}
	else if(event.key=="ArrowRight")
	{
		if(paddle1.xposi+paddle1.width<400)
		{
			ctx.clearRect(0,0,canvas.width,canvas.height);
			paddle1.xposi+=paddle1.dx;
			createrec();
			drawpaddle();
			horiline();
		}
	}
	else if(event.key=="a")
	{
		if(paddle2.xposi+paddle2.width>40)
		{
			ctx.clearRect(0,0,canvas.width,canvas.height);
			paddle2.xposi-=paddle2.dx;
			createrec();
			drawpaddle();
			horiline();
		}
	}
	else if(event.key=="d")
	{
		if(paddle2.xposi+paddle2.width<400)
		{
			ctx.clearRect(0,0,canvas.width,canvas.height);
			paddle2.xposi+=paddle2.dx;
			createrec();
			drawpaddle();
			horiline();
		}
	}
});


























// const canvas=document.getElementById("canvaselement");
// const ctx=canvas.getContext("2d");
// const ball={
// 	x:200,
// 	y:200,
// 	size:30,
// 	dx:4,
// 	dy:5
// };
// function drawcircle(){
// 	ctx.beginPath();
// 	ctx.arc(ball.x,ball.y,ball.size,0,Math.PI*2);
// 	ctx.fillStyle="purple";
// 	ctx.fill();
// }
// function collision(){
// 	if(ball.x+ball.size>canvas.width)
// 	{
// 		ball.dx=-ball.dx;
// 	}
// 	if(ball.y+ball.size>canvas.height)
// 	{
// 		ball.dy=-ball.dy;
// 	}
// 	if(ball.y-ball.size<0)
// 	{
// 		ball.dy=-ball.dy;
// 	}
// 	if(ball.x-ball.size<0)
// 	{
// 		ball.dx=-ball.dx;
// 	}
// }
// function update(){
// ctx.clearRect(0,0,canvas.width,canvas.height);
// drawcircle();
// ball.x+=ball.dx;
// ball.y+=ball.dy;
// collision();
// requestAnimationFrame(update);
// }
// update();