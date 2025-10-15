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