/*Exemplo1*/
var elemento
elemento=document.getElementById("titulo")
//alert(elemento)
/*Exemplo2*/
function mudartitulo()
{
    var titulo
    titulo=document.getElementById("titulo")
    titulo.innerHTML="Alterando o título via JS"
}
/*Exemplo3*/
function mudarestilo()
{
    var titulo
    titulo=document.getElementById("titulo")
    titulo.style.color="darkblue"
    titulo.style.backgroundColor="lightblue"
    titulo.style.fontSize="65px"
}
/*Exemplo4*/
function destacar()
{
    var titulo
    titulo=document.getElementById("titulo")
    titulo.classList.add("destacado")
}
/*Exemplo5*/
function remover()
{
    var titulo
    titulo=document.getElementById("titulo")
    titulo.classList.remove("destacado")
}
/*Exemplo6*/
function alternar()
{
    var titulo
    titulo=document.getElementById("titulo")
    titulo.classList.toggle("destacado")
}
/*Exemplo7*/
function adicionartexto()
{
    var novo
    novo=document.createElement("p")
    novo.id="paragrafo"
    novo.innerText="Novo paragrafo criado com JS."

    var div
    div=document.getElementById("container")
    div.appendChild(novo)
}
/*Exemplo8*/
function removertexto()
{
    var p=document.getElementById("paragrafo")
    if(p)
    {
        p.remove()
    }
    else
    {
        alert("Não há texto para remover.")
    }
}