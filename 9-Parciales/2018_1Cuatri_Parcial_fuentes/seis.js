function mostrar()
{
	var laHora;
	laHora = document.getElementById('laHora').value;

		switch (laHora)
			{
				case laHora:
				if (laHora>=6&&laHora<=11)
					{
						alert ('Es de mañana.');
					}
				else if (laHora>=12&&laHora<=19)
					{
						alert ('Es de tarde.');
					}
				else if (laHora>20&&<24)
					{
						alert ('Hora de dormir.')	
					}
					break;

			}
}
