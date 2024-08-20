function countOccurrences(array){
    
    const elem = array
    const occurrences = elem.reduce((qtd, str) => {
    return qtd[str] ? ++qtd[str] : qtd[str] = 1, qtd
    }, {});
    console.log(occurrences)
}
const frutas = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']
countOccurrences(frutas)