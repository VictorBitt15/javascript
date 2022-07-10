
var vetorNumeros = []
function adicionar(){
    var num= document.getElementById('num')
    var numeros = document.getElementById('numeros')
    var res = document.getElementById('res')
    if(num.value.length == 0){
        window.alert("Nenhum número adicionado, tente adicionar um número")
            return
    }
    res.innerHTML=''
    let valorAdd = Number(num.value)
    if(vetorNumeros.includes(valorAdd)){
        window.alert("Valor já foi adicionado!")
        return
    }else if(valorAdd < 1 || valorAdd > 100){
            window.alert("Valor fora dos parametros de entrada!")
            return
    }
    vetorNumeros.push(valorAdd)
    let itemList = document.createElement('option')
    itemList.text = `Valor ${valorAdd} adicionado.`
    itemList.value=`tab${valorAdd}`
    numeros.appendChild(itemList)
   

}

function finalizar() {
    var res = document.getElementById('res')
    if(vetorNumeros.length == 0){
        window.alert("Nenhum número adicionado!")
        return
    }
    res.innerHTML+= `<p>Ao todo, temos ${vetorNumeros.length} números cadastrados.</p></br>`
    res.innerHTML+=`<p>O maior valor informado é ${maior()}</p></br>`
    res.innerHTML+=`<p>O menor valor informado é ${menor()}</p></br>`
    res.innerHTML+=`<p>Somando todos os valores, temos ${soma()}</p></br>`
    res.innerHTML+=`<p>A média dos valores digitados é ${soma()/vetorNumeros.length}</p></br>`
}
function soma(){
    var cont=0
    for( var x = 0; x<vetorNumeros.length; x++){
        cont+=vetorNumeros[x]
        console.log(`${cont}`)
    }
    return cont
}
function maior(){
    var maiorV
    maiorV = -1
    for(let x in vetorNumeros){
        if(vetorNumeros[x] > maiorV){
            maiorV = vetorNumeros[x];
        }
    }
    return maiorV
}
function menor(){
    var menorV
    menorV = 101
    for(let x in vetorNumeros){
        if(vetorNumeros[x] < menorV){
            menorV = vetorNumeros[x];
        }
    }
    return menorV
}