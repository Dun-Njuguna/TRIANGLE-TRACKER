
function triangleType() {
  // triangleType(sides);
  var sides = [];
  // for (var i = 0; i <= 2; i++) {
  //   sides.push(parseInt(
  //     prompt('Enter the value of triangle sides ' + (i + 1))));
  // }
  var one = document.getElementById('first').value;
  var two = document.getElementById('second').value;
  var three = document.getElementById('third').value;
  sides.push(one,two,three);

  var a = Math.pow(sides[0], 2);
  var b = Math.pow(sides[1], 2);
  var c = Math.pow(sides[2], 2);
  var result;
  if (c === a + b) {
    result = "right1 triangle";
    console.log(result);
    document.getElementById("myText").innerHTML = result;
  } else if (c < a + b) {
    result = "right2 triangle";
    console.log(result);
    document.getElementById("myText").innerHTML = result;
  } else if (a === b, b !== c) {
    result = "right3 triangle";
    console.log(result);
    document.getElementById("myText").innerHTML = result;
  } else if (a === b, b === c) {
    result = "right4 triangle";
    console.log(v);
    document.getElementById("myText").innerHTML = result;
  } else if (a != b, b !== c) {
    result = "right5 triangle";
    console.log(result);
    document.getElementById("myText").innerHTML = result;
  } else {
    result = "right6 triangle";
    console.log(result);
    document.getElementById("myText").innerHTML = result;
  }

}
