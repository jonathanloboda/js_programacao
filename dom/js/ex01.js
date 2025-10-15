function calcular()
{
    var v1, v2, r 
    v1=document.getElementById("cotação").value
    v2=document.getElementById("valor").value
if(v1 == "" || v2=="")
    {
        alert("Os campos devem ser preenchidos.")
    }
    else
    {
        r=parseFloat(v2)/parseFloat(v1)
        document.getElementById("resultado").innerHTML=`resultado${r}`


    }
    
}
