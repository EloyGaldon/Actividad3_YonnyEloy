<h1>BackEnd.</h1>
<p>Ya disponemos maquetada la aplicación pero nos falta añadir iteracción a nuestra web, para ello vamos a permitir a los usuarios registrarse y loguearse, para ello modificaremos el menú para incluir dos nuevas opciones registro y login.</p>

<h3>Condiciones.</h3>
<p>La web montada sobre un servidor node y Express el enrutado se deberá gestionar mediante Express.
<h5>Respecto a la página de registro:</h5>
  <ul>
<li>Se deberá comprobar que el password se introduzca en los dos campos igual en caso de no ser así deberá mostrar un mensaje que nos índique que no son iguales.
<li>Una vez comprobado la clave se deberá encriptar debemos generar una funcion que realize dicha tarea.
  </ul>
  <h5>Respecto a la página de login</h5>
  <ul>
    <li>cuando se pulse "NO RECUERDAS TU CONTRASEÑA" debe aparecer un mensaje indicándonos que introduzcamos el email para recupera la contraseña.
    <li>Se deberá crear una Base de Datos que dispondrá de una tabla con los siguients campos:
  <ul>
<li>id -> Integer, autonumérico, not null y clave principal.
<li>usuario -> varchar(45) not null
<li>email -> varchar(45) not null
<li>password -> varchar(80) not null
<li>hash -> varchar(80) null
  </ul>
      </ul>
<p>Se deberá detectar la visita a otra página y devolver un mensaje de error para indiar que la página que busca no se encuentra.
<p>El nombre de usuario debe almacenarse en el localStorage del navegador

<h5>Característias.</h5>
<p>Se utiliza NPM para la instalación de dependencias.
