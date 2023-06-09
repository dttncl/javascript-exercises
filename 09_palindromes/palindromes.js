const palindromes = function (str) {
    let checkStr = str.toLowerCase().split("").filter((alpha) => /[a-z0-9]/g.test(alpha));
    let backward = checkStr.slice().reverse();
  
    return checkStr.every((element,index) => element === backward[index]);
};

// Do not edit below this line
module.exports = palindromes;
