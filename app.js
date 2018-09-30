
// Any anonymous function that returns a specific value.
var anyFunction = function (val) {
    let cashedVal = localStorage.getItem('cashedVal');
    if(cashedVal == null) {
    // Store val value in the browser storage.
    window.localStorage.setItem("cashedVal", val);
        console.log("calculating!");
        return val + 5; 
    }
    return cashedVal
    }
    




    var memoizedFoo = memoize(anyFunction);
    
    memoizedFoo(5);
    // calculating!
    // 10
    
    memoizedFoo(5);
    // 10 (notice how 'calculating!' is not printed this time)
    
    memoizedFoo(10);
    // calculating!
    // 15