/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/




var precio1;
var precio2;
var	precio3;
var sumar;
var promedio;

var precioIva;
var precioFinal;




function Sumar () 
		

		{

	precio1 		= document.getElementById('PrecioUno').value;
	precio2 		= document.getElementById('PrecioDos').value;
	precio3 		= document.getElementById('PrecioTres').value;


	precio1 		= parseInt (precio1);
	precio2 		= parseInt (precio2);
	precio3 		= parseInt (precio3);

	sumar 			= precio1 + precio2 + precio3;

					alert ('La suma es ' + sumar)
		}


function Promedio () 
		{
	
	precio1 		= document.getElementById('PrecioUno').value;
	precio2 		= document.getElementById('PrecioDos').value;
	precio3 		= document.getElementById('PrecioTres').value;

	precio1 		= parseInt (precio1);
	precio2 		= parseInt (precio2);
	precio3 		= parseInt (precio3);

	promedio 		= (precio1 + precio2 + precio3) / 3;

	alert ('El promedio es ' + promedio);


		}


function PrecioFinal () 


{
	
	precio1 		= document.getElementById('PrecioUno').value;
	precio2 		= document.getElementById('PrecioDos').value;
	precio3 		= document.getElementById('PrecioTres').value;

	precio1			= parseInt (precio1);
	precio2 		= parseInt (precio2);
	precio3 		= parseInt (precio3);

	precioIva 		= (precio1 + precio2 + precio3) * 0.21;
	sumar           = precio1 + precio2 + precio3;
	precioFinal 	= precioIva + sumar;

	alert ('El precio final con IVA es ' + precioFinal);







}