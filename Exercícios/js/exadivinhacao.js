const numeroAleatorio = Math.floor(Math.random() * 101);
console.log(numeroAleatorio);

var numero

numero=parseInt(prompt("Tente adivinhar o número:"))

while(numero != numeroAleatorio){
    if(numero < numeroAleatorio){
        alert("O numero digitado é menor que o correto.")
    }
    if(numero > numeroAleatorio){
        alert("O numero digitado é maior que o correto.")
    }
    numero=parseInt(prompt("Tente adivinhar o número:"))
}
alert("Você acertou!!!")