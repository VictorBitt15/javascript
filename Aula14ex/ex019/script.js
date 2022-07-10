function calcular(){
    var num = window.document.getElementById('num')
    var tabu = window.document.getElementById('tabu')
    if(num.value.length == 0){
        window.alert('Digite um número!')
    }
    tabu.innerHTML=''
    for(var x = 0;x<=10;x++){
        var itemList = document.createElement('option')
        itemList.text = `${Number(num.value)} x ${x} = ${Number(num.value)*x}`
        itemList.value=`tab${x}`
        tabu.appendChild(itemList)
       

    }
}