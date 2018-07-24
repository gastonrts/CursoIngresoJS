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
	var cantidad; //cantidad de lamparas

	var importeLamparas = 35;	// importe de = La cantidad * 35 (precio de las lamparas)

	var precioDescuento;   	//el importe del descuento
	var precioBruto;		// el precio final con descuento

	var ingresosBrutos;		//Cuando pasa de 120 $
 
	var marca;	//la marca 'ArgentinaLuz', etc


	cantidad = document.getElementById('Cantidad').value; //Ingreso la cantidad de lamparas.
	cantidad = parseInt (cantidad);

	marca = document.getElementById('Marca').value;



 	precioBruto = cantidad * 35;

		 switch (cantidad)
		{

			case 	1:
				precioDescuento = precioBruto * 1;
				break;
			case 	2:
				precioDescuento = precioBruto * 1 ;
				break;
			case	3:
				switch (marca)
						{
					case 'ArgentinaLuz':
					precioDescuento = precioBruto * 0,85;
					break;	
						}
				break;
			case	4:


		}
			document.getElementById('precioDescuento').value= precioDescuento;



		}




// PARCIAL 1 - 3 4 - 5 ---> 4 Hacer con if, 5 hacer con switch y al revés
// RECUPERATORIO 1 - 3 4 - 5 ---> 4 Hacer con if, 5 hacer con switch y al revés
//f.iluminación: Hacer con if, con if que tienen switch, con switch que tienen if y sólo switch


	


	/*	if (cantidad>=6) //PUNTO A

			{
				importeLamparas = cantidad * 35; //De acá sale el importe de las lamparas

				precioDescuento = importeLamparas * 0.50; //el descuento de las lamparas 

				precioBruto 	= importeLamparas - precioDescuento; // el precio con descuento, precio final

				document.getElementById('precioDescuento').value= precioBruto;
			}
							//PUNTO A TERMINA ACÁ.

			else if (cantidad==5&&marca=='ArgentinaLuz')

			{
				importeLamparas = cantidad * 35; //De acá sale el importe de las lamparas

				precioDescuento = importeLamparas * 0.40; //el descuento de las lamparas 

				precioBruto 	= importeLamparas - precioDescuento; // el precio con descuento, precio final

				document.getElementById('precioDescuento').value= precioBruto;

			}

			else if (cantidad==5&&marca!='ArgentinaLuz') //Se puede declarar sin !=


				{
				importeLamparas = cantidad * 35; //De acá sale el importe de las lamparas

				precioDescuento = importeLamparas * 0.30; //el descuento de las lamparas 

				precioBruto 	= importeLamparas - precioDescuento; // el precio con descuento, precio final

				document.getElementById('precioDescuento').value= precioBruto;

			}

								

								//PUNTO B TERMINA ACÁ.


			else if (cantidad==4&&(marca=='ArgentinaLuz'||marca=='FelipeLamparas'))
			
			{

				importeLamparas = cantidad * 35; //De acá sale el importe de las lamparas

				precioDescuento = importeLamparas * 0.25; //el descuento de las lamparas 

				precioBruto 	= importeLamparas - precioDescuento; // el precio con descuento, precio final

				document.getElementById('precioDescuento').value= precioBruto;
			}

			else if (cantidad==4)

			{	

				importeLamparas = cantidad * 35; //De acá sale el importe de las lamparas

				precioDescuento = importeLamparas * 0.20; //el descuento de las lamparas 

				precioBruto 	= importeLamparas - precioDescuento; // el precio con descuento, precio final

				document.getElementById('precioDescuento').value= precioBruto;
							 

			}

			///////////////// TERMINO PUNTO C ////////////////////

			else if (cantidad==3&&marca=='ArgentinaLuz')
		
			{

				importeLamparas = cantidad * 35; //De acá sale el importe de las lamparas

				precioDescuento = importeLamparas * 0.15; //el descuento de las lamparas 

				precioBruto 	= importeLamparas - precioDescuento; // el precio con descuento, precio final

				document.getElementById('precioDescuento').value= precioBruto;
							 

			}

			else if (cantidad==3&&marca=='FelipeLamparas')
			{

				importeLamparas = cantidad * 35; //De acá sale el importe de las lamparas

				precioDescuento = importeLamparas * 0.10; //el descuento de las lamparas 

				precioBruto 	= importeLamparas - precioDescuento; // el precio con descuento, precio final

				document.getElementById('precioDescuento').value= precioBruto;
							 

			}

			else if (cantidad==3)
			{

				importeLamparas = cantidad * 35; //De acá sale el importe de las lamparas

				precioDescuento = importeLamparas * 0.05; //el descuento de las lamparas 

				precioBruto 	= importeLamparas - precioDescuento; // el precio con descuento, precio final

				document.getElementById('precioDescuento').value= precioBruto;
							 

		}

						////////////// TERMINO PUNTO D ////////////

			if (precioBruto>=120)

			{
				ingresosBrutos = precioBruto * 0.10;

				precioBruto = precioBruto + ingresosBrutos;

				alert ('Usted debe pagar IIBB por un monto de ' + ingresosBrutos);

				
				document.getElementById('precioDescuento').value= precioBruto;

			


			}







				}



*/