const repeatString = function(str, nTimes) {
    let repeatedText = "";
    
    if (nTimes < 0) {
        return "ERROR";
    }
    
    for (let i = 1; i <= nTimes; i++) {
        repeatedText += str;
    }
    return repeatedText;
};

// Do not edit below this line
module.exports = repeatString;
