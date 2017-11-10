function romanize(num) {
  var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},
      roman = '';
  for ( i in lookup ) {
    while ( num >= lookup[i] ) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
}
function deromanize(rom){
  var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},
      deci = '';
  for (i in rom){
    if(i ==)
  }
}
function chk_operand(operand){
  if(typeof operand === "number"){
    if(operand == 0){
      return "0 is not defined in Roman Numerals"
    }
  }else{
    return "invalid entry"

  }
}
function chk_operator(operator){
  valid_operation = ["+", "-", "*", "/"]
  if (operator in valid_operation){
    return operator
  }else{
    return "Not a valid operator, please enter any of these operation " + valid_operation;
  }
}

var stdin = process.openStdin();

stdin.addListener("data", function(d) {
    // note:  d is an object, and when converted to a string it will
    // end with a linefeed.  so we (rather crudely) account for that
    // with toString() and then trim()
    console.log(romanize(d));
  });
