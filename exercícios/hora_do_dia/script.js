function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var minutos = data.getMinutes()
msg.innerHTML = `Agora são ${hora}:${minutos} horas`
if (hora >= 0 && hora < 12){
  saldacao.innerHTML = 'BOM DIA!'
  img.src = 'fotomanha.png'
  document.body.style.background = '#9b8904'
} else if (hora >= 12 && hora < 18){
  saldacao.innerHTML = 'BOA TARDE!'
  img.src = 'fototarde.png'
  document.body.style.background = '#c9eff7'
} else {
  saldacao.innerHTML = 'BOA NOITE!'
  img.src = 'fotonoite.png'
  document.body.style.background = '#3e314e'
}
}