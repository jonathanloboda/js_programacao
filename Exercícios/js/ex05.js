var nota1, nota2, nota3, nota4, media, frequencia
    nota1= parseFloat(prompt("Digite a nota do aluno:"));
    nota2= parseFloat(prompt("Digite a segunda nota do aluno:"));
    nota3= parseFloat(prompt("Digite a terceira nota do aluno:"));
    nota4= parseFloat(prompt("Digite a quarta nota do aluno:"));
    frequencia= parseFloat(prompt("Digite a frequência do aluno (em %):"));
    media=(nota1+nota2+nota3+nota4)/4   

    if(media >=7 ){
        alert("Aluno aprovado com a média: "+media+" e frequência: "+frequencia+"%");
    }
    else{
        alert("Aluno reprovado com a média: "+media+" e frequência: "+frequencia+"%");
    }
