//Pointer और Array
#include<stdio.h>
int main(){
int arr[3] = {1, 2, 3};
int *p = arr;

printf("%d", *(p+1)); // 2
printf("%d", *(p+2));
printf("%d", *p);
}