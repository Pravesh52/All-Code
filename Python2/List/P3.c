// #include<stdio.h>

// int main()
// {
//     int a[] = {1, 2, 3, 4};
//     int n = sizeof(a)/sizeof(a[0]);
//     int runsum[n];
//     int total = 0;
//     int i,j;
//     for( i = 0; i < n; i++)
//     {
//         total += a[i];
//         runsum[i] = total;
//     }

    
//     for( j = 0; j < n; j++)
//     {
//         printf("%d ", runsum[j]);
//     }

//     return 0;
// }


#include <stdio.h>

int main()
{
    int a[] = {1, 0, 2, 3};
    int n = sizeof(a) / sizeof(a[0]);
    int result[n];
    int j = 0;
    int i;

    for ( i = 0; i < n; i++)
    {
        if (a[i] != 0)
        {
            result[j++] = a[i];
        }
    }
    while (j < n)
    {
        result[j++] = 0;
    }

    for ( i = 0; i < n; i++)
    {
        printf("%d ", result[i]);
    }

    return 0;
}

