const removeFromArray = function() {

    let arr = arguments[0];

    for (let j = 1; j < arguments.length; j++){
        let arg = arguments[j]; 
        for (let i = 0; i < arr.length; i++){
            if (arr[i] == arg){
                arr.splice (i, 1);
                i--; 
            }
        }
    }
    return arr; 
};

// Do not edit below this line
module.exports = removeFromArray;
