//Pointer Arithmetic

#include <stdio.h>
int main() {
    int arr[3] = {10, 20, 30};
    int *p = arr;

    printf("%d\n", *p);     // 10
    p++;
    printf("%d\n", *p);     // 20
    p++;
    printf("%d\n", *p);     // 30

    return 0;
}
