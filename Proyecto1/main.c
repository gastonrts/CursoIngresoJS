#include <stdio.h>
#include <stdlib.h>

int main()
{   int numero1,numero2,numero3,mayor,menor;
    printf("Ingrese:");
    scanf("%d",&numero1);
    printf("Ingrese");
    scanf("%d",&numero2);
    printf("Ingrese");
    scanf("%d",&numero3);



    if (numero1>numero2||numero1>numero2)
    {
        printf("mayor:%d",mayor);
    }
    else
    {
        if (numero1<numero2||numero1<numero2)
        {
            printf ("menor:%d",menor);
        }
    }
    if (numero2>numero1||numero2>numero3)
    {
        printf ("mayor:%d",mayor);
    }
    else {
        if (numero2<numero1||numero2<numero3)
        {
            printf ("menor:%d",menor);
        }
    }
    if (numero3>numero1||numero3>numero2)
    {
        printf("mayor:%d",mayor);
    }
    else
    {
        if (numero3<numero1||numero3<numero2)
        {
            printf ("menor:%d",menor);
        }
    }



    system("pause"); //Para pausar la ejecuciòn

    return 0;
}

