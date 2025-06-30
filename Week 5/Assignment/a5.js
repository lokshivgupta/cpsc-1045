//File Name: a5.js
//Author: Lokshiv Gupta
//Date: June 2, 2025
//About: The program has multiple functions within it, and takes in user event through event handling and uses the response to calculate certain things

const textField1 = document.getElementById("label1");
const output = document.getElementById("output");
const output2 = document.getElementById("output2");
const output3 = document.getElementById("output3");
const textField2 = document.getElementById("year");

textField1.addEventListener("keyup", function(event){
    if(event.key === 'Enter'){
        let text = textField1.value;
        let length = text.length;
         if(length % 2 == 0){
            output.innerHTML = "the length of " + text + " is " + length + " and it is even ";
         }
         else{
            output.innerHTML = "The length of " + text + " is " + length + " and it is odd ";
         }
    }
});

function compVal(){
   let num1 = document.getElementById("num1").value;
   let num2 = document.getElementById("num2").value;

   num1 = Number(num1);
   num2 = Number(num2);

   if(num1 === 0 || num2 === 0){
      output2.innerHTML = "You entered a Zero";
   }else if(num1 === num2){
      output2.innerHTML = "They are divisible by each other";
   } else if(num1 % num2 == 0){
      output2.innerHTML = "The first is divisble by second ";
   }else if(num2 % num1 == 0){
      output2.innerHTML = "The second is divisble by first ";
   }else{
      output2.innerHTML = "They are not divisble";
   }
}
document.getElementById("b1").addEventListener("click", compVal);

textField2.addEventListener("keyup" ,function(event){
   if(event.key === 'Enter'){
      let text = Number(textField2.value);
      if(text < 1582){
         output3.innerHTML = text + " is invalid";
      }else {
         if((text % 4 == 0 && text % 100 !== 0 )|| text % 400 == 0){
            output3.innerHTML = text + " is a leap year";
         }else{
            output3.innerHTML = text + " is not a leap year";
         }
      }
   }
});