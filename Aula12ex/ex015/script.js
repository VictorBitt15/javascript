function verificar(){
    var date = new Date();
    var ano = date.getFullYear();
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 && fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade>=0 && idade < 10){
                img.setAttribute('src','bebehomem.jpg')
            }else if(idade < 24){
                img.setAttribute('src','jovemhomem.jpg')
            }else if(idade < 50){
                img.setAttribute('src','adulto.jpg')
            }else{
                img.setAttribute('src','idoso.jpg')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade>=0 && idade < 10){
                img.setAttribute('src','bebemulher.jpg')
            }else if(idade < 24){
                img.setAttribute('src','jovemmulher.jpg')
            }else if(idade < 50){
                img.setAttribute('src','adulta.jpg')
            }else{
                img.setAttribute('src','idosa.jpg')
            }
        }
        res.style.textalign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}