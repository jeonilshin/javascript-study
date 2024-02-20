function myLocalScope() {
    var myVar = 5;
    console.log(myVar);
}

myLocalScope()

console.log(myVar);

// it will get error because it's outside of my function