	var eleccionMaquina; //Estas variables son globales, es decir entran en todos los 'funtcion' declarados.
	var ContadorDeEmpates=0;
	var ContadorDeGanadas=0;
	var ContadorDePerdidas=0;

	var piedra ;
	var papel;
	var tijera


function comenzar()
{


	eleccionMaquina=	Math.floor (Math.random() * (4-1)+1);	 	



}
//FIN DE LA FUNCIÓN
function piedra()
{
	if (eleccionMaquina==1) //acumuador = sumar una variable + acumulador es decir 'acum=acum+val'
	{						//BANDERA --> Toma un 'boolean' para mostrarlo en un if. if (bandera){bandera = false } 
		ContadorDeEmpates++; //contador+=1 primero muestra el contado y después lo suma ó ++contador primero suma 1 y despues lo muestra
	}
		else if (eleccionMaquina==2)
		{
			ContadorDePerdidas++;
		}
		else if (eleccionMaquina==3)
		{
			ContadorDeGanadas++;
		}
			mostrarResultado()
			
			comenzar ()

}//FIN DE LA FUNCIÓN
function papel()
{

	if (eleccionMaquina==2) //Si la maquina elije papel...
		{	
			ContadorDeEmpates++;
		}
		else if (eleccionMaquina==1) //Si elije piedra...
		{
			ContadorDeGanadas++;
		}
		else if (eleccionMaquina==3)//Si elije tijera...
		{
			ContadorDePerdidas++;
		}
			mostrarResultado() //se llama a la función-

			comenzar ()
}//FIN DE LA FUNCIÓN
function tijera()
{
	
	if (eleccionMaquina==3)
		{
			ContadorDeEmpates++;

		}
		else if (eleccionMaquina==2)
		{
			ContadorDeGanadas++;
		}
		else if (eleccionMaquina==1)
		{
			ContadorDePerdidas++;
		}

			mostrarResultado()

			comenzar () // Declaro 'comenzar ()' para que se genere un nuevo numero random.

}//FIN DE LA FUNCIÓN

function mostrarResultado()
{
			document.getElementById('empatadas').value=ContadorDeEmpates;
			document.getElementById('ganadas').value=ContadorDeGanadas;
			document.getElementById('perdidas').value=ContadorDePerdidas;
}

//Las funciones ejecutan 1 sola cosa, es decir 1 'funtcion' para mostrar resultado y otro distintio para mostrar un número random.