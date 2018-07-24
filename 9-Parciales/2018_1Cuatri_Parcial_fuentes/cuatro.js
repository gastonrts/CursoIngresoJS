function mostrar()
{	
	
	var numeroUno;
	var numoroDos;
	var resultado;

	numeroUno = prompt ('Ingrese un número');
	numoroDos = prompt ('Ingrese un número');

	if (numeroUno==numoroDos)
	{
		resultado = numeroUno + numoroDos;
		alert ('Su número es ' + resultado)
	}

		else if (numeroUno>numoroDos)
	{
		numoroUno =	parseInt (numeroUno);
		numoroDos = parseInt (numoroDos);
		resultado = numoroUno - numoroDos;
		alert ('Su número es ' + resultado);
	}

		else 
	{
		numeroUno = parseInt (numeroUno);
		numoroDos = parseInt (numoroDos);
		resultado = numeroUno + numoroDos;
		alert ('Su número es ' + resultado);

		if (resultado>10)
		{
		alert ('La suma es ' + resultado +  ' y supero a 10')
		}
	}

	

}
