function contar(){
    var inicio = window.document.getElementById('inicio')
    var fim = window.document.getElementById('fim')
    var passo = window.document.getElementById('passo')
    var res = window.document.getElementById('res')
    if(inicio.value.length == 0 || fim.value == 0 || passo.value.length == 0){
        res.innerHTML = ('Impossivel contar!');
    }else {
        if(passo.value == 0){
            window.alert('Passo inválido! Considerando PASSO 1')
            passo.value = 1
        }
        res.innerHTML = `Contando: <br>`

        if(Number(inicio.value)< Number(fim.value)){
            for(var cont = Number(inicio.value); cont<=Number(fim.value); cont+=Number(passo.value)){
                res.innerHTML+=`${cont} &#9758`
            }
        }else{
            for(var cont = Number(inicio.value); cont>=Number(fim.value); cont-=Number(passo.value)){
                res.innerHTML+=`${cont} \u{1F449}`
            } 
        }
        res.innerHTML+=`&#9873`

        
    }
}