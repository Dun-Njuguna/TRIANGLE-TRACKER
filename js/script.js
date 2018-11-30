var sides=[];
for (var i = 0; i <= 2; i++) {
	sides.push(parseInt(prompt('Enter the value of triangle sides ' + (i+1))));
	// sides = sides.sort((a, b) => a - b);

}
triangleType(sides);

function triangleType(side){

	var a = Math.pow(sides[0],2);
	var b = Math.pow(sides[1],2);
	var c = Math.pow(sides[2],2);

		if(c===a+b){
			console.log("right triangle");
		}else if(c<a+b){
			console.log("acute triangle");
		}else if(a===b,b!==c){
			console.log("isosceles triangle");
		}else if(a===b,b===c){
			console.log("equilateral triangle");
		}else if(a!= b,b!==c){
			console.log("scalene triangle");
		}else{
			console.log("not a triangle");
		}
	}
