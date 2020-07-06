[1mdiff --git a/aula15/ambiente.js b/aula15/ambiente.js[m
[1mindex 14d671c..416b8e4 100644[m
[1m--- a/aula15/ambiente.js[m
[1m+++ b/aula15/ambiente.js[m
[36m@@ -1,6 +1,12 @@[m
 let num = [5, 8, 2, 9, 3][m
[31m-num.sort()  // Ordena os elementos do array em ordem crescente[m
 num.push(1)  // Adiciona o valor ao array em uma nova posição[m
[32m+[m[32mnum.sort()  // Ordena os elementos do array em ordem crescente[m
 console.log(num)[m
 console.log(`O vetor tem ${num.length} posições`)[m
[31m-console.log(`O primeiro valor do vetor é ${num[0]}`)[m
\ No newline at end of file[m
[32m+[m[32mconsole.log(`O primeiro valor do vetor é ${num[0]}`)[m
[32m+[m[32mlet pos = num.indexOf(4) // Localiza a posição do valor 4 no array, caso o valor não exista o console retorna -1[m
[32m+[m[32mif (pos == -1){[m
[32m+[m[32m    console.log('O valor não foi encontrado!')[m
[32m+[m[32m} else{[m
[32m+[m[32mconsole.log(`O valor 8 está na posição ${pos}`)[m
[32m+[m[32m}[m
\ No newline at end of file[m
[1mdiff --git a/aula15/vetornatela.js b/aula15/vetornatela.js[m
[1mindex e3c9af6..6d2f4cf 100644[m
[1m--- a/aula15/vetornatela.js[m
[1m+++ b/aula15/vetornatela.js[m
[36m@@ -1,6 +1,15 @@[m
 let valores = [8,1,7,4,2,9][m
[32m+[m[32mvalores.sort()[m
 [m
[32m+[m[32m//PRIMEIRA FORMA DE EXECUTAR O CÓDIGO:[m
[32m+[m[32m/*[m
 for (pos = 0 ; pos < valores.length ; pos++){[m
     console.log(`A posição ${pos} tem o valor ${valores[pos]}`)[m
 }[m
[32m+[m[32m*/[m
 [m
[32m+[m[32m//SEGUNDA FORMA:[m
[32m+[m
[32m+[m[32mfor (let pos in valores){[m
[32m+[m[32m    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)[m
[32m+[m[32m}[m
