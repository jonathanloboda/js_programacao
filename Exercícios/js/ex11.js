var n1, n2
n1 = parseFloat(prompt("Digite um valor:"));
n2 = parseFloat(prompt("Digite outro valor:"));

if (n1 > n2) {
    alert("O primeiro número é maior: " + n1);
}
else if (n2 > n1) { 
    alert("O segundo número é maior: " + n2);
}   
else {
    alert("Os números são iguais: " + n1);
}