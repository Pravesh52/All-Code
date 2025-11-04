#include<stdio.h>
int main()
{
    int n;
    printf("Enter the number: ");
    scanf("%d", &n);
  
     if(n%2==0)
     {
        printf("Even\n");
     }else{
        printf("odd\n");
     }
    
    return 0;
}
