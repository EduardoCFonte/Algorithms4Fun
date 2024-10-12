/**
 * @param {string} s
 * @return {number}
 */

/*

*/


var lengthOfLongestSubstring = function(s) {
    let objeto = {}
    let contador = 0;
    let maior = 0;
    let index = 0;
    let inicio_string = 0;
    for(caractere of s){
        if((!objeto[caractere] && objeto[caractere] !== 0) || objeto[caractere] < inicio_string){
            contador++;
            objeto[caractere] = index;
            if(contador > maior){
                maior = contador
            }
        }else{
            contador = index - objeto[caractere]
            inicio_string = index - contador; 
            objeto[caractere] = index;
        }
        index ++;
    }
    return maior;
};