#include<iostream>
#include<conio.h>
#include<stdio.h>
using namespace std;
int main()
{
    int a,*p,**q,***r,****s,*****t;
    int b,*u,**v,***w,****y,*****z;
    a=10;p=&a;q=&p;r=&q,s=&r;t=&s;

    printf("\n%u\n",p);
    

}