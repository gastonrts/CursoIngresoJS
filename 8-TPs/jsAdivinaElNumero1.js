/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/

	var numero;	
	var contadorIntentos;
	contadorIntentos = 0;

	var numeroSecreto; 

	

		



function comenzar()
{					



		numeroSecreto = Math.floor (Math.random () * (101 - 1) +1);


		

		
	}


function verificar()		

{		document.getElementById('intentos').value = contadorIntentos;

		if (contadorIntentos<100)

		{
			contadorIntentos = contadorIntentos+1
		}
		numero = document.getElementById('numero').value;

	if (numero==numeroSecreto)
		 	{

		 	alert ('Usted ha acertado el número secreto');

			}

			else if (numero<numeroSecreto)
			{
				alert ('Le falta');
			}

			else if (numero>numeroSecreto)
			{
				alert ('Le sobra...');
			}
	
}