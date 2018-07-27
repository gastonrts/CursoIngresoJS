function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;
		while (true) //se crea un bucle infinito y lo paramos con un if {break;}
		}
			{
				numero = prompt ('Ingrese un número y una letra para salir');
				numero = parseInt (numero);

			if (isNaN(numero)) //si se ingresa una letra se para de pedir números // NaN es distinto a NaN
			{
				alert ('Ahora se sumarán los números y se mostrará el promedio');
				break;
				
			}
			contador ++;
			acumulador += numero;
			}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN

// 'continue' se para la ejecución y se repite la condición-no se ejecuta el codigo que esté debajo-. 'break' corta la ejecución y sigue con lo que está abajo.


/*
	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;
		while (true)
			{
				numero = prompt ('Ingrese un número y una letra para salir');
				numero = parseInt (numero);

			if (respuesta=='si') // también se puede hacer de esta manera y cuando se ingrese 'si' se deja de pedir números.
			{
				alert ('Ahora se sumarán los números y se mostrará el promedio');
				break;
				
			}
			contador ++;
			acumulador += numero;
			}
*/