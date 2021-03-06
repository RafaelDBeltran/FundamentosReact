function gerarNaoContido(min, max, array){
    const aleatorio = parseInt(Math.random() * (max+1-min)) + min
    return array.includes(aleatorio) ? 
        gerarNaoContido(min,max,array) : 
        aleatorio
}

function gerarNumeros(qtde){
    const numeros = Array(qtde)
        .fill(0)
        .reduce((nums) => {
            const novoNumero = gerarNaoContido(1, 60, nums)
            return [...nums, novoNumero]
        
        }, [])
        .sort((n1, n2) => n1 - n2)
    
        return numeros
}