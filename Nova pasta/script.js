function contar() {

    var numInicio = document.getElementById('numInicio') //aqui ele ta obtendo os elementos HTML

    var numFim = document.getElementById('numFim')

    var passo1 = document.getElementById('passo')

    var numIn = Number(numInicio.value)

    var numF = Number(numFim.value)

    var passo = Number(passo1.value)

    var res = document.getElementById('res')

    if(numInicio.value.length == 0){ //Lógica de contagem, o campo numInicio está vazio. Se estiver,
    // exibe "impossível contar" no elemento com ID res.

        res.innerText = 'impossivel contar'

    } else if (passo == 0){

        alert('passo invalido, considerando passo = 1')

        var passo = 1

        while(numIn <= numF){

            res.innerText += ` ${ numIn }`

             numIn = numIn + passo

         }

    } else {

        for( ; numIn <= numF ; numIn = numIn + passo ){

            res.innerText += ` ${numIn} ` //exibe os resultados

        }

        }

        /*while(numIn <= numF){

          res.innerText += ` ${ numIn }`

           numIn = numIn + passo*/

       }

       // L.45-49 = Há um bloco de código comentado (/* ... */) que parece ser um código alternativo para a contagem usando um loop while,
       // mas está atualmente inativo (comentado). Este bloco realiza uma contagem semelhante ao loop for.



