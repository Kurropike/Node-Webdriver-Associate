const fib = require("./fibonacci")
const ston = require("./numberToString")

describe("challenge4 suite", function(){
    // it("Should return the fibonacci number in string", function() {
    //     console.log(ston.numToString(fib.fibonacci(22)));
    //     console.log(fib.fibonacci(1) + "=" + ston.numToString(1));
    //     console.log(fib.fibonacci(2) + "=" + ston.numToString(2));
    //     console.log(fib.fibonacci(1) + "=" + ston.numToString(fib.fibonacci(1)));
         
    // }); 
    it('should test fibonacci', function(){
        console.log(fib.fibonacci(8) + " = " + ston.numToString2(fib.fibonacci(8)));

    });

 
 
});
