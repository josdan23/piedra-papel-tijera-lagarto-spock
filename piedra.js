// función que devuelve un número entero entre un rango
function aleatorio(minimo, maximo)
{
	return numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
}

//función que muestra la opcion elegida del usuario, de la maquina y el resultado de la partida
function mensaje(tuEleccion, maquinaEleccion, resultado)
{
	alert("Tu: " + tuEleccion + "\nMáquina: " + maquinaEleccion + resultado);
}

//determina si ganas o pierdes de acuerdo a eleccion1 o eleccion2,
//solo son necesarias dos opciones para saber quién gana
//ej: si eliges "Piedra", solo puedes ganar si la máquina elige "Tijera" o "Lagarto"
//caso contrario, pierdes, porque la máquina te gana con "Papel" o "Spock"
function quienGana( eleccion1, eleccion2)
{
	if (opciones[opcionMaquina] == eleccion1 || opciones[opcionMaquina] == eleccion2)
	{
		mensaje(opciones[opcionUsuario], opciones[opcionMaquina], "\nGANASTE!");
	}
	else 
	{
		mensaje(opciones[opcionUsuario], opciones[opcionMaquina], "\nPERDISTE!");
	}
}

// todas las opciones posibles
var opciones = ["Piedra", "Papel", "Tijera", "Lagarto", "Spock"];

//elección del usuario
var opcionUsuario = prompt("¿Qué eliges?\nPiedra: 0\nPapel: 1\nTijera: 2\nLagarto: 3\nSpock: 4", 0);

//elección de la máquina
var opcionMaquina = aleatorio(0,4);

if ( opcionUsuario == opcionMaquina)  // si las elecciones son iguales
{
	mensaje(opciones[opcionUsuario], opciones[opcionMaquina], "\nEMPATE!");
}
else if ( opciones[opcionUsuario] == "Piedra" ) // el usuario elige "Piedra"
{
	quienGana("Tijera", "Lagarto"); //si la maquina elige "Tijera" o "Lagarto" el usuario gana, caso contrario pierde
}
else if ( opciones[opcionUsuario] == "Papel") //El usuario elige "Piedra"
{
	quienGana("Piedra", "Spock"); //si la maquina elige "Piedra" o "Spock" el usuario gana, caso contrario pierde
}
else if (opciones[opcionUsuario] == "Tijera") //El usuario elige "Tijera"
{
	quienGana("Papel", "Lagarto");//si la maquina elige "Papel" o "Lagarto" el usuario gana, caso contrario pierde
}
else if (opciones[opcionUsuario] == "Lagarto") //El usuario elige "Lagarto"
{
	quienGana("Papel", "Spock");//si la maquina elige "Papel" o "Spock" el usuario gana, caso contrario pierde
}
else if (opciones[opcionUsuario] == "Spock") //El usuario elige "Spock"
{
	quienGana("Piedra", "Tijera");//si la maquina elige "Piedra" o "Tijera" el usuario gana, caso contrario pierde
}
else // no elegiste una opción entre el 0 y 2.
{
	alert("NO elegiste correcto -_-");
}
