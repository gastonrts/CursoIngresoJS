function mostrar()
{

	var contador=0;
	// declarar variables
	var numero;
	var maximo;
	var minimo;
/*	maximo = -9999;
	minimo = +9999;*/
	var respuesta='si';

	while(respuesta!='no')
	{
			contador ++;

			numero = prompt ('Ingrese un número'+contador);
			numero = parseInt (numero);
			if (contador==1)
			{
				numero = maximo;
				numero = minimo
			}
			if (numero>maximo)
			{
				maximo = numero; //si numero es mayor a maximo, maximo pasar a valer lo que vale el numero.
			}
			if (numero<minimo)
			{
				minimo =numero;
			}

			respuesta = prompt ('¿Queres continuar?');

	
	}

	document.getElementById('maximo').value = maximo;
	document.getElementById('minimo').value = minimo;




}//FIN DE LA FUNCIÓN

// EJERRCICIO 12 DEL TP