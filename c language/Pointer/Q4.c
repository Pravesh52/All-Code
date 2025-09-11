//Pointer और Function

//👉 Call by Reference (address pass करना):

#include <stdio.h>
void change(int *n) {
    *n = *n + 10;
}
int main() {
    int x = 5;
    change(&x);
    printf("x = %d\n", x); // 15
    return 0;
}
