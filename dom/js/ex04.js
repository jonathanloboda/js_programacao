function gerarPA()
{
     var termo1, razao, n, r
     var lista=[]
     termo1=parseFloat(document.getElementById("termo1").value)
     razao=parseFloat(document.getElementById("razao").value)
     n=parseFloat(document.getElementById("quantidade").value)
     
     r = termo1 + (n - 1) * razao
     for (var i = 0; i < n; i++) {
        lista.push(termo1 + i * razao);
    }
    document.getElementById("resultado").innerHTML = `O ${n} termo da PA é: ${r}`
    document.getElementById("lista").innerHTML = `Os termos da PA são: ${lista.join(", ")}`
}