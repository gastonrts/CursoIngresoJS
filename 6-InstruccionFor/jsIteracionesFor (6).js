function mostrar()
{

	var numero;
	numero = parseInt (numero);
	var contadorPares = 0;
	var contador = 0;
	
	numero = prompt ('Ingrese un número y se mostraran los pares ');

		for (;;)
	{	

		contador++


		if (numero/2==0)
		{
			contadorPares ++;
		}
		
		
		if (contador==numero)
		{
			break;
		}
	}
	alert ('Los números pares encontrados son ' + contadorPares);


}//FIN DE LA FUNCIÓN