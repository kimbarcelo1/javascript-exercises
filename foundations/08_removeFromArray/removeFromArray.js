const removeFromArray = function(arr, ...items) {
    // loop through the rest parameter ...items
    for (let i = 0; i < items.length; i++) {
        
        // loop through arr
        for (let j = 0; j < arr.length; j++) {
            const index = arr.indexOf(items[i]);
            
            if (index > -1) {
                arr.splice(index, 1);
            }
        }
    }
    
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
