var nota1, nota2, nota3, nota4, media
    nota= parseFloat(prompt("Digite a nota do aluno:"));
    nota2= parseFloat(prompt("Digite a segunda nota do aluno:"));
    nota3= parseFloat(prompt("Digite a terceira nota do aluno:"));
    nota4= parseFloat(prompt("Digite a quarta nota do aluno:"));
    media=(nota+nota2+nota3+nota4)/4

    if(media >=7){
        alert("Aluno aprovado com a média: "+media)
    }
    else{
        alert("Aluno reprovado com a média: "+media)
    }