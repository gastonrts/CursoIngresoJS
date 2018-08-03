function mostrar()
{
	var divisores;
	var numeroIngresado;
	var numeroAnterior; // Declaramos esta variable para poder hacer los numeros del 1 al número ingresado
	var numeroRecorridos;

	divisores = 0;


	numeroIngresado = prompt ('Ingrese un número');
	numeroIngresado = parseInt (numeroIngresado);

	for (numeroRecorridos==numeroIngresado;numeroRecorridos-1;numeroRecorridos--)
	{
		divisores==0; // Se vuelve a dividir
		for (numeroAnterior==numeroRecorridos;numeroAnterior>1;numeroAnterior--)

		{	if (numeroRecorridos/numeroAnterior==0)
						{
							divisores ++;
							break;
											}
					if (divisores==0)
						{
							console.log ('Es primo' + numeroRecorridos);
						}
							else 
						{	
							console.log('No es un número');
						}
					console.log (divisores);
		}
	}
	}
/*
	for (numeroAnterior==numeroIngresado-1;numeroAnterior>1;numeroAnterior--)
	{
		if (numeroIngresado/numeroAnterior==0)
		{
			divisores ++;
			break;
		}

		if (divisores==0)
		{
			console.log ('Es primo');
		}
		else 
		{	
			console.log('No es un número' + numeroRecorridos);
		}*/

	
//FIN DE LA FUNCIÓN

//Buscar : ¿Què es un centro número y número perfecto?