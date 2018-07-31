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

	var acumuladorEdades = 0;
	var edadMasAlta;
	var edadMasBaja;


	while (contador<2)
	{	
		contador ++;

		nombre = prompt ('Ingrese su nombre');

		sexo = prompt ('Ingres su sexo F para femenino y M para masculino');

		while (sexo!='m'&&sexo!='f')
		{
			alert ('Ingresó un sexo erroneó');
			sexo = prompt ('Ingres su sexo F para femenino y M para masculino');
		}

		edad   = prompt ('Ingrese su edad. Entre 0 y 90 años inclusive');
		edad   = parseInt (edad);
 
		while (isNaN(edad)||edad<0||edad>90)
		{
			alert ('Ingresó una edad erronea')
			edad   = prompt ('Ingrese su edad. Entre 0 y 90 años inclusive');
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

			if (acumuladorEdades==0)
		{
			edadMasAlta = acumuladorEdades;
			edadMasBaja = acumuladorEdades;
		}

			if (edad<acumuladorEdades)
		{
			edad = edadMasBaja;
		}

			if (edad>acumuladorEdades)
		{
			edad = edadMasBaja;
		}





		





	}

		document.write('La cantidad de hombres  es ' + contadorHombres + '<br>');
		document.write ('La cantidad de mujeres es ' + contadorMujeres + '<br>');
		document.write ('La cantidad de menores es ' + contadorMenores + '<br>');
		document.write ('La cantidad de mayores es ' + contadorMayores + '<br>');
		document.write ('La cantidad de edades es ' + acumuladorEdades + '<br>');
				document.write ('La cantidad de edades es ' + acumuladorEdades + '<br>');





}

/*	
	un document.write por cada dato que quiero mostrar.


	1) 	cantidad de mujeres = 2
	2) 	cantidad de hombres = 2
	3) 	cantidad mayores de edad = 3
	4) 	cantidad menores de edad = 1

	5) 	la edad mas baja = 16
	6) 	la edad mas alta = 81
	7) 	promedio de edad mujeres = 48
	8) 	promedio de edad hombres = 29
	8) 	promedio de edad total = 38

	10)	nombre del más viejo = Fer 
	11) nombre del más joven = Maria
	12) sexo del más viejo = F
	13) nombre de la mujer mas vieja = Fer

*/








/*
var alumnos;
	var notas;
	var sexo;
	var contador = 0;
	var acumulador = 0;
	var contadorMujeres = 0;
	var contadorHombres = 0;

	while (contador<5)
	{	
		notas = prompt ('Ingrese su nota');
		notas = parseInt (notas);
		sexo  = prompt ('Ingrese su sexo');

		
		contador++;
		if (IsNaN(notas))
		{
			notas = prompt ('Ingrese su nota');
			notas = parseInt (notas);
		}
		while (sexo!='f'&&sexo!='m')
		{
			alert ('Ingreso un género invalido.')
			sexo  = prompt ('Ingrese su sexo');
		}
		

		while (notas>0&&notas<10&&(sexo=='f'))
		{
			contadorMujeres ++;
			acumulador += notas;
		}
		while (notas>0&&notas<10&&(sexo=='m'))
		{
			contadorHombres ++;
			acumulador += notas;
		}

		alert ('Mujeres' + contadorMujeres + 'Hombres' + contadorHombres + 'notas' + notas  );

*/