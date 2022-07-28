var rs = require('readline-sync');

var fNum1 = rs.question('1st Number: ');
var fNum2 = rs.question('2nd Number: ');
var fNum3 = rs.question('3rd Number: ');
var fNum4 = rs.question('4th Number: ');
//var action = rs.question('Enter the action{+,-,*,/,%}');

//var result = fNum1 + action + fNum2

//var result = eval(result);
var answer1;
var answer2;
var answer3;
var answer4;

function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }else{
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }  
  }

  function sum(n){
var value = n;
var s = 0;
while(value){
s += value % 10;
value = Math.floor(value/10);
}

return s;
 }
function flip(n){
var digit = 0;
var result = 0;

while(n){
digit = n % 10;
result = (result * 10) + digit;
n= parseInt(n/10);

}
return result;



}

function palindrome(n){
 var original = n;
 var reverse = flip(n);
 if(reverse == original && n > 0){
     return "True";
 }
 return "False";

}


answer1 = factorial(fNum1);
answer2 = sum(fNum2);
answer3 = flip(fNum3);
answer4 = palindrome(fNum4);

console.log("Factorial of the 1st number is = " + answer1);
console.log("The sum of all digit of the 2nd number is = " + answer2);
console.log("The reverse of the 3rd number is = " + answer3);
console.log("Is the 4th number a palindrome (True/False)? = " + answer4);
