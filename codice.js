<script type="text/javascript" src="funzCookie.js"></script>
<script>
    let nombreUsuario = leerCookie('userName');
    if (nombreUsuario != '') {
        document.getElementById('saludo').innerHTML = `Hola ${nombreUsuario}`;
    }else{
        nombreUsuario = prompt('No te conosco. Escribe tu nombre: ', '');
        if(nombreUsuario != '' && nombreUsuario != null){
            configuraCookie('userName', nombreUsuario, 3);
        }
    }
</script>