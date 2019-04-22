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
    dato = prompt('Introduce el campo que deseas ver:  \n nombre \n apellidos \n edad  \nbasicaPrimaria \nbasicaSecundaria \n mediaVocacional \nprofesion \npais \nciudad \nbarrio \nnombreEdificio \nnoPiso');

    if (dato == null || dato == "") {
        mensaje = 'Debes introducir un dato, cancelaste el programa';
    } else {
        mensaje = obj[dato];
    }
    document.getElementById('ejemplo').innerHTML = mensaje;
}

var boton = document.getElementById('boton');
boton.addEventListener('click', saludo);


