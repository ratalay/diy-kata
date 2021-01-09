const fizzBuzz = number => {
   const isDivisableBy5 = (number % 5) === 0;
   const isDivisableBy3 = (number % 3) === 0;
    // if (number % 3 === 0 && number % 5 === 0){
     //   return "FizzBuzz";
     if (isDivisableBy5 && isDivisableBy3 ) {
         return 'FizzBuzz'
    } if (number % 5 === 0) {
        return "Buzz"
    } if (number % 3 === 0) {
        return "Fizz"
    }
    return number;

};

module.exports = fizzBuzz;