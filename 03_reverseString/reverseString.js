const reverseString = function(word) {
    let arr = word.split("");
    let rev = [];

    for (let i = arr.length; i >= 0 ; i--) {
        rev.push(arr[i]);
    }

    return rev.join("");
};

// Do not edit below this line
module.exports = reverseString;
