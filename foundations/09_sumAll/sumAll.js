// Source - https://stackoverflow.com/a/14794066
// Posted by krisk, modified by community. See post 'Timeline' for change history
// Retrieved 2026-02-19, License - CC BY-SA 4.0

const sumAll = function(start, end) {

    if (start <= 0 || end <= 0) return "ERROR";
    if (start%1 !=  0 || end % 1 != 0) return "ERROR";


    let sum = 0; 
    let e;
    let s; 

    start > end ? (e = start, s = end) : (s = start, e = end); 
    
    for (let i = s; i <= e; start++){
        sum += i; 
    }
    return sum; 
};

// Do not edit below this line
module.exports = sumAll;

