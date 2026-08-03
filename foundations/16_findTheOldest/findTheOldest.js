const findTheOldest = function(arr) {
    return arr.reduce((acc, cur) => {
       const year = new Date().getFullYear();
       let age1 = (acc.yearOfDeath || year) - acc.yearOfBirth; 
       let age2 = (cur.yearOfDeath || year) - cur.yearOfBirth;

       if (age1 >= age2) {
        return acc;
       } else {
        return cur;
       }
    });
};

// Do not edit below this line
module.exports = findTheOldest;
