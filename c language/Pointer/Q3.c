//Pointer to Pointer

#include <stdio.h>
int main() {
    int x = 50;
    int *p = &x;
    int **pp = &p;

    printf("x = %d\n", x);
    printf("*p = %d\n", *p);
    printf("**pp = %d\n", **pp);

    return 0;
}
