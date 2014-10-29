// función que devuelve un número entero entre un rango
function aleatorio(minimo, maximo)
{
	return numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
}

//función que muestra las opciones elegidas y el resultado de la partida
function mensaje(tuEleccion, maquinaEleccion, resultado)
{
	alert("Tu: " + tuEleccion + "\nMáquina: " + maquinaEleccion + resultado);
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
	if ( (opciones[opcionMaquina] == "Tijera") || (opciones[opcionMaquina] == "Lagarto")) // la máquina elige "Tijera" o "Spock"
	{
		mensaje(opciones[opcionUsuario], opciones[opcionMaquina], "\nGANASTE!");
	}
	else // la maquina eligío "Spock" o "Papel"
	{
		mensaje(opciones[opcionUsuario], opciones[opcionMaquina], "\nPERDISTE!");
	}
}
else if ( opciones[opcionUsuario] == "Papel") //El usuario elige "Piedra"
{
	if (opciones[opcionMaquina] == "Piedra" || opciones[opcionMaquina] == "Spock") // la máquina eligió "Piedra" o "Spock"
	{
		mensaje(opciones[opcionUsuario], opciones[opcionMaquina], "\nGANASTE!");
	}
	else // la máquina entonces eligío "Tijera" o "Lagarto"
	{
		mensaje(opciones[opcionUsuario], opciones[opcionMaquina], "\nPERDISTE!");
	}
}
else if (opciones[opcionUsuario] == "Tijera") //El usuario elige "Tijera"
{
	if (opciones[opcionMaquina] == "Papel" || opciones[opcionMaquina] == "Lagarto") // la máquina eligío "Papel" o "Lagarto"
	{
		mensaje(opciones[opcionUsuario], opciones[opcionMaquina], "\nPERDISTE!");
	}
	else // la máquina eligío "Piedra" o "Spock"
	{
		mensaje(opciones[opcionUsuario], opciones[opcionMaquina], "\nGANASTE!");
	}
}
else if (opciones[opcionUsuario] == "Lagarto") //El usuario elige "Lagarto"
{
	if (opciones[opcionMaquina] == "Papel" || opciones[opcionMaquina] == "Spock") // la máquina eligió "Papel" o "Spock"
	{
		mensaje(opciones[opcionUsuario], opciones[opcionMaquina], "\nGANASTE!");
	}
	else // la máquina entonces eligío "Tijera" o "Piedra"
	{
		mensaje(opciones[opcionUsuario], opciones[opcionMaquina], "\nPERDISTE!");
	}
}
else if (opciones[opcionUsuario] == "Spock") //El usuario elige "Spock"
{
	if (opciones[opcionMaquina] == "Piedra" || opciones[opcionMaquina] == "Tijera") // la máquina eligió "Piedra" o "Tijera"
	{
		mensaje(opciones[opcionUsuario], opciones[opcionMaquina], "\nGANASTE!");
	}
	else // la máquina entonces eligío "Papel" o "Lagarto"
	{
		mensaje(opciones[opcionUsuario], opciones[opcionMaquina], "\nPERDISTE!");
	}
}
else // no elegiste una opción entre el 0 y 2.
{
	alert("NO elegiste correcto -_-");
}
