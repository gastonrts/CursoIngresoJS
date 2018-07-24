function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

	switch (mesDelAño)
	{
		case 'Enero':
		case 'Marzo':
		case 'Mayo':
		case 'Julio':
		case 'Agosto':
		case 'Octubre':
		case 'Diciembre':
		alert ('Tiene más de 30 días')
		break;

		case 'Febrero':
		alert ('Tiene 28 días')
		break;

		default:
		alert ('Tiene 30 días');
	}	
	



}//FIN DE LA FUNCIÓN