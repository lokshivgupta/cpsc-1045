let arr = [];
function updateValues(max,min,avg){
    document.getElementById("max").innerHTML = "Max: " +  max;
    document.getElementById("min").innerHTML = "MIn: " +  min;
    document.getElementById("avg").innerHTML = "Average: " +  avg;
}
function min(){
    let min = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min; 
}
function max(){
    let max = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;

}
function avg(){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    } 
    return sum / arr.length;
}
function addValue(){
    let input = document.getElementById("inputArray").value;
    if(input === ""){
        alert("Please enter a value");
        return;
    }
    input = Number(input);
    arr.push(input);
    document.getElementById("curentVal").innerHTML = "Current Array Values: " +  arr.toString();

    let maxValue = max();
    let minValue = min();
    let avgValue = avg();
    updateValues(maxValue, minValue, avgValue);
  
    
    
   
}