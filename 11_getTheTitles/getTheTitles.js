const getTheTitles = function(arr) {
    let newArr = [];
    arr.forEach((book) => {
        newArr.push(book.title);
    }); 

    return newArr;
};

// Do not edit below this line
module.exports = getTheTitles;
