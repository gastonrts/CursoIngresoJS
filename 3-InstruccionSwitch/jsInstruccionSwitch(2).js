function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
	
	switch (mesDelAño)
	{
		case 'Enero':

		alert ('Estamos en verano')

		break;

		case 'Julio':

		case 'Agosto':

		alert ('Estamos en invierno')
		break;

		default:
		alert ('Estamos en otra estación');
	}

;




}//FIN DE LA FUNCIÓN