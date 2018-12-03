function triangleType() {
  var sides = [];
  var one = document.getElementById('first').value;
  var two = document.getElementById('second').value;
  var three = document.getElementById('third').value;
  sides.push(one, two, three);

  var a = Math.pow(sides[0], 2);
  var b = Math.pow(sides[1], 2);
  var c = Math.pow(sides[2], 2);
  var result;
  if (a===b, b===c, c===a) {
    result = "Equilateral triangle";
    console.log(result);
    document.getElementById("myText").innerHTML = result;
  }
  else if (a===b || c===b || c===a) {
    result = "Isosceles triangle";
    console.log(result);
    document.getElementById("myText").innerHTML = result;
  }
  else if (a===b && b!==c && a!==c) {
    result = "Scalene triangle";
    console.log(result);
    document.getElementById("myText").innerHTML = result;
  } else {
    result = "not a triangle";
    console.log(result);
    document.getElementById("myText").innerHTML = result;
  }

}
