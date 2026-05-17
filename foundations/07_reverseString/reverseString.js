const reverseString = function(str) {
    let i = -1;
    let reversed = "";

    while (str.at(i)) {
        reversed += str.at(i);
        i--;
    }
    
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
