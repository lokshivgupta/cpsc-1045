
function prompting(){
    let phrase = prompt("Enter the phrase");
    let letter  = prompt("Enter the letter: ");
    findLetters(phrase,letter);
}
function findLetters(phrase, letter){
  
    phrase = phrase.toLowerCase();
    letter = letter.toLowerCase();
    let str = "";
    for(let i = 0; i < phrase.length; i++){
        str += "<p>";
        if(phrase.charAt(i) == letter){
            str += i;
        }
        str += "<p>";
    }

    let div = document.getElementById("mydiv");
    div.innerHTML = str;

}
document.getElementById("b1").addEventListener("click", prompting);