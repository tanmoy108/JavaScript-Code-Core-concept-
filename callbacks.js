//A callback is a function passed as an argument to another function. In this code myDisplayer is a function that passed as a argument into another function called myCalculator..


function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);
