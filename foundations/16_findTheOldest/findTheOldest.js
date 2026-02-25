const getAge = function (person){
    if (person.yearOfDeath == undefined) return new Date().getFullYear()  - person.yearOfBirth;
    return person.yearOfDeath - person.yearOfBirth
}

const findTheOldest = function(people) {
    let sorted = people.sort((a, b) => (getAge(b))- (getAge(a)))
    return sorted[0]; 
};


// Do not edit below this line
module.exports = findTheOldest;
