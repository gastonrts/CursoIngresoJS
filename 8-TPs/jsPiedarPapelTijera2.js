	var eleccionMaquina;
	var ContadorDeEmpates=0;
	var ContadorDeGanadas=0;
	var ContadorDePerdidas=0;


function comenzar()
{


	eleccionMaquina=	Math.floor (Math.random() * (4-1)+1);	 	



}
//FIN DE LA FUNCIÓN
function piedra()
{
	if (eleccionMaquina==1)
	{
		ContadorDeEmpates++;
	}
		else if (eleccionMaquina==2)
		{
			ContadorDePerdidas++;
		}
		else if (eleccionMaquina==3)
		{
			ContadorDeGanadas++;
		}
			document.getElementById('empatadas').value=ContadorDeEmpates;
			document.getElementById('ganadas').value=ContadorDeGanadas;
			document.getElementById('perdidas').value=ContadorDePerdidas;
	

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
			document.getElementById('empatadas').value=ContadorDeEmpates;
			document.getElementById('ganadas').value=ContadorDeGanadas;
			document.getElementById('perdidas').value=ContadorDePerdidas;
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
			document.getElementById('empatadas').value=ContadorDeEmpates;
			document.getElementById('ganadas').value=ContadorDeGanadas;
			document.getElementById('perdidas').value=ContadorDePerdidas;



}//FIN DE LA FUNCIÓN

function mostrarResultado()
{



	
}