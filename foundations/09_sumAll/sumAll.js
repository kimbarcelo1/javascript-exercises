const sumAll = function(n1, n2) {
    if (n1 <= 0 || n2 <= 0) {
        return "ERROR";
    } else if (!Number.isInteger(n1) || !Number.isInteger(n2)) {
        return "ERROR";
    }
    
    let lowest = n1;
    let highest = n2;
    let sum = 0;
    
    if (n1 > n2) {
        highest = n1;
        lowest = n2;
    }
    
    for (let i = lowest; i <= highest; i++) {
        sum += i;
    }
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
