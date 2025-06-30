function checkGrade(grade){
    let mark = "";
    if(grade > 79 && grade < 101){
        mark = "A"
    }else if(grade > 67){
        mark = "B";
    }else if(grade > 49){
        mark = "C"
    }else{
        mark = "F";
    }
    return mark;
}
// Exercise 2: Write a function that checks if a number is positive, negative, or zero.
// The function should return a string indicating the result.
// For example, checkNum(5) should return "it's a positive number!", checkNum(-3) should return "it's a negative number!", and checkNum(0) should return "it's a zero
function checkNum(value){
    if  (value =0|| typeof value !== "boolean"){
        return "it's not a number";
    } else if(value>0)
    {
        return "it's a positive number!";
    } else if (value<0){
        return "it's negative number!";
    } else{
        return "it's a zero!";
    }
}   
