const numberToReversedDigits = number => {
   let x = number.toString().split('').reverse()
  let y = x.map(string => parseInt(string));
   return y
};

//const numToSeparate = 12345;

//const arrayOfDigits = Array.from(String(numToSeparate), Number);

//console.log(arrayOfDigits)

module.exports = numberToReversedDigits;