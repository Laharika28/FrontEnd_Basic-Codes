console.log("Functions are printReverse() , isUniform() , sumArray() , max() with an array as its parameter");
function printReverse(a){
	for(var i=a.length-1;i>=0;i--){
		console.log(a[i]);
	}
}

function isUniform(a){
	var c=a[0];
	 for(i=1;i<a.length;i++)
	 {
	    if(c !== a[i])
	    {
	    	return false;
	    }
	 }
	 return true;	
}
 
function sumArray(a) {
	// body...
	var sum=0;
	a.forEach(function(n){
		sum+=n;
	});
	console.log("sum = " + sum);
}

function max(a) {
	// body...
	var m=a[0];
	a.forEach(function(n){
		if(m<n)
			m=n;
	});
	return m;
}