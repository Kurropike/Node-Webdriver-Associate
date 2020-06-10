module.exports = {
    fibonacci: fibonacci
  
}

function fibonacci(number) {
    if (number < 2){
      return number
    }
    return fibonacci(number - 1) + fibonacci(number - 2)
  }
// function fibonacci(number){
  
//     var total = 0; 
//     if (number <= 1){
//         total = 0;  
//     } else {
//         //calculate fib sequence 
//         for(var i; i < number; i++){
//             // add up whatever numbers 

//         }
//     }
//     return total;
// }
