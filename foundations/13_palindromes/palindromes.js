const palindromes = function (str) {
    str = str.replace(/\W|_/g, '');
    str = str.toLowerCase(); 
    console.log(str); 
    return str === str.split("").reverse().join(""); 
};

// Do not edit below this line
module.exports = palindromes;
