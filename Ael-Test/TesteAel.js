/*You are provided with an array people, where each element people[i] represents the weight of the i-th person. There is also an unlimited supply of boats,
and each boat can support a maximum weight of limit. A boat can carry either one or two people, as long as the combined weight of the people on the boat doe
s not exceed the limit. Your task is to determine the minimum number of boats required to transport everyone, following these conditions.
---
Example 1
int[] people = {1, 2};
int limit = 3;
Expected Output: 1
Explanation: Both people can share one boat because their combined weight is 1 + 2 = 3, which is equal to the limit.
---
Example 2
int[] people = {3, 2, 2, 1};
int limit = 3;
Expected Output: 3 */
    function TesteAEL(people, limite){

        let PassageirosPesados = []
        let contador_barco = 0;
        let PassageirosSaoLeves = []

    for (let i = 0; i <= people.length - 1; i++ ){
        if (people[i] > limite){
            PassageirosPesados.push(people[i])
            
        }else if(people[i] == limite){
            contador_barco++;
        }else {
            PassageirosSaoLeves.push(people[i])
        }
    }
    PassageirosSaoLeves.sort()
    PassageirosSaoLeves
    for(let i = 0; i < PassageirosSaoLeves.length; ){
    
        if((limite - PassageirosSaoLeves[i]) >= PassageirosSaoLeves[PassageirosSaoLeves.length- 1]){
            contador_barco++;
            PassageirosSaoLeves.pop();
            i++;

        }else{
            PassageirosSaoLeves.pop();
            contador_barco++;
    }}
    return contador_barco;
}

    arr = [3,2,2,1];
    limite = 3;

    let Resultado = TesteAEL(arr,limite)
    console.log(Resultado)

