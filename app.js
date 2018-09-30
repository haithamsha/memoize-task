
var memoize = function (val) {
    // Get the value from the local storge.
    let cashedVal =localStorage.getItem('cashedVal');
    // If the value is null then set it for the first time with 
    // varaiable value.
    if(cashedVal == null) {
        localStorage.setItem("cashedVal", val);
        console.log("calculating!");
        return val + 5; 
    }
    // If not get it from the local storage.
    return cashedVal
    }
    
    
    memoize(5);
    // calculating!
    // 10
    
    memoize(5);
    // 10 (notice how 'calculating!' is not printed this time)
    
    memoize(10);
    // calculating!
    // 15