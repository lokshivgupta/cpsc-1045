
// File name: a3.js
 //Author: Loksiv Gupta 100408379
 //Date: May 21,, 2025
// About: This program has multiple function and each function has different functionality. First method tells us the number of cups, second one tell us about tip%, and third one forms an id
 
function determineCups() {
    let numOfMilimeter = +prompt("Enter the number of milliliters a recipe requires: ");
    let numberOfCups = numOfMilimeter / 250;
    let text = document.getElementById("q1");
    text.innerHTML = "You need " + numberOfCups + " cups";
}

function calculateTip() {
    let mealCost = +prompt("Enter your meal cost: ");
    let percentage = +prompt("enter the amount of percentage tip: ");

    let tip = mealCost * (percentage / 100);
    let totalBill = mealCost + tip;

    alert("your meal costs: " + "$" + mealCost + " and a tip of " + percentage + "%" + " is " + "$" + tip + " for a total of " + "$" + totalBill);
}

function formString() {
    let firstName = prompt("Enter your first name: ");
    let lastName = prompt("Enter your last name: ");

    let str1 = firstName.substring(0, 3).toLowerCase();
    let str2 = lastName.substring(lastName.length - 3).toUpperCase();

    let totalLength = firstName.length;
    totalLength += lastName.length;

    alert("Your id is " + str1 + str2 + totalLength);
}