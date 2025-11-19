/*Exemplo 1:*/
function exibir()
{
    alert("Manipulação direta do evento!")
}



/*Exemplo 2:*/
function exibir_anonima()
{
    let botao=document.getElementById("btn1")
    botao.addEventListener("click", function(){ alert("A função anônima é uma função sem nome exemplo: function(){...}. Pode ser chamad a de função anônima, callback, Função de Evento (Event Handler)")})
}



function exibir_nominada()
{
    let botao=document.getElementById("btn2")
    /*Chamando a função a partir do click*/
    botao.addEventListener("click", exibir)
}



function exibir_flecha()
{
    let botao=document.getElementById("btn3")
    botao.addEventListener("click", ()=> {alert("A função arrow é dada por ()=>(...)")})
}



/*Exemplo 3 - Ativando o evento com a passagem do mouse */
function mudar_cor()
{
    var mouse=document.getElementById("mouse")
    mouse.addEventListener("mouseout",function(){ mouse.style.color="black"
        mouse.innerText="passe o MOUSE aqui!"
    })
    mouse.addEventListener("mouseover",function(){mouse.style.color="blue"
        mouse.innerText="Evento com o mouse"
    }) 
}


/*As funções devem ser chamadas para ativar o listener assim que a página carregar */
exibir_anonima()
exibir_nominada()
exibir_flecha()
mudar_cor()