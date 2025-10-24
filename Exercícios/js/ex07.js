var n1, n2, r
n1 = parseFloat(prompt("Digite um número:"));
n2 = parseFloat(prompt("Digite outro número:"));
r = n1 + n2
if (r > 10) {
    alert("O resultado é maior que 10, o valor é: " + r);
}
else {
    alert("O resultado é menor que 10, por favor, digite outro valor ")
}