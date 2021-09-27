function validaCPF() {
    cpf = document.forms["formulario"]["cpf"].value;
    console.log(cpf);
    if (cpf == "" || cpf == null || cpf.length < 11 || cpf == undefined) {
        alert("CPF invalido");
        return false;
    };

    var Soma;
    var Resto;
    Soma = 0;
    if (cpf == "00000000000") {
        alert("CPF invalido");
        return false;
    };

    for (i = 1; i <= 9; i++) Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(cpf.substring(9, 10))) {
        alert("CPF invalido");
        return false;
    };

    Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0

    if (Resto != parseInt(cpf.substring(10, 11))) {
        alert("CPF invalido");
        return false;
    }
    return validaEmail();
}

function validaEmail() {
    email = document.forms["formulario"]["email"].value;
    usuario = email.substring(0, email.indexOf("@"));
    dominio = email.substring(email.indexOf("@") + 1, email.length);
    if ((usuario.length >= 1) &&
        (dominio.length >= 3) &&
        (usuario.search("@") == -1) &&
        (dominio.search("@") == -1) &&
        (usuario.search(" ") == -1) &&
        (dominio.search(" ") == -1) &&
        (dominio.search(".") != -1) &&
        (dominio.indexOf(".") >= 1) &&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
        return validaFormulario();
    } else {
        alert("E-mail invalido");
        return false;
    }
}

function validaFormulario() {
    let nome = document.forms["formulario"]["nome"].value;
    if (nome == "" || nome.length < 3) {
        alert("Nome inválido");
        return false;
    }

    let logradouro = document.forms["formulario"]["logradouro"].value;
    if (logradouro.length < 7) {
        alert("Logradouro inválido");
        return false;
    }

    let numero = document.forms["formulario"]["numero"].value;
    if (numero == "") {
        alert("Número de residência inválido");
        return false;
    }

    let bairro = document.forms["formulario"]["bairro"].value;
    if (bairro.length < 5) {
        alert("Bairro inválido");
        return false;
    }

    let cidade = document.forms["formulario"]["cidade"].value;
    if (cidade.length < 2) {
        alert("Cidade inválida");
        return false;
    }
    let uf = document.forms["formulario"]["uf"].value;
    if (uf.length < 2) {
        alert("Informe o estado de residência");
        return false;
    }

    let celular = document.forms["formulario"]["celular"].value;
    if (celular.length < 11) {
        alert("Número de celular inválido");
        return false;
    }

    var resultado = confirm("Deseja realmente enviar os dados?");

    if (resultado) {
        alert("Obrigado por participar!")
        window.location.href = "https://www.gama.academy/";
    } else {
        return false;
    }
}