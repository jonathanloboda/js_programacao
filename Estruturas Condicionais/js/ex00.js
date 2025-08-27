var nome, idade

nome=prompt("Digite seu nome:")
idade=parseInt(prompt("Digite sua idade:"))

if(idade >= 18){
    alert(nome+"você esta apto para tentar a CNH")
}
else{
    alert(nome+"você não está apto para tentar a CNH")
}