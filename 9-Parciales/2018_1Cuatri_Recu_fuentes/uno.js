
function mostrar()
{
	var base;
	var altura;
	var perimetro;
	var superficie; 
	
	base = prompt ("Ingrese base del triangulo"); 
	base = parseInt (base);

	altura = prompt ("Ingrese altura del triangulo");
	altura = parseInt (altura);

	perimetro = base + base + base;
	superficie = base * altura / 2;

	alert ("El perimetro del triangulo es... " + perimetro + ' y su superficie es...' + superficie  )



	}
