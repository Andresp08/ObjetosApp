var mensaje,
    dato;

var persona = {
    nombre: 'Jesus humberto',
    apellidos: 'Diaz afanador',
    edad: 35,
    profesion: 'Ingeniero civil',
    pais: 'Colombia'
};

var obj = persona;

function saludo() {
    dato = prompt('Introduce el campo que deseas ver:  \nnombre \napellidos \nedad   \nprofesion \npais');

    if (dato == null || dato == "") {
        mensaje = 'Debes introducir un dato, cancelaste el programa';
    } else {
        mensaje = obj[dato];
    }
    document.getElementById('ejemplo').innerHTML = mensaje;
}

var boton = document.getElementById('boton');
boton.addEventListener('click', saludo);