console.log("PRINT ALL NUMBERS BETWEEN -10 AND 19");
var n=-10;
while(n<=19){
	console.log(n);
	n++;
}

console.log("PRINT ALL EVEN NUMBERS BETWEEN 10 AND 40");
n=10;
while(n<=40){
	console.log(n);
	n+=2;
}

console.log("PRINT ALL ODD NUMBERS BETWEEN 300 AND 333");
n=301;
while(n<=333){
	console.log(n);
	n+=2;
}

console.log("PRINT ALL NUMBERS DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 50");
n=5;
while(n<=50){
	if(n%5==0 && n%3==0)
	{
		console.log(n);
	}
	n++;
}