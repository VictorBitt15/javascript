function carregar(){
    var txthora = window.document.getElementById('txthora')
    var image = window.document.getElementById('image')
    var data = new Date()
    var hora = data.getHours()
    txthora.innerHTML= `Agora são ${hora} horas`

    if(hora >= 0 && hora < 12){
        image.innerHTML= '<img src = "manha.jpg">'
        document.body.style.background = '#c2cd9f'
    } else if(hora >=12 && hora < 18){
        image.innerHTML= '<img src = "tarde.jpg">'
        document.body.style.background = '#b9846f'
    }else{
        image.innerHTML= '<img src = "noite.jpg">'
        document.body.style.background = '#51515d'
    }
}
