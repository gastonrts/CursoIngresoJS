function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	
	var respuesta='si';

		while (true)
		{

			numero = prompt ('Ingrese números negativos y positivos. Los negativos se multiplican y los positivos se suman');
			numero = parseInt (numero);
				if (isNaN(numero))
				{
					break;
				}



		}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN

//banderas