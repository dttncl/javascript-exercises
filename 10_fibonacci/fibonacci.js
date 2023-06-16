const fibonacci = function(num) {
    if (num > 0) {
        let phi = (1 + 5**(1/2))/2;
        let numerator = phi**num - (1-phi)**num;
        let denominator = 5**(1/2);
    
        return Math.floor(numerator /denominator);
    }

    return 'OOPS';

};

// Do not edit below this line
module.exports = fibonacci;
