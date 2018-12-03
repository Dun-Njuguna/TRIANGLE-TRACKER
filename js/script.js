function triangleType() {
  var one = document.getElementById('first').value;
  var two = document.getElementById('second').value;
  var three = document.getElementById('third').value;
  var sides = [];
  sides.push(one, two, three);
  var a = parseInt(sides[0]);
  var b = parseInt(sides[1]);
  var c = parseInt(sides[2]);
  var result;
  if (a === b, b === c, c === a) {
    result = "Equilateral triangle";
    console.log(result);
    document.getElementById("myText").innerHTML = result;
  } else if (a === b || c === b || c === a) {
    result = "Isosceles triangle";
    console.log(result);
    document.getElementById("myText").innerHTML = result;
  } else if (((a + b) <= c) || ((a + c) <= b) || ((b + c) <= a)) {
    result = "not a triangle";
    console.log(result);
    document.getElementById("myText").innerHTML = result;
  } else {
    result = "Scalene";
    console.log(result);
    document.getElementById("myText").innerHTML = result;
  }
}
