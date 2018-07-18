/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/


var largo;
var ancho;
var radioTerreno;

var perimetroTerreno;

var perimetroCirculo;

var matarialesContrapiso;




function Rectangulo () 
{	
	largo = document.getElementById('Largo').value;
	ancho = document.getElementById('Ancho').value;

	largo = parseInt (largo);
	ancho = parseInt (ancho);

	perimetroTerreno  = (ancho * 2) + (largo * 2);


	alert ('Usted va a necesitar 3 hilos de alambre de ' + perimetroTerreno + ' metros cada uno');

}
function Circulo () 
{
	radioTerreno = document.getElementById('Radio').value;

	radioTerreno = parseInt (radioTerreno);

	perimetroCirculo = (2 * 3.14) * radioTerreno;

	alert ('Usted va a necesitar 3 hilos de alambre de ' + perimetroCirculo + ' metros cada uno')
}
function Materiales () 
{


	
	

}