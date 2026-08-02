const palindromes = function (str) {

    str = str.toLowerCase().replaceAll(",", "").replace(".", "").replaceAll("!", "").replaceAll(" ", "");
    let reversedStr = str.split("").reverse().join("");
    
    // console.log(str, reversedStr);
    return str === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
