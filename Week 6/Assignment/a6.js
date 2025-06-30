//Name: a6.js
//Author: Lokshiv Gupta
//Date: June 23, 2025
//About: Program hs multiple event handlers and use loops to go through the user unputs
document.getElementById("vowels").addEventListener("keydown", function(event){
    if(event.key === 'Enter'){
        vowelCounter();
    }
});
function vowelCounter(){
    let text = document.getElementById("vowels");
    text = text.value.toLowerCase();
    let a = 0, e = 0 , i = 0, o =0 , u = 0;
    for(let j = 0; j < text.length; j++){
        let ch = text[j];
        if(ch === 'a'){
            a++;
        }else if(ch === 'e'){
            e++;
        }else if(ch === 'i'){
            i++;
        }else if(ch === 'o'){
            o++;
        }else if (ch === 'u'){
            u++;
        }
    }
    let firstOutput = document.getElementById("vowelsOutput");
    firstOutput.innerHTML = " Your string " + text + " contains " + a + " A's " + e + " E's " + i + "I's " + o + " O's " +" and "+ u + " U's";
}

function findMaxMin(){
    let num;
    let max;
    let min;
    let firstNum = true;
    do{
         num = prompt("Enter some numbers: ");
         if(num === null || isNaN(Number(num))){
            break;
         }
         num = Number(num);

         if(firstNum){
            max = num;
            min = num;
            firstNum = false;
         }else{
            if(num > max){
                max = num;
             }
             if ( num < min){
                min = num;
             }

         }
    }while(true);
    let numOutput = document.getElementById("numberOutput");
    if(firstNum){
        numOutput.innerHTML = "No valid input";
    }else{
        numOutput.innerHTML = "The min is " + min + " the max is " + max;
    }
    
}
document.getElementById("numberButton").addEventListener("click", findMaxMin);

 document.getElementById("firstNum").addEventListener("keydown", enterKeyPressed);
 document.getElementById("secondNum").addEventListener("keydown",enterKeyPressed );

function enterKeyPressed(event){
    if(event.key === 'Enter'){
        seriesOfNum();
    }
}

function seriesOfNum(){
    let num1 = document.getElementById("firstNum");
    let num2 = document.getElementById("secondNum");

    let output3 = document.getElementById("output_3");
    num1 = Number(num1.value);
    num2 = Number(num2.value);


    if(isNaN(num1) || isNaN(num2)){
        output3.innerHTML = "This is not a number";
    }else{
        let max = Math.max(num1, num2);
        let min = Math.min(num1, num2);
        let result ="";


        for(let i = min; i <= max; i++){
            result += i + " ";
        }
        output3.innerHTML = result;
    }
}
