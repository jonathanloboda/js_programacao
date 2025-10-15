function entrar() {
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;
    var mensagemdeentrada = document.getElementById("mensagemdeentrada");

    if (usuario === "jonathan123" && senha === "1234") {
        document.getElementById("mensagemdeentrada").innerHTML = "<p style='color: green;'>Login bem-sucedido! Bem-vindo, " + usuario + ".</p>";
    } else {
        mensagemdeentrada.innerHTML = "<p style='color: red;'>Usuário ou senha incorretos. Tente novamente.</p>";
    }
}