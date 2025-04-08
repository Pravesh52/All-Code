#include<stdio.h>
#include<conio.h>
#include<iostream>
#define max 5
using namespace std;
typedef struct stack
{
 int data[max];
 int topA,topB;
}s;
s s1,*p;
void init()
{
  p=&s1;
  p->topA=-1 ;
  p->topB=max ;
}
int EmptyA()
{
  if(p->topA==-1)
  return 1;
  else
  return 0;
}
int EmptyB()
{
  if(p->topB==max)
  return 1;
  else
  return 0;
}
int Full()
{
  if(p->topA+1==p->topB)
  return 1;
  else
  return 0;
}
void pushA(int x)
{
  if(Full()==1)
  return;
  p->topA++;
  p->data[p->topA]=x;
}
void pushB(int x)
{
  if(Full()==1)
  return;
  p->topB--;
  p->data[p->topB]=x;
}
int popA()
{
  int x;
  if(EmptyA()==1)
  return 0;
  x=p->data[p->topA];
  p->topA--;
  return x;
}
int popB()
{
  int x;
  if(EmptyB()==1)
  return 0;
  x=p->data[p->topB];
  p->topB++;
  return x;
}
int main()
{
init();
pushA(10);
pushA(40);
pushB(20);
pushB(30);
pushB(50);
cout<<" \nFROM A-"<<popA();
cout<<" \nFROM B-"<<popB();
cout<<" \nFROM B-"<<popB();
cout<<" \nFROM A-"<<popA();
cout<<" \nFROM B-"<<popB();
getch();
}
