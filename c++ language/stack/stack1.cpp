#include<stdio.h>
#include<conio.h>
#include<iostream>
#define max 5
using namespace std;
typedef struct stack
{
 int data[max];
 int top;
}s;
s s1,*p;
void init()
{
  p=&s1;
  p->top=-1 ;
}
int Empty()
{
  if(p->top==-1)
  return 1;
  else
  return 0;
}
int Full()
{
  if(p->top==max-1)
  return 1;
  else
  return 0;
}
void push(int x)
{
  if(Full()==1)
  return;
  p->top=p->top+1;
  p->data[p->top]=x;
}
int pop()
{
  int x;
  if(Empty()==1)
  return 0;
   x=p->data[p->top];
   p->top=p->top-1;
   return x;
}
int main()
{
init();
push(10);
push(20);
push(30);
push(40);
cout<<" \n"<<pop();
cout<<" \n"<<pop();
cout<<" \n"<<pop();
cout<<" \n"<<pop();
getch();
}
