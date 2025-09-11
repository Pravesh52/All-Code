#include<stdio.h>
// #include<conio.h>

// int main()
// {
    //sum of two number

    // int p,n;
    // float r,si;
    // p=1000;
    // n=3;
    // r=8.5;
    
// interest 

    // si=p*n*r/100;
    // printf("%f\n",si);
    // return 0;

    // int i,j,k;
    // printf("Enter the number: ");
    // scanf("%d %d",&i,&j);
    // k=i+j;
    // printf("%d\n",k);
    // return 0;

//1.write a program to check is prime or not

//  int n,i;
//  printf("Enter the number: ");
//  scanf("%d",&n);

//  for(i=2;i<n;i++)
//  {
//     if(n%i==0)
//     {
//         printf("\n%d is not a prime",n);
//         break;
//     }
    
//  }
//  if(i==n)
//  {
//     printf("\n%d is a prime number",n);
//  }

// if(n%2==0)
// {
//     printf("%d is a not prime number",n);
// }else{
//     printf("%d is a prime number",n);
// }
//  return 0;


//factorial of a number simple 

// int n,i, fact=1;

// printf("Enter the number: ");
// scanf("%d",&n);

// for( i=1;i<=n;i++)
// {
//     fact=fact*i;
// }

// printf("\nFactorial of a number: %d",fact);
// return 0;

//factorial of a number using recursion


// int fact(int n) {
//     if (n <= 1) {   // Base case
//         return 1;
//     }
//     return n * fact(n - 1); // Recursive case
// }

// int main() {
//     int n = 5;
//     printf("Factorial of %d = %d\n", n, fact(n));
//     return 0;
// }

//Fibonacci Series using recursion
int fib(int n) {
    if (n == 0) return 0;   // Base case
    if (n == 1) return 1;   // Base case
    return fib(n - 1) + fib(n - 2); // Recursive case
}

int main() {
    int n = 6;
    printf("Fibonacci(%d) = %d\n", n, fib(n));
    printf("Fibonacci(%d)",n);
    return 0;
}







