/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function(rolls, mean, n) {
    let empty = []
    let test = [1,2,3,3]
    let teste = rolls.filter((i) => i != 6)
    console.log(teste)
    if (mean == 6){
        if(teste.length > 0){
            console.log("oioiosidsid")
            return empty
        }}
    let tamanho = rolls.length;
    tamanho = tamanho + n;
    mean = mean * tamanho;
    let contador = 0;
    rolls.forEach((elemento) =>{
        contador = contador + elemento
    })
    let alvo = mean - contador
    if(alvo < 1){
        return empty
    }
    if(alvo < n){
        return empty
    }
    if ((alvo / n) > 6){
        return empty
    }else if((alvo / n ) == 6){
        for(let i = 0; i < n; i++){
            empty.push(6)
        }
        return empty
    }else {
        let j = 6
        console.log(alvo, "oiii",n)
        while(n != 0){
            if ((alvo - j) >= (n - 1)){
                empty.push(j)
                n--;
                alvo -= j;
            }else{

                j--
            }
        }
        return empty
    }

        
    return empty
};