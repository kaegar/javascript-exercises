const removeFromArray = function(array, ...element) {
    let arr = [];
    for (let i = 0; i < array.length; i++) {
        let index = element.indexOf(array[i]);
        if (index > -1) {
            continue;
        } else {
            arr.push(array[i]);
        }
    }
    console.log(arr);
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
