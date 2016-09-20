function sum() {
    var result = 0;
    for (var i=0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}
sum(10,2,5); 
sum(1,3,2,7);
