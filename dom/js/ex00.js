function somar()
{
    var v1, v2, r 
    v1=document.getElementById("primeirovalor").value
    v2=document.getElementById("segundovalor").value
    if(v1 == "" || v2=="")
    {
        alert("Os campos devem ser preenchidos.")
    }
    else
    {
        r = parseFloat(v1)+parseFloat(v2)
        document.getElementById("resultado").innerHTML=`O resultado da soma é ${r}`
    }

}
function subtrair()
{
    var v1, v2, r 
    v1=document.getElementById("primeirovalor").value
    v2=document.getElementById("segundovalor").value
    if(v1 == "" || v2=="")
    {
        alert("Os campos devem ser preenchidos.")
    }
    else
    {
        r = parseFloat(v1)-parseFloat(v2)
        document.getElementById("resultado2").innerHTML=`O resultado da soma é ${r}`
    }
}
function multiplicar()
{
    var v1, v2, r 
    v1=document.getElementById("primeirovalor").value
    v2=document.getElementById("segundovalor").value
    if(v1 == "" || v2=="")
    {
        alert("Os campos devem ser preenchidos.")
    }
    else
    {
        r = parseFloat(v1)*parseFloat(v2)
        document.getElementById("resultado3").innerHTML=`O resultado da soma é ${r}`
    }
}
function dividir()
{
    var v1, v2, r 
    v1=document.getElementById("primeirovalor").value
    v2=document.getElementById("segundovalor").value
    if(v1 == "" || v2=="" || v1==0 ||v2==0)
    {
        alert("Os campos devem ser preenchidos corretamente.")
    }
    else
    {
        r = parseFloat(v1)/parseFloat(v2)
        document.getElementById("resultado4").innerHTML=`O resultado da soma é ${r}`
    }
}