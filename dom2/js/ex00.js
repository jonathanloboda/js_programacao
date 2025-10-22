/*Exemplo1*/
var elemento
elemento=document.getElementById("titulo")
alert(elemento)
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
