function caseInSwitch(val) {
    var answer = "";
    switch(val) {
        case 1: 
            answer = "alpha"
            break;
        case 2:
            answer = "bob"
            break;
        case 3:
            answer = "charlie"
            break;
        default:
            answer = "no name"
            break;
    }

    return answer;
}

console.log(caseInSwitch(15));