function mostrar()
{

	var contador=0;
	// declarar variables
	var numero;
	var maximo;
	var minimo;
/*	maximo = -9999;
	minimo = +9999;*/
	var respuesta='si';

	while(respuesta!='no')
	{
			contador ++;

			numero = prompt ('Ingrese un número ' + contador);
			numero = parseInt (numero);

			if (contador==1)
			{
				maximo = numero;
				minimo = numero;
			}
			if (numero>maximo)
			{
				maximo = numero; //si numero es mayor a maximo, maximo pasar a valer lo que vale el numero.
			}
			if (numero<minimo)
			{
				minimo =numero;
			}
			respuesta = prompt ('¿Queres continuar?');
			if (isNaN(numero))
			{
			alert ('Ingreso un número');
			numero = prompt ('Ingrese un número ' + contador);
			numero = parseInt (numero);
			}

			respuesta = prompt ('¿Querés continuar?'); // revisar y cambiar para que al ingresar una letra se deje de ejecutar.
	
	}

	document.getElementById('maximo').value = maximo;
	document.getElementById('minimo').value = minimo;




}//FIN DE LA FUNCIÓN
/*
// EJERRCICIO 12 DEL TP
// bandera para poner un contador // if (contador==0){
contador++
maximo=numero;
minimo=numero;
}
else {
	if (numero>maximo)
	maximo = numero;
		}
	if (numero<minimo)
	{
	minimo = numero;
	}






*/