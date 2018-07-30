/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	var edad;
 	var sexo;
 	var estadoCivil;
 	var sueldoBruto;
 	var numeroLegajo;
 	var nacionalidad;
 	var respuesta = 'Si';

 				/*
 				nacionalidad	= prompt ('Ingrese su nacionalidad siendo: A para argentinos, E para extranjeros y N para nacionalizados');
 	*/

 	while (respuesta!='no')
 {	
 	edad 	= prompt ('Ingrese su edad (Entre 18 y 90 años)');

	if (isNaN(edad)||edad<18||edad>90)
		{
			alert ('¡No es una edad valida!');
			continue;
		}

	sexo = prompt ('Ingrese su sexo m para masculino, f para femenino');

		while (sexo!='m'&&sexo!='f')
	{
			alert ('¡No es un sexo valido!');
			sexo = prompt ('Ingrese su sexo m para masculino, f para femenino');
	}
		if (sexo=='m')
		{
			sexo == 'masculino';
		}
		else if (sexo=='f')
		{
			sexo == 'femenino';
		}
	estadoCivil = prompt ('Ingrese su Estado Civil 1) SOLTERO 2) CASADO 3) DIVORCIADOS 4) VIUDOS');

	while (isNaN(estadoCivil)||estadoCivil<1||estadoCivil>4)

	{
			alert ('El Estado civil ingresado no es valido')
			estadoCivil = prompt ('Ingrese su Estado Civil 1) SOLTERO 2) CASADO 3) DIVORCIADOS 4) VIUDOS');
	}

	if (estadoCivil==1)
	{
		estadoCivil = 'Soltero'
	}
	else if (estadoCivil==2)
	{
		estadoCivil = 'Casado';
	}

	else if (estadoCivil==3)
	{
		estadoCivil = 'Divorciado';
	}

	else if (estadoCivil==4)
	{
		estadoCivil = 'Viudo';
	}

	sueldoBruto = prompt ('Ingrese su sueldo bruto, este no debe ser menor a $8000 pesos');

	while (sueldoBruto<8000||isNaN(sueldoBruto))
	{
	 		alert ('El sueldo bruto es menor o distinto a $8000');
	 		sueldoBruto = prompt ('Ingrese su sueldo bruto, este no debe ser menor a $8000 pesos');
	}
 				numeroLegajo	= prompt ('Ingrese su número de legajo, número de 4 cifras sin cero a la izquierda');

	while (isNaN(numeroLegajo)||numeroLegajo<1000||numeroLegajo>9999)
	{

			alert ('El legajo no es valido');
 			numeroLegajo	= prompt ('Ingrese su número de legajo, número de 4 cifras sin cero a la izquierda');
	}
	nacionalidad	= prompt ('Ingrese su nacionalidad siendo: A para argentinos, E para extranjeros y N para nacionalizados');

	while (nacionalidad!='a'&&nacionalidad!='e'&&nacionalidad!='n')

	{
			alert ('La Nacionalidad es invalida');
			nacionalidad	= prompt ('Ingrese su nacionalidad siendo: A para argentinos, E para extranjeros y N para nacionalizados');

	}
		if (nacionalidad=='a')
	{
		nacionalidad = 'Argentino'
	}
		else if (nacionalidad=='e')
	{
		nacionalidad = 'Extranjero';
	}
		else if (nacionalidad=='n')
	{
	 	nacionalidad = 'Nacionalizado';
	}







	respuesta = prompt ('¿Desea seguir cargando datos?');
	break;
 }

	document.getElementById('Edad').value = edad;
	document.getElementById('Sexo').value = sexo;
 	document.getElementById('EstadoCivil').value = estadoCivil;
	document.getElementById('Sueldo').value = sueldoBruto; 	
	document.getElementById('Legajo').value = numeroLegajo;
 	document.getElementById('Nacionalidad').value = nacionalidad;
}


 


