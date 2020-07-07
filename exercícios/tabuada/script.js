function tabuada() {
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    if (num.value.length == 0){
        window.alert('Por favor digite um número!')
    } else {
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = '' //LIMPA A TABUADA PARA EXECUTAR NOVAMENTE
        while (c <= 10){
            var item = document.createElement('option')
            item.text = `${n} * ${c} = ${n*c}`
            item.value = `tab${c}`  //POSSIBILITA SELEÇÃO DE ITENS DO SELECT
            tab.appendChild(item) //ADICIONAR O ELEMENTO FILHO "ITEM"
            c++
        }
    }
    
    
    
}