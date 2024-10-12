/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

    if (x < 0){
        return false
    }else if (x === 0 ){
        return true
    }else {
    let string = x.toString();
    let tamanho = string.length;
    if (tamanho == 1){
        return true
    }
    let index = tamanho / 2
    index = Math.floor(index)
     for(let i = 0; i < index; i++ ){
        if (!(string[i] === string[(tamanho-1) - i]))
        return false
     }
     return true
    }
};
