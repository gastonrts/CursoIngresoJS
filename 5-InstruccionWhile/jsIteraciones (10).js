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
	var contadorPares = 0;
	var promedioPositivos;
	var promedioNegativos;
	var PositivosSobreNegativos;
	var NegativosSobrePositivos;	
	var respuesta="si";
	//Faltó la cantidad de pares , lo defino afuera
	while(true)
	{	
		numero = prompt ('Ingrese un número, si desea dejar de añadir números. Si se ingrese una letra la ejecución se detiene.');
		numero = parseInt (numero);
			if (isNaN(numero))
			{	
				break;
			}
			if (numero>=1)
			{	
				positivos=positivos + numero;
				contadorPositivos++;
				promedioPositivos = positivos / contadorPositivos;+
				contador++;
			}
			if (numero<0)
			{	
				negativos = negativos + numero;
				contadorNegativos++;
				promedioNegativos = negativos / contadorNegativos;
				contador++;
 			}
 			if (numero / 2 == 0)
 			{
 				contadorPares ++;
 			}
			if (numero==0)
			{
				contadorCeros++;
				contador++;
			}
			if (contadorPositivos>contadorNegativos)
			{	PositivosSobreNegativos = contadorPositivos - contadorNegativos;
				alert ('Hay más positivos que negativos ' + PositivosSobreNegativos);
			}
			else if (contadorPositivos<contadorPositivos)
			{	
				NegativosSobrePositivos = contadorNegativos - contadorPositivos;
				alert ('Hay más negativos que positivos ' + NegativosSobrePositivos);
			}
			else 
			{
				alert ('Hay tantos negativos como positivos')
			}

	
	}		document.write ('Tiene '+ contadorPares + ' pares.<br>' + 'Tiene ' + contadorPositivos +' positivos. <br>' + ' Tiene ' + contadorNegativos + ' negativos. <br>' + ' La suma de positivos es ' + positivos + '. <br> ' + ' La suma de negativos es' + negativos + ' <br> ' + ' Diferencia negativos entre positivos es ' + diferenciaNegativosPositivos + ' <br> ' + ' Promedio de negativos ' + promedioNegativos +' <br> '+ ' Promedio positivos es ' + promedioPositivos +' <br> ' + ' Tiene ' + contador + ' números ingresados.' );		


//<br> Para usar un salto de linea.


}//FIN DE LA FUNCIÓN


/* 	1) 	cantidad de mujeres = 2
	2) 	cantidad de hombres = 2
	3) 	cantidad mayores de edad = 3
	4) 	cantidad menores de edad = 1
	5) 	la edad mas baja =
	6) 	la edad mas alta =
	7) 	promedio de edad mujeres =
	8) 	promedio de edad hombres =
	8) 	promedio de edad total =
	10)	nombre del más viejo =
	11) nombre del más joven = 
	12) sexo del más viejo =
	13) nombre de la mujer mas vieja =