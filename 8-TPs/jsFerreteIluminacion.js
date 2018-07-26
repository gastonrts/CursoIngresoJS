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

	var	cantidad;

	var importeLamparas = 35;

	var precioDescuento;

	var ingresosBrutos;

	var marca;

	cantidad 	=	document.getElementById('Cantidad').value;
	cantidad 	= 	parseInt (cantidad);
	marca 		=	document.getElementById('Marca').value;
					document.getElementById('precioDescuento').value = precioDescuento;
	importeLamparas = cantidad * 35;

	if (cantidad>=6) //PUNTO A

			{
				precioDescuento = 0.50;
			}		//PUNTO A

					//PUNTO B
		else if (cantidad==5)
			{
		switch (marca)
				{
			case 'ArgentinaLuz':
					precioDescuento = 0.60;
					break;
			default:
					precioDescuento = 0.70;
				}
			}

					//PUNTO B

					//PUNTO C
		else if (cantidad==4)
			{
			switch (marca)
				{
			case 'ArgentinaLuz':
			case 'FelipeLamparas':
				precioDescuento = 0.75;
				break;
			default:
				precioDescuento = 0.80;
				}
			}

					//PUNTO C

					//PUNTO D
		else if (cantidad==3) 
			{		
			switch (marca)
				{
			case 'ArgentinaLuz':
						precioDescuento = 0.85;
						break;
			case 'FelipeLamparas':
						precioDescuento = 0.90;
						break;
			default:
						precioDescuento = 0.95;
						break;
				}
			}	
		else 
			{

			}
					//PUNTO D

					//PUNTO E
		if (precioDescuento>=120) //PUNTO E

			{
				ingresosBrutos = precioDescuento * 0.10;

				ingresosBrutos = precioDescuento + ingresosBrutos;

				alert ('Usted debe pagar IIBB por un monto de ' + ingresosBrutos);
			}

			precioDescuento = importeLamparas * precioDescuento;
			document.getElementById('precioDescuento').value = precioDescuento;

		}
	

		
				
	





/* //switch solo. Empieza
	var	cantidad;

	var importeLamparas = 35;

	var precioDescuento;

	var ingresosBrutos;

	var marca;

				cantidad 	= document.getElementById('Cantidad').value;
				cantidad = parseInt (cantidad); //tengo que parsearlo después de ingresar la cantidad

				marca 		= document.getElementById('Marca').value;


				importeLamparas = cantidad * 35;


		switch (cantidad)
				{
			case 1:
					precioDescuento = importeLamparas * 1
					break;
			case 2:
			  	  precioDescuento = importeLamparas * 1
			  	  break;
			case 3: 
			  		switch (marca)
				{
			case 'ArgentinaLuz':
					precioDescuento = importeLamparas * 0.85
					break;
			case 'FelipeLamparas':
					precioDescuento = importeLamparas * 0.90
					break;
			default:
					precioDescuento = importeLamparas * 0.95
					break;
			  		} // SWITCH PARA EL PUNTO D
			  		break;
			case 4:
			  			switch (marca)
					{
			case 'ArgentinaLuz':
			case 'FelipeLamparas':
					precioDescuento = importeLamparas * 0.75
					break;
			default:
					precioDescuento = importeLamparas * 0.80
					break;
					} // SWITCH PARA EL PUNTO C 
			case 5:
					switch (marca)
					{
			case 'ArgentinaLuz':
					precioDescuento = importeLamparas * 0.60
					break;
			default:
					precioDescuento = importeLamparas * 0.70
					break;
					} // SWITCH PARA EL PUNTO B
			case 6:
					precioDescuento = importeLamparas * 0.50
					break;



					}
			document.getElementById('precioDescuento').value = precioDescuento;
 					}
		*/ //switch solo termina

		/* //solo if empieza

	var cantidad; //cantidad de lamparas

	var importeLamparas = 35;	// importe de = La cantidad * 35 (precio de las lamparas)

	var precioDescuento;   	//Precio final con descuento

	var ingresosBrutos;		//Cuando pasa de 120 $
 
	var marca;	//la marca 'ArgentinaLuz', etc


	cantidad = document.getElementById('Cantidad').value; //Ingreso la cantidad de lamparas.
	cantidad = parseInt (cantidad);

	marca = document.getElementById('Marca').value;
	importeLamparas = cantidad * 35; //De acá sale el importe de las lamparas

		if (cantidad>=6) //PUNTO A

			{
				precioDescuento = importeLamparas * 0.50; //el descuento de las lamparas 
			}
							//PUNTO A TERMINA ACÁ.

			else if (cantidad==5&&marca=='ArgentinaLuz')

			{
				precioDescuento = importeLamparas * 0.60; //el descuento de las lamparas 
			}

			else if (cantidad==5&&marca!='ArgentinaLuz') //Se puede declarar sin !=

			{
				precioDescuento = importeLamparas * 0.70; //el descuento de las lamparas 
			}
								//PUNTO B TERMINA ACÁ.
			else if (cantidad==4&&(marca=='ArgentinaLuz'||marca=='FelipeLamparas'))
			
			{
				precioDescuento = importeLamparas * 0.75; //el descuento de las lamparas 
			}

			else if (cantidad==4)

			{	
				precioDescuento = importeLamparas * 0.80; //el descuento de las lamparas 
			}

			///////////////// TERMINO PUNTO C ////////////////////

			else if (cantidad==3&&marca=='ArgentinaLuz')
		
			{
				precioDescuento = importeLamparas * 0.85; //el descuento de las lamparas 
			}

			else if (cantidad==3&&marca=='FelipeLamparas')
			{

				precioDescuento = importeLamparas * 0.90; //el descuento de las lamparas 
			}

			else if (cantidad==3)
			{
				precioDescuento = importeLamparas * 0.95; //el descuento de las lamparas 
			}

						////////////// TERMINO PUNTO D ////////////

			if (precioDescuento>=120)

			{
				ingresosBrutos = precioDescuento * 0.10;

				ingresosBrutos = precioDescuento + ingresosBrutos;

				alert ('Usted debe pagar IIBB por un monto de ' + ingresosBrutos);
			}
			document.getElementById('precioDescuento').value= precioDescuento;

			}

		*/ // SOLO IF. Termina acá

		/* // Switch + if. Empieza
	var	cantidad;

	var importeLamparas = 35;

	var precioDescuento;

	var ingresosBrutos;

	var marca;


	cantidad = document.getElementById('Cantidad').value;
	cantidad = parseInt (cantidad);

	marca 	 = document.getElementById('Marca').value;
	importeLamparas = cantidad  * 35

		switch (cantidad)
		{	case 1:
			case 2:

				if (cantidad<3)
					{
						precioDescuento = importeLamparas * 1;
					}
				break;
		
			case 3: //punto D INICIA
				if (marca=='ArgentinaLuz')
					{
						precioDescuento = importeLamparas * 0.85;
					}			
				else if (marca=='FelipeLamparas')
					{
						precioDescuento = importeLamparas * 0.90;
					}
			else 
					{
						precioDescuento = importeLamparas * 0.95;
					} //PUNTO D TERMINA.
				break;

			case 4:
				if (marca=='ArgentinaLuz'||marca=='FelipeLamparas')
					{
						precioDescuento = importeLamparas * 0.75;
					}	
				
			else
					{
						precioDescuento = importeLamparas * 0.80;
					}
				break;

			case 5:
				if (marca=='ArgentinaLuz')
					{
						precioDescuento = importeLamparas * 0.60;
					}
				else 
					{
						precioDescuento = importeLamparas * 0.70;
					}
				break;

			case 6:
					if (cantidad==6)
					{
						precioDescuento = importeLamparas * 0.50;
					}
				switch (precioDescuento)
				{
					case 1:
					if (precioDescuento>=120)
					{
						precioDescuento =
					}
					
					}

					}
			document.getElementById('precioDescuento').value = precioDescuento;
*/ //switch + if termina.


	// PARCIAL 1 - 3 4 - 5 ---> 4 Hacer con if, 5 hacer con switch y al revés
	// RECUPERATORIO 1 - 3 4 - 5 ---> 4 Hacer con if, 5 hacer con switch y al revés
	//f.iluminación: Hacer con if, con if que tienen switch, con switch que tienen if y sólo switch