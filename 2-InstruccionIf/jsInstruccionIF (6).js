function mostrar()
{
//tomo la edad  │ alt + 179 o alt + 124 |
	var edad;
	edad= document.getElementById('edad').value;

		if (edad<=13)
	{
		alert ('Usted es un niño');
	}
	else 
	{
		if (edad>=18)
		{	
			alert ('Usted es mayor de edad');
		}

		else 
		{
			alert ('Usted es adolescente');
		}




	}
		


}//FIN DE LA FUNCIÓN 

//else if