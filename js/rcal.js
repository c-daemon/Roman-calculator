const resultbox = document.getElementById("result");
const table = [
  [
    'M', 1000
  ],
  [
    'CM', 900
  ],
  [
    'D', 500
  ],
  [
    'CD', 400
  ],
  [
    'C', 100
  ],
  [
    'XC', 90
  ],
  [
    'L', 50
  ],
  [
    'XL', 40
  ],
  [
    'X', 10
  ],
  [
    'IX', 9
  ],
  [
    'V', 5
  ],
  [
    'IV', 4
  ],
  ['I', 1]
];

function intToRoman(num) {

  let roman = '';
  if (num == 0) {
    roman = "out of scope!";
  } else {

    for (let item of table) {
      while ((num - item[1]) >= 0) {
        num -= item[1];
        roman += item[0];
      }
    }
  }
  return roman;
}

function romanToInt(str) {
  str = (str.trim()).toUpperCase();
  let number = 0;

  for (let item of table) {

    flag = true;

    while (flag) {
      if (str.length >= item[0].length) {

        if (str.slice(0, item[0].length) == item[0]) {
          number += item[1];
          str = str.slice(item[0].length);
        } else {
          flag = false;
        }

      } else {
        flag = false;
      }
    }
  }
  return number;
}

function rCalculator(operator) {
  let rom1 = document.getElementById("roman1").value;
  let rom2 = document.getElementById("roman2").value;
  let operate = operator;

  if (rom1 == "") {

    alert("operand-1 can't be empty");
    return false;
  } else if (rom2 == "") {

    alert("operand-2 can't be empty");
    return false;
  } else {

    int1 = romanToInt(rom1);
    int2 = romanToInt(rom2);

    let result = 0;
    switch (operate) {
      case "+":
        result = int1 + int2;
        break;

      case "-":
        if (int1 >= int2) {
          result = int1 - int2
        } else {
          result = int2 - int1
        }
        break;

      case "*":
        result = int1 * int2;
        break;

      case "/":
        result = Math.floor(int1 / int2);
        break;

      default:
        result = "Invalid Operator";
    }
    console.log(result);
    displayResult = intToRoman(result);
    resultbox.value = displayResult;
  }
}

function checkData(input) {

  inputdata = document.getElementById(input).value;
  let regex = /[^IVXLCDM]/i;
  inputdata = inputdata.trim();
  if (regex.test(inputdata)) {
    alert("\"" + inputdata + "\" is not a valid Roman Numeral. Only these symbols are allowed: IVXLCDM");
    document.getElementById(input).value = "";
  }
}
