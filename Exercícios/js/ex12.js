var n1, n2, operacao, r
n1 = parseFloat(prompt("Digite um numero:"));
n2 = parseFloat(prompt("Digite digite outro numero:"));
operacao = prompt("Digite a operação desejada (+, -, *, /):");

if (operacao == "+") {
    r = n1 + n2
    alert("O resultado da adição é: " + r);
}
else if (operacao == "-") {
    r = n1 - n2
    alert("O resultado da subtração é: " + r);
}
else if (operacao == "*") {
    r = n1 * n2
    alert("O resultado da multiplicação é: " + r);
}
else if (operacao == "/") {
    if (n2 !== 0) {
        r = n1 / n2
        alert("O resultado da divisão é: " + r);
    } else {
        alert("Erro: Divisão por zero não é permitida.");
    }
}