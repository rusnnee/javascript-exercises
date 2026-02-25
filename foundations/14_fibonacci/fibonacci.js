const fibonacci = function(num) {
    let current = 1; 
    let past = 0; 

    if (num < 0) return "OOPS"; 
    if (num == 0) return 0; 
    if (num == 1) return 1
    else {
        for (let i = 2; i <=num; i++){
            let temp = current;
            current = past + current; 
            past = temp; 
        }
        return current; 
    }
};

// Do not edit below this line
module.exports = fibonacci;
