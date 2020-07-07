function verificar() {
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.querySelector('div#res')
   if (fano.value.length == 0 || fano.value > ano){
       window.alert('Verifique os dados e tente novamente!')
   } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var gênero = ''
       var img = document.createElement('img')                  // IMAGENS BAIXADAS DO SITE https://www.pexels.com/pt-br/procurar/portugu%C3%AAs/
       img.setAttribute('id', 'foto')
       if (fsex[0].checked){
           gênero = 'Homem'
           if (idade <= 12){
               //Criança
               img.setAttribute('src', 'fotomenino.png')
           } else if (idade < 21) {
               //Jovem
               img.setAttribute('src', 'fotogaroto.png')
           } else if (idade < 60){
               //Adulto
               img.setAttribute('src', 'fotohomem.png')
           } else {
               //Idoso
               img.setAttribute('src', 'fotoidoso.png')
           }
       } else if (fsex[1].checked){
           gênero = 'Mulher'
           if (idade <= 12){
            //Criança
            img.setAttribute('src', 'fotomenina.png')
        } else if (idade < 21) {
            //Jovem
            img.setAttribute('src', 'fotogarota.png')
        } else if (idade < 60){
            //Adulta
            img.setAttribute('src', 'fotomulher.png')
        } else {
            //Idosa
            img.setAttribute('src', 'fotoidosa.png')
        }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${gênero} com ${idade} anos!`
       res.appendChild(img)
    }


}