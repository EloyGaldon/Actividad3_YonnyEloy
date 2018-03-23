// comprobamos que la clave introducida y la repetida sean las mismas

function Registro () {
    let name=$('#registUsuario').val();
    let email=$('#registEmail').val();
    let password1=$('#registPassword').val();
    let password2=$('#registPassword2').val();


        if(password1==password2){
        alert('Regsitro realizado correctamente');
        }
        else{
        alert('Las contraseñas introducidas son distintas');
        }
};


