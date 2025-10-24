var n1, n2, r
n1 = parseFloat(prompt("Digite um valor:"));
n2 = parseFloat(prompt("Digite um valor:"));
r = n1 + n2

if (r < 20) {
    r = r - 5
    alert("O resultado é menor que 20, o valor é: " + r)
}
if (r > 20) {
    r = r + 8
    alert("O resultado é maior que 20, o valor é: " + r)
}
else {
    alert("O resultado é igual a 20, o valor é: " + r)
}
