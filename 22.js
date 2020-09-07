var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var s1 = document.getElementById("span1");
var s2 = document.getElementById("span2");
var s3 = document.getElementById("span3");
var num =document.querySelector("input");
var p1score=0;
var p2score=0;
var winScore=5;
var gameOver=false;

btn1.addEventListener("click",function(){
	if(!gameOver)
	{
		p1score++;
		s1.textContent=p1score;
		if(p1score === winScore)
		{
			gameOver=!gameOver;
			s1.classList.add("win");
		}
	}
})

btn2.addEventListener("click",function(){
	if(!gameOver)
	{
		p2score++;
		s2.textContent=p2score;
		if(p2score === winScore)
		{
			gameOver=!gameOver;
			s2.classList.add("win");
		}
	}
})

btn3.addEventListener("click",function(){
	reset();
})

function reset (){
	p1score=0;
	p2score=0;
	gameOver=false;
	s1.textContent=p1score;
	s2.textContent=p2score;
	s1.classList.remove("win");
	s2.classList.remove("win");
}

num.addEventListener("change",function(){
 	s3.textContent= this.value;
 	winScore= Number(this.value);
 	reset();
 })