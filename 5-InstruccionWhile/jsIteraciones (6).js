function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	
	while (contador<5)
	{	
		
		contador++;
		numero = prompt ('Ingrese un número');
		numero = parseInt (numero);
		acumulador += numero; //Sumo el numero 
		


	}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5; //muestro el promedio

}//FIN DE LA FUNCIÓN
// suma+=num || suma=suma+num

//banderas