function mostrar()
{

	var precio;
	var descuento;

	var descuentoDinero; //este es el descuento sin el precio.
	var precioConDescuento; //precio mas descuento.
	var iva; //ESTO ES EL IVA

	var precioFinal;

		precio = prompt ('Ingrese el precio');
		descuento = prompt ('Ingrese el descuento');

			precio = parseInt (precio);
			descuento = parseInt (descuento);

				descuentoDinero = ( precio * descuento / 100); // descuento del dinero

				precioConDescuento = precio - descuentoDinero; //precio + descuento

				iva = precio * 21 / 100; // esto es el IVA


	alert ('El descuento es de ' + descuentoDinero + ' El precio con descuento es ' + precioConDescuento + ' El IVA es ' + iva );

	// EL PRECIO FINAL CON PRECIO + DESCUENTO + IVA //

	precioFinal = (precioConDescuento + iva) ;


	document.getElementById('elPrecioFinal').value=precioFinal;






	
	







}
