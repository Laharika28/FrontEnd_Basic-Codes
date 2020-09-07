var todoList=[];
window.setTimeout(function(){
 var c="";
 do{
 	c=prompt("What would you like to do?");
	if(c === "new")
	{
		var newtodo=prompt("Enter a new todo");
		todoList.push(newtodo);
		console.log(newtodo + " added to the list");
	}
	else if(c === "list")
	{
		console.log("*********************");
		todoList.forEach(function(item,index){
			console.log(index + " : " + item);
		});
		console.log("*********************");
	}
	else if(c === "delete")
	{
		
		var i=prompt("Enter the index of the element to be deleted");
		todoList.splice(i,1);
		console.log("Todo Removed");

	}
 }while(c !== "quit");
 console.log("Ok,you quit the APP!");
},500);