function mostrar()
{

var sexo = prompt("ingrese f ó m .");

	while (sexo!='f'&&sexo!='m')
	{
		sexo = prompt ("ingrese f ó m .");
	}

	document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN


//Para validar se pone lo erroneopara que se pueda repetir la condición.