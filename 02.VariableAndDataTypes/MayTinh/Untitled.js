function add(){
    var numb1 = parseInt(document.getElementById("numb1").value);
    var numb2 = parseInt(document.getElementById("numb2").value);
    var result = "Result Addition: " + (numb1 + numb2);
    document.getElementById("result").innerHTML = result;
}

function sub(){
    var numb1 = parseInt(document.getElementById("numb1").value);
    var numb2 = parseInt(document.getElementById("numb2").value);
    var result = "Result Subtraction: " + (numb1 - numb2);
    document.getElementById("result").innerHTML = result;
}

function mul(){
    var numb1 = parseInt(document.getElementById("numb1").value);
    var numb2 = parseInt(document.getElementById("numb2").value);
    var result = "Result Multiplication: " + (numb1 * numb2);
    document.getElementById("result").innerHTML = result;
}

function div(){
    var numb1 = parseInt(document.getElementById("numb1").value);
    var numb2 = parseInt(document.getElementById("numb2").value);
    var result = "Result Division: " + (numb1 / numb2);
    document.getElementById("result").innerHTML = result;
}