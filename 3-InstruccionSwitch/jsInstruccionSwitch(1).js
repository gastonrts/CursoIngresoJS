function mostrar()
{
	var mesDelAño = document.getElementById('mes').value;


	switch (mesDelAño) 

	{
		case 'Enero':
			alert ('Es verano')
			break;
		

		case 'Marzo':
			alert ('A clases')
			break;
		
		
		case 'Julio':	
			alert ('Se vienen las vacaciones')
			break;
		
		case 'Diciembre':
			alert ('Felices Fiestas')
			break;	
		

			// break: para la sentencia case perteneciente a esta declaración
			//default: Si no pasó ningún 'case' se ejecuta el 'default'. -Siempre poner al último y no es necesario un 'break' para esta declaración
			// == igualdad simple === igualdad exacta. 
	}




}//FIN DE LA FUNCIÓN