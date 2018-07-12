
function mostrar()
{

		var largo;
		var ancho;
		var perimetro;


		largo = prompt ("Ingrese largo de un rectangulo");
		largo = parseInt (largo);
		ancho = prompt ("Ingrese ancho de un rectangulo");
		ancho = parseInt (ancho);


		perimetro = (2 * (ancho + largo));

		alert ('El perimetro es ' + perimetro);

}
