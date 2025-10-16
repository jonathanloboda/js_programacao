function calcular()
{
    var v1, v2, r
    v1 = parseFloat(document.getElementById("peso").value);
    v2 = parseFloat(document.getElementById("altura").value);
    r = v1 / (v2 * v2);
    document.getElementById("resultado").innerHTML = "Seu IMC é: " + r.toFixed(2);
    if (r < 18.5)
    {
        document.getElementById("situacao").innerHTML = "Situação: Abaixo do peso";
        document.getElementById("situacao").style.color = "red";
    }
    else if (r >= 18.5 && r < 25)
    {
        document.getElementById("situacao").innerHTML = "Situação: Peso normal";
        document.getElementById("situacao").style.color = "lightgreen";
    }
    else if (r >= 25 && r < 40)
    {
        document.getElementById("situacao").innerHTML = "Situação: Sobrepeso";
        document.getElementById("situacao").style.color = "red";
    }
}