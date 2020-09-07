var movie =[
{
	name: "Veere Di Wedding",
	rate: 5,
	watch: true
},
{
	name: "Sonu ki teetu ki sweeti",
	rate: 4.9,
	watch: false
},
{
	name: "Yeh Jawani Hai Dewani",
	rate: 4.9,
	watch: false
},
{
	name: "Avengers",
	rate: 4.9,
	watch: true
}
]


movie.forEach(function(a){
	if(a.watch === true)
		{
			console.log("You have watched \"" +a.name + "\" - " + a.rate + " stars");
		}
		else
		{
			console.log("You have not seen \"" + a.name + "\" - " + a.rate + " stars");
		}
})