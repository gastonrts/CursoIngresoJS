/*
Jose - M - 25
Maria- F - 16 
Jesus- M - 33 
Fer -  F - 81
*/
function mostrar()
{

	var nombre;
	var sexo;
	var edad;

	var contador = 0;
	var contadorMujeres = 0;
	var contadorHombres = 0;

	var contadorMayores = 0;
	var contadorMenores = 0;

	var contadorEdades = 0;
	var edadMasAlta;
	var edadMasBaja;

	var acumuladorEdades = 0;
	var PromedioEdades;
	var promedioEdadMasculino;
	var promedioEdadFemenino;
	var acumuladorMujeres = 0;
	var acumuladorHombres = 0;

	var masViejo; 
	var masJoven;
	var sexoMasViejo;
	var mujerMasVieja;

	while (contador<4)
	{	

			nombre = prompt ('Ingrese su nombre ' + contador);

			sexo = prompt ('Ingres su sexo F para femenino y M para masculino ' + contador);

		while (sexo!='m'&&sexo!='f')
		{
			alert ('Ingresó un sexo erroneó');
			sexo = prompt ('Ingres su sexo F para femenino y M para masculino ' + contador);
		}

			edad   = prompt ('Ingrese su edad. Entre 0 y 90 años inclusive ' + contador);
			edad   = parseInt (edad);
 
		while (isNaN(edad)||edad<0||edad>90)
		{
			alert ('Ingresó una edad erronea')
			edad   = prompt ('Ingrese su edad. Entre 0 y 90 años inclusive ' + contador);
			edad   = parseInt (edad);

		}

			if (sexo=='m')
		{
			contadorHombres++;
		}

				else 
		{
			contadorMujeres++;
		}
		//Hasta acá se ingresa sexo//

		//Acá las edades//
			if (edad>18)
		{
			contadorMayores++;
			acumuladorEdades+= edad;
		}

				else 
		{
			contadorMenores++;
			acumuladorEdades+= edad;
		}

		//bandera para sacar la edad mas alta y la mas baja
			if (contadorEdades==0)
		{	
			contadorEdades++;
			edadMasAlta = edad;
			edadMasBaja = edad;
			masViejo 	= nombre;
		}
			
			else 
		{	
			if (edadMasAlta>edad)
			{			
				edadMasAlta = edad; //la edad mas alta
				masViejo = nombre; // el nombre del mas viejo
				sexoMasViejo = sexo; // el sexo del mas viejo}
				if (sexo=='f')
			{
				mujerMasVieja = nombre; // lo meto adentro para sacar el nombre del mas viejo
			}
		}		
				if (edadMasBaja<edad)
		{
				edadMasBaja = edad; // la edad mas baja
 				masJoven	= nombre; // el nombre del mas joven

		}

		}
			
		//Acá termina la  bandera//

		// saco la edad mas baja//

		if (edad>0&&edad<90&&sexo=='f')
		{
			acumuladorMujeres+= edad;
		}
			else // cambie if x else. Probar si funciona.		if (edad>0&&edad<90&&sexo=='m')

		{
			acumuladorHombres+=	edad;
		}
		// saco la edad mas baja//

		contador++;
		}
		
		//punto 1, 2, 3 y 4 //



		PromedioEdades = acumuladorEdades / contador;
		promedioEdadFemenino	= acumuladorMujeres / contadorMujeres;
		promedioEdadMasculino 	= acumuladorHombres / contadorHombres;
						// CONTADOR MAYORES&MENORES - CONTADORES H&M
		document.write('La cantidad de hombres  es ' + contadorHombres + '<br>');
		document.write ('La cantidad de mujeres es ' + contadorMujeres + '<br>');
		document.write ('La cantidad de menores es ' + contadorMenores + '<br>');
		document.write ('La cantidad de mayores es ' + contadorMayores + '<br>');
						//EDADES MAS BAJAS//
		document.write ('La edad mas baja es ' + edadMasBaja + '<br>');
		document.write ('La edad mas alta es ' + edadMasAlta + '<br>');
						// PROMEDIOS
		document.write ('El promedio de edades ' + PromedioEdades + '<br>' );
		document.write ('El promedio de edad de mujeres es ' + promedioEdadFemenino + '<br>' );
		document.write ('El promedio de edad de hombres es ' + promedioEdadMasculino + '<br>' );
						// NOMBRE DEL MAS VIEJO/JOVEN
		document.write ('El nombre del más viejo es ' + masViejo + '<br>' );
		document.write ('El nombre del más joven es ' + masJoven + '<br>' );
						// SEXO Y NOMBRE DEL MAS VIEJO
		document.write ('El sexo del más viejo es ' + sexoMasViejo + '<br>' );
		document.write ('La Mujer más vieja es ' + mujerMasVieja + '<br>' );


	}




/*	
	un document.write por cada dato que quiero mostrar.


	1) 	cantidad de mujeres = 2	 			✓
	2) 	cantidad de hombres = 2				✓
	3) 	cantidad mayores de edad = 3		✓
	4) 	cantidad menores de edad = 1		✓

	//Hasta acá va bien//


	5) 	la edad mas baja = 16				✓
	6) 	la edad mas alta = 81				✓
	7) 	promedio de edad mujeres = 48		✓
	8) 	promedio de edad hombres = 29		✓
	8) 	promedio de edad total = 38 		✓

	10)	nombre del más viejo = Fer 			✓
	11) nombre del más joven = Maria		✓
	12) sexo del más viejo = F 				✓
	13) nombre de la mujer mas vieja = Fer 	✓

*/









/*

		if (edad>edadMaximaFemenino) //Hacer otro edad maximo para femeninos para que entre SOLO si es mujer.

		{
			edadMaximaFemenino = edad;
			nombreFemeninoMasViejo = nombre
		}

		if (contador==0)

		{
			maximo = edad:
		}

		else {
			if (edad>maximo)
			{
				maximoo = edad;
			}
		}

*/// for primero ejecuta 'contador = 0' después los demás y cuando vuelve a las condiciones ejecuta asegurandose que el contador sea menor a 5.