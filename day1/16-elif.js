function CheckingNumber(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val == 10) {
        return "It is Equals to 10"
    } else {
        return "It is smaller than 10"
    }
}

console.log(CheckingNumber(10))