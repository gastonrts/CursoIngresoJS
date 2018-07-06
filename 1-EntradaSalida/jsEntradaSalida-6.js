/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno = document.getElementById('numeroUno').value;
	numeroUno = parseInt (numeroUno); //transforma a la variable y la devuelve en forma de número

	numeroDos = document.getElementById('numeroDos').value; //doble click > CTRL D para reemplazar lo escrito en toda la linea
	numeroDos = parseInt (numeroDos);
	resultado = (numeroUno + numeroDos);
	alert (resultado); // signo "+" sirve tanto para concatenar como para sumar, si se para un texto se concantena

	//F12 > Source > Marco una nº de linea del código > ejecuto > step over next function call y se ejecuta linea x linea.
}

