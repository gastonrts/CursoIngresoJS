/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var sueldo;
	var resultado;

	sueldo = document.getElementById('importe').value;
	sueldo = parseInt (sueldo);

	document.getElementById('resultado').value = sueldo * 25 / 100 ;

}
