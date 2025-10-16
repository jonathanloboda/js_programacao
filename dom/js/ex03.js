function entrar() {
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    if (usuario === "jonathan123" && senha === "1234") {
        document.getElementById("mensagemdeentrada").innerHTML = "<p style='color: green;'>Login bem-sucedido! Bem-vindo, " + usuario + ".</p>";
    } else {
        document.getElementById("mensagemdeentrada").innerHTML = "<p style='color: red;'>Usuário ou senha incorretos. Tente novamente.</p>";
    }
}