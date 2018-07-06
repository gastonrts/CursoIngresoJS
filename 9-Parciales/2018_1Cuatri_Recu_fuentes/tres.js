function mostrar()
{

	var precio;
	var descuento;
	var precioDescuento;
	var precioConDescuento;
	
	precio = prompt ('Ingrese el precio');
	precio = parseInt (precio);

	descuento = prompt ('Ingrese el % de descuento');
	descuento = parseInt (descuento);

	precioDescuento = precio * descuento / 100;
	precioConDescuento = precio * descuento / 100 + precio;
	




	alert ("El descuento en dinero es" + preciodescuento + ', el precio con descuento es' + precioConDescuento +);








}
