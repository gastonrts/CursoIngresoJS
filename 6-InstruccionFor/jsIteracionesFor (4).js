function mostrar()
{
	var repeticiones;
	var contador = 0;


		for (;;)
	{
		repeticiones = prompt ('Ingrese un número o "break" para cortar la ejecución');

		contador++;
		if (repeticiones=='break')
		{	
			break;
		}
	}


}//FIN DE LA FUNCIÓN