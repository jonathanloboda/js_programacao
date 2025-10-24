var numero
numero = parseFloat(prompt("Digite um número:"));

if (numero > 0) {
    alert("O número é positivo: " + numero);
}
if (numero < 0) {
    numero = numero + 100
    alert("O número somda com 100 é: " + numero);
}
else if (numero == 0) {
    alert("O número é zero: " + numero);
}