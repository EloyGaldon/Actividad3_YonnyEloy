//Guardamos login en localStorage

$('#submitLogin').click(function () {
    let usuario=$('#inputUssuario').val();
    let password=$('#inputPassword').val();

    localStorage.setItem("user",usuario);
    localStorage.setItem("contraseña",password);
})