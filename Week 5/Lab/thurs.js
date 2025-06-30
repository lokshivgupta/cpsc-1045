let pay;
function calcPay(){
    let hours = document.getElementById("val1").value;
    if (hours<=40){
        pay=(17 * hours);
    } else{
        pay = (17 * 40) + ((hours - 40) * 25);
    }
    document.getElementById("p1").innerHTML = "Your Pay: " + "$"+pay;    
}
document.getElementById("PayMe").addEventListener("click", calcPay);
