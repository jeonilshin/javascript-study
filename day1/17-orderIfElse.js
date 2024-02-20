function Order(val){
    if(val < 5) {
        return "Tiny"
    } else if(val < 10){
        return "Small"
    } else if(val < 15){
        return "Medium"
    } else if(val < 20){
        return "Large"
    } else {
        return "Huge"
    }
}

console.log(Order(25))