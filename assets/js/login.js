//Guardamos login en localStorage

$('#submitLogin').click(function () {
    let usuario=$('#inputUssuario').val();
    let password=$('#inputPassword').val();

    localStorage.setItem("user",usuario);
    localStorage.setItem("contraseña",password);
})

function rememberPassword() {
    var mensaje;
    var opcion = prompt("Introduzca su correo para recuperar la clave:", "email");

    if (opcion == null || opcion == "") {
        mensaje = "Has cancelado o introducido el email vacío";
        alert(mensaje);
    } else {
        mensaje = "Recibiras un correo a: \n" + opcion + "\n con las intruciones a realizar para recuperar la contraseña";
        alert(mensaje);
    }
}