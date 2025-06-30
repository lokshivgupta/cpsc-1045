
const guess = document.getElementById("val").value;
const output = document.getElementById("p1");
function guessNumber(){
    let rand = Math.floor(Math.random()*(89 +1 ) + 10);
    if(rand == guess){
        output.innerHTML = "Your guess is correct";
    }else{
        output.innerHTML = "your guess was incorrect. the number was " + rand;
    }

}
document.getElementById("b1").addEventListener("click", guessNumber);