//Address (&) और Dereference (*) Operator

#include <stdio.h>
int main() {
    int x = 10;
    int *p;

    p = &x;   // p में x का address store

    printf("x value: %d\n", x);
    printf("x  address: %p\n", &x);
    printf("Pointer p  address: %p\n", p);
    printf("Pointer p  value: %d\n", *p);

    return 0;
}
