function contar(){
    var inicio = window.document.getElementById('txtini')
    var fim = window.document.getElementById('txtfim')
    var passo = window.document.getElementById('txtpas')
    var res = document.querySelector('div#res')   
     
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Preencha todos os campos!')
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando... <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0){
            window.alert('Passo invélido! Considerando Passo = 1')
            p = 1
        }
        if (i < f){
            //CONTAGEM CRESCENTE
            for(var c = i; c <= f; c += p){
            res.innerHTML += `${c} \u{1F605}` // INCLUSÃO DE EMOJI
                                              // VERIFICAR CÓDIGOS NO SITE https://unicode.org/emoji/charts/emoji-list.html
        
            }
           
        } else {
            //CONTAGEM DECRESCENTE
                for (var c = i; c >= f; c -= p){
                    res.innerHTML += `${c} \u{1F605}`
                }
        }      
        res.innerHTML += `\u{1F3C1}`
    }
    
}