/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
	var cantLamparas; //cantidad de lamparas

	var importeLamparas;	// importe de = La cantidad * 35 (precio de las lamparas)

	var precioDescuento;   	//el importe del descuento
	var precioLamparas;		// el precio final con descuento

	var ingresosBrutos;

	var marca;	//la marca 'ArgentinaLuz', etc

	cantLamparas = document.getElementById('Cantidad').value; //Ingreso la cantidad de lamparas.

	marca = document.getElementById('Marca').value;



		if (cantLamparas>=6) //PUNTO A

			{
				importeLamparas = cantLamparas * 35; //De acá sale el importe de las lamparas

				precioDescuento = importeLamparas * 0.50; //el descuento de las lamparas 

				precioLamparas 	= importeLamparas - precioDescuento; // el precio con descuento, precio final

				document.getElementById('precioDescuento').value= precioLamparas;
			}
							//PUNTO A TERMINA ACÁ.

			else if (cantLamparas==5&&marca=='ArgentinaLuz')

			{
				importeLamparas = cantLamparas * 35; //De acá sale el importe de las lamparas

				precioDescuento = importeLamparas * 0.40; //el descuento de las lamparas 

				precioLamparas 	= importeLamparas - precioDescuento; // el precio con descuento, precio final

				document.getElementById('precioDescuento').value= precioLamparas;

			}

			else if (cantLamparas==5&&marca!='ArgentinaLuz')


				{
				importeLamparas = cantLamparas * 35; //De acá sale el importe de las lamparas

				precioDescuento = importeLamparas * 0.30; //el descuento de las lamparas 

				precioLamparas 	= importeLamparas - precioDescuento; // el precio con descuento, precio final

				document.getElementById('precioDescuento').value= precioLamparas;

			}

								

								//PUNTO B TERMINA ACÁ.


			else if (cantLamparas==4&&(marca=='ArgentinaLuz'||marca=='FelipeLamparas'))
			
			{

				importeLamparas = cantLamparas * 35; //De acá sale el importe de las lamparas

				precioDescuento = importeLamparas * 0.25; //el descuento de las lamparas 

				precioLamparas 	= importeLamparas - precioDescuento; // el precio con descuento, precio final

				document.getElementById('precioDescuento').value= precioLamparas;
			}

			else if (cantLamparas==4)

			{	

				importeLamparas = cantLamparas * 35; //De acá sale el importe de las lamparas

				precioDescuento = importeLamparas * 0.20; //el descuento de las lamparas 

				precioLamparas 	= importeLamparas - precioDescuento; // el precio con descuento, precio final

				document.getElementById('precioDescuento').value= precioLamparas;
							 

			}

							/////////////////// TERMINO PUNTO C ////////////////////

			else if (cantLamparas==3&&marca=='ArgentinaLuz')
		
			{

				importeLamparas = cantLamparas * 35; //De acá sale el importe de las lamparas

				precioDescuento = importeLamparas * 0.15; //el descuento de las lamparas 

				precioLamparas 	= importeLamparas - precioDescuento; // el precio con descuento, precio final

				document.getElementById('precioDescuento').value= precioLamparas;
							 

			}

			else if (cantLamparas==3&&marca=='FelipeLamparas')
			{

				importeLamparas = cantLamparas * 35; //De acá sale el importe de las lamparas

				precioDescuento = importeLamparas * 0.10; //el descuento de las lamparas 

				precioLamparas 	= importeLamparas - precioDescuento; // el precio con descuento, precio final

				document.getElementById('precioDescuento').value= precioLamparas;
							 

			}

			else if (cantLamparas==3)
			{

				importeLamparas = cantLamparas * 35; //De acá sale el importe de las lamparas

				precioDescuento = importeLamparas * 0.05; //el descuento de las lamparas 

				precioLamparas 	= importeLamparas - precioDescuento; // el precio con descuento, precio final

				document.getElementById('precioDescuento').value= precioLamparas;
							 

		}

						////////////// TERMINO PUNTO D ////////////

			if (precioLamparas>=120)

			{
				ingresosBrutos = precioLamparas * 0.10;

				precioLamparas = precioLamparas + ingresosBrutos;

				alert ('Usted debe pagar IIBB por un monto de ' + ingresosBrutos);

				
				document.getElementById('precioDescuento').value= precioLamparas;

			


			}







				}



					////TERMINO DEL PUNTO E////