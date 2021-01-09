const humanCatDogYears = number => {
    dogYears = 15 + 9 + (number - 2)*(5)
    catYears = 15 + 9 + (number - 2)*(4)
   return [number, catYears, dogYears] 
   
};

module.exports = humanCatDogYears;
