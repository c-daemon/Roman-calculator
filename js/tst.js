var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
var roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];

function numberToRoman(num) {
  var result = '';
  for (var i = 0;i<=decimal.length;i++) {
    while (num%decimal[i] < num) {
      result += roman[i];
      num -= decimal[i];
    }
  }
  return result;
}

function romanToNumber(str) {
  var result = 0;
  for (var i = 0;i<=decimal.length;i++) {
    while (str.indexOf(roman[i]) === 0){
      result += decimal[i];
      str = str.replace(roman[i],'');
    }
  }
  return result;
}

function romanNumeralCalculator(operand1,operand2,operator){

  var a = operand1.toUpperCase();
  var b = operand2.toUpperCase();

  a = romanToNumber(a);
  b = romanToNumber(b);

  var c = operator;

  var result = 0;
  switch (c){
    case "+":
      result = a + b;
      break;

    case "-":
      if(a>b){ result = a-b}
      else {result = b-a}
      break;

    case "*":
      result= a*b;
      break;

    case "/":
      result= a/b;
      break;
  }
  var finalResult = numberToRoman(result);
  return finalResult;
}

var val1="";
var val2="";
function getValue(){
   val1 = document.getElementById("operand1").value;
   val2 = document.getElementById("operand2").value;
  var regex = /[^XCMVILD]/i;
  if(regex.test(val1) || regex.test(val2))
    {
      alert("Enter a Valid Roman Numeral!");
    }
}
var addition = document.getElementById("add");
addition.addEventListener("click", function(){
  var operate = "+";
  var vResult = document.getElementById("resultBox");
  vResult.value = romanNumeralCalculator(val1,val2,operate);
});

var subTraction = document.getElementById("minus");
subTraction.addEventListener("click", function(){
  var operate = "-";
  var vResult = document.getElementById("resultBox");
  var vResultSub = romanNumeralCalculator(val1,val2,operate);
  if (vResultSub == 0){
    vResult.value = "None";
  }
  else
    vResult.value = vResultSub;
});

var multiply = document.getElementById("multi");
multiply.addEventListener("click",function(){
  var operate = "*";
  var vResult = document.getElementById("resultBox");
  vResult.value = romanNumeralCalculator(val1,val2,operate);
});

var divide = document.getElementById("divide");
divide.addEventListener("click", function(){
  var operate = "/";
  var vResult = document.getElementById("resultBox");
  var vResultDivide = romanNumeralCalculator(val1,val2,operate);
  if (vResultDivide == 0){
    vResult.value = "Can't Be Done!";
  }
  else
    vResult.value = vResultDivide;
});
