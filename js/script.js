"use strict";

let btns = document.querySelectorAll(".btn");
let num1 = document.querySelectorAll(".digits");
let operators = document.querySelectorAll(".mathButtons");
let display = document.querySelector("#display");
let input1;
for (let i = 0; i <= num1.length - 1; i++) {
  num1[i].addEventListener("click", function () {
    display.value += num1[i].value;
    input1 = Number(display.value)
    // console.log(input1);
    
  });
}
operators[0].addEventListener("click", function () {
  display.value += operators[0].value
  });
operators[1].addEventListener("click", function () {
  display.value += operators[1].value
  });
operators[2].addEventListener("click", function () {
  display.value += "*"
  });
operators[4].addEventListener("click", function () {
  display.value += operators[4].value
  });
let input2;
if (input1) {
  for (let i = 0; i <= num1.length - 1; i++) {
    num1[i].addEventListener("click", function () {
      display.value += num1[i].value;
      input2 = Number(display.value)
     
    });
  }
}
operators[3].addEventListener('click',function () {
display.value = eval(display.value)
})
let clear = document.getElementById("clearButton");
clear.addEventListener("click",function(){
  display.value = " "
})
