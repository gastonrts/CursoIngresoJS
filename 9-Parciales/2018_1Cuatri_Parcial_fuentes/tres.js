function mostrar()
{
	var precio;
	var descuento;
	var preciofinal;

	precio = prompt ('Ingrese el precio');
	descuento = prompt ('Ingrese el % de descuento');

	precio = parseInt (precio);
	descuento = parseInt (descuento);

	descuento = (precio * descuento / 100);
	preciofinal = precio - descuento;

	document.getElementById ('elPrecioFinal').value=preciofinal;

}
