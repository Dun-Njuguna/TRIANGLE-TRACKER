function triangleType() {
  // triangleType(sides);
  var sides = [];
  for (var i = 0; i <= 2; i++) {
    sides.push(parseInt(
      prompt('Enter the value of triangle sides ' + (i + 1))));
  }
  var a = Math.pow(sides[0], 2);
  var b = Math.pow(sides[1], 2);
  var c = Math.pow(sides[2], 2);
  var result;
  if (c === a + b) {
    result = "right triangle";
    console.log(result);
    document.getElementById("myText").innerHTML = result;
  } else if (c < a + b) {
    result = "right triangle";
    console.log(result);
    document.getElementById("myText").innerHTML = result;
  } else if (a === b, b !== c) {
    result = "right triangle";
    console.log(result);
    document.getElementById("myText").innerHTML = result;
  } else if (a === b, b === c) {
    result = "right triangle";
    console.log(v);
    document.getElementById("myText").innerHTML = result;
  } else if (a != b, b !== c) {
    result = "right triangle";
    console.log(result);
    document.getElementById("myText").innerHTML = result;
  } else {
    result = "right triangle";
    console.log(result);
    document.getElementById("myText").innerHTML = result;
  }
}
