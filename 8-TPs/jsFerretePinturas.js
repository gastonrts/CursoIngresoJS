/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/

	var temperatura;

	var fahrenAGrados;

	var gradosAFahren;

function FahrenheitCentigrados () 
{
	temperatura = document.getElementById('Temperatura').value;

	temperatura = parseInt (temperatura);

	fahrenAGrados = (temperatura - 32) / 1.8;

	alert (temperatura + ' Fahrenheit son ' + fahrenAGrados + ' grados');


}

function CentigradosFahrenheit () 
{
	temperatura = document.getElementById('Temperatura').value;

	temperatura = parseInt (temperatura);

	gradosAFahren = temperatura * (1.8) + 32;

	alert (temperatura + ' Fahrenheit son ' + gradosAFahren + ' grados');
}
