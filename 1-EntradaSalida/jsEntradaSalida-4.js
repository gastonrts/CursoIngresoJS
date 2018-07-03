/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombre;
	nombre = prompt ("Ingrese su nombre")
	document.getElementById("elNombre").value= nombre;	
//	document.getElementById("elNombre").value=nombre; MUESTRO EL DATO
//  nombre =	document.getElementById("elNombre").value;	PIDO EL DATO

	

}

