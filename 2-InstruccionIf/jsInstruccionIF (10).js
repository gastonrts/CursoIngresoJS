function mostrar()
{
	var nota;
	nota = Math.floor (Math.random() * (11 - 1)	+1);

		if (nota==9||nota==10)

		{
			alert (nota + ' Excelenteeee.' );
		}

		else 

		{

			if (nota>=4) 

			{

				alert (nota + ' APROBÓ');

			}

			else 
					{

						alert (nota + ' Vamos, la proxima se puede o noooo o si?' );

							}	

		}

}//FIN DE LA FUNCIÓN