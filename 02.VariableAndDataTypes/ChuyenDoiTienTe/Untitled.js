function exchange(){
    var amount = parseInt(document.getElementById("amount").value);
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;
    var result;
    if (from == "VND" && to == "USD") {
        result = "Result: " + (amount / 23000) + " VND";
    }
    document.getElementById("result").innerHTML = result;
}