function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var numero;
	var contadorNegativos = 0;
	var contadorPositivos = 0;
	var contadorCeros     = 0;
	var positivos =0;
	var negativos =0;
	var promedioPositivos;
	var promedioNegativos;
	var diferenciaNegativosPositivos;
	
	var respuesta="si";

	while(true)
	{	
		numero = prompt ('Ingrese un número, si desea dejar de añadir números. Ingrese una letra');
		numero = parseInt (numero);
			if (isNaN(numero))
			{	
				break;
			}
			if (numero>=1)
			{	
				positivos=positivos + numero;
				contadorPositivos++;
				promedioPositivos = positivos / contadorPositivos;

			}
			if (numero<0)
			{	
				negativos = negativos + numero;
				contadorNegativos++;
				promedioNegativos = negativos / contadorNegativos;
 			}
			if (numero==0)
			{
				contadorCeros++;
			}

			diferenciaNegativosPositivos = positivos - negativos;

		alert ('Tiene ' + contadorPositivos +' positivos' + ' tiene ' + contadorNegativos +' negativos' + ' la suma de positivos es '+ positivos + ' la suma de negativos es' + negativos + ' . Diferencia negativos entre positivos es ' + diferenciaNegativosPositivos + ' promedio de negativos ' + promedioNegativos + ' promedio positivos es ' + promedioPositivos );		
	
	}




}//FIN DE LA FUNCIÓN