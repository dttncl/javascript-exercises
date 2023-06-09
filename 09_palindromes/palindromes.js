const palindromes = function (word) {
    let orig = word.split("");
    let reverse = orig.reverse();

    return reverse.every((item,index) => item === orig[index])
    
};

// Do not edit below this line
module.exports = palindromes;
