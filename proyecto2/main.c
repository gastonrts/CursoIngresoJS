#include <stdio.h>
#include <stdlib.h>

int main()
{
    int contador = 0;
    int respuesta = 0;
    int numero;

    while (true)
    {
        printf("Ingrese:");
        scanf("%d",&numero);
        respuesta = printf ("Desea continuar?");
        contador++;
    }

    return 0;
}
