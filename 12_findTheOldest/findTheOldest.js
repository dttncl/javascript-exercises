const findTheOldest = function(arr) {
    let maxAge = -1;
    let oldestPerson;
    arr.forEach(obj => {
        if (obj.hasOwnProperty('yearOfDeath')) {
            let age = obj.yearOfDeath - obj.yearOfBirth;
            if (age > maxAge) {
                maxAge = age;
                oldestPerson = obj;
            }
        } else {
            const date = new Date();
            let age = date.getFullYear() - obj.yearOfBirth;
            if (age > maxAge) {
                maxAge = age;
                oldestPerson = obj;
            }
        }
    });

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
