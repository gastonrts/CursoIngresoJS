/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
var eleccionJugador;

function comenzar()
{
	

	eleccionMaquina = Math.floor(Math.random()*(4-1) +1);



}

//FIN DE LA FUNCIÓN




function piedra()
{	



	if (eleccionMaquina==1)

	{
		alert ('Empataste, la maquina eligio piedra');

			}

		else if (eleccionMaquina==2)

		{
			alert ('Perdiste, la maquina eligio papel');
		}
		
		else if (eleccionMaquina==3)	

		{
			alert ('Ganaste, la maquina eligio tijera');
		}	
	

}

//FIN DE LA FUNCIÓN




function papel()
{
		if (eleccionMaquina==2)

	{
		alert ('Empataste, la maquina eligio papel')	}	

				else if (eleccionMaquina==1)

		{
			alert ('Ganaste, la maquina eligio piedra');
		}
		
		else if (eleccionMaquina==3)	

		{
			alert ('Perdiste, la maquina eligio tijera');
		}	


}

//FIN DE LA FUNCIÓN



function tijera()
{
	
			if (eleccionMaquina==3)

	{
	alert ('Empataste, la maquina eligio tijera');
	}

	else if (eleccionMaquina==2)

	{
	alert ('Ganaste, la maquina eligio papel');
	}
		
	else if (eleccionMaquina==1)	

	{
	alert ('Perdiste, la maquina eligio piedra');
	}	

}



//FIN DE LA FUNCIÓN