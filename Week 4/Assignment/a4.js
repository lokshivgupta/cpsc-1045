//File Name: a4.js
//Author: Lokshiv Gupta
//Date: May 28, 2025
//About: This program has mutliple function which uses event listener, and calls those fucntions according to what user wants

const strInput = document.getElementById("strInput");
const output = document.getElementById("p1");

function toUpper(){
    let text = strInput.value;
     text = text.toUpperCase();
    return output.innerHTML = text;
}

function toLower(){
    let text = strInput.value;
    text = text.toLowerCase();
    return output.innerHTML = text;
}
document.getElementById("lCase").addEventListener("click" , toLower);

function getLength(){
    let length = strInput.value.length;
    return output.innerHTML = length;
}
document.getElementById("length").onclick = getLength;

function getSubstring(){
    let text = strInput.value;
    let start = document.getElementById("stIndex").value;
    let end = document.getElementById("endIndex").value;
    let subString = text.substring(start,end);
    return output.innerHTML = subString;

}
document.getElementById("subStr").addEventListener("click" , getSubstring);

function clearFields(){
    strInput.value = "";
    document.getElementById("stIndex").value = "";
    document.getElementById("endIndex").value = "";
    return output.innerHTML = "Output String will appear here";
}
document.getElementById("reset").addEventListener("click" , clearFields);