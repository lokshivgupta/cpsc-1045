//Name: Lokshiv Gupta
//Date: July 16,2025
//File Name: a9.js
//About: This program has a database system of the employees in which we can add, remove, and get the count of employees as per their role
function Employee(name, role){
    this.name = name;
    this.role = role;
}
let employeeList = [];
document.getElementById("addEmployee").addEventListener("click", addEmployee);
function addEmployee() {
    let name = document.getElementById("name").value;
    let role = document.getElementById("roles").value;
   for(let i = 0; i < employeeList.length; i++) {
        if(employeeList[i].name === name) {
            alert("Employee already exists.");
            return;
        }
    }

    let newEmployee = new Employee(name, role);
    employeeList.push(newEmployee);
    displayEmployees();

}
function displayEmployees() {
    let output = document.getElementById("output");
    
    output.innerHTML = "";
    if(employeeList.length === 0) {
        output.innerHTML = "No employees to display.";
        return;
    }
    let listHTML = "";
    output.innerHTML = listHTML;
    for(let i = 0; i < employeeList.length; i++) {
        listHTML += "<li> " + employeeList[i].name + " is a "  + employeeList[i].role + "</li>";
    }
    
    output.innerHTML = listHTML;
   
}
document.getElementById("removeEmployee").addEventListener("click", removeEmployee);
function removeEmployee(){
    if(employeeList.length == 0){
        alert("No Employee to remove");
    }

    let removedEmployee = employeeList.pop();
    alert(removedEmployee.name + " is no longer emloyed here");
    displayEmployees();
}

document.getElementById("empty").addEventListener("click" , emptyArray);
function emptyArray(){
    employeeList = [];
    displayEmployees();
}
document.getElementById("count").addEventListener("click", countEmployees);
function countEmployees(){
    let employeeCount = 0;
    let managerCount = 0;
    for(let i = 0; i < employeeList.length;i++){
        if(employeeList[i].role == "manager"){
            managerCount++;
        }
        if(employeeList[i].role == "employee"){
            employeeCount++;
        }
    }
    document.getElementById("countOutput").innerHTML = "Employee: " + employeeCount + " Manager: " + managerCount;
}

