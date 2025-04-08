#include<stdio.h>
#include<conio.h>
#include <stdlib.h>
#include<iostream>
using namespace std;
#define null 0
 struct node
{
  int data;
   node *next;
};
node *first,*tail,*temp,*ttemp,*p,*q,*r,*ptemp,*pttemp,
*ntemp,*nttemp;

void init()
{
 first=tail=temp=ttemp=null;
}
void addnode(int val)
{
  temp=first;
  while(temp->next!=first)
  {
  temp=temp->next;
  }
  ttemp=(node*)malloc(sizeof(node));
  ttemp->data=val;
  ttemp->next=first;
  temp->next=ttemp;
  tail=tail->next;
}
void createfirst(int val)
{
 first=(node*)malloc (sizeof(node));
  first->data=val;
  first->next=first;
  tail=first;
}
void swap_First_Last()
{
  ttemp=first;
  temp=first->next;
  while(ttemp->next->next!=first)
  {
    ttemp=ttemp->next;
  }
  tail->next=temp;
  ttemp->next=first;
  first->next=tail;

  node *newFirst = tail;
  node *newTail= first;
  first=newFirst;
  tail=newTail;
}
void swap_First_Second()
{
  temp=first->next;
  first->next=temp->next;
  temp->next=first;
  first=temp;
  tail->next=first;
}
void swap_SecondLast_Last()
{
  ttemp=temp=first;
  while (temp->next->next!=first)
  {
    ttemp=temp;
    temp=temp->next;
  }
  ttemp->next=tail;
  tail->next=temp;
  temp->next=first;
  tail=temp;
}
void Del_First()
{
  temp=first;
  first=first->next;
  free(temp);
  tail->next=first;
}
void Del_Last()
{
  temp=first;
  while(temp->next->next!=first)
  {
    temp=temp->next;
  }
  ttemp=tail;
  tail=temp;
  tail->next=first;
  free(ttemp);
}
void disp()
{
   temp=first;
   do{
    cout<<"\n"<<temp->data;
    temp=temp->next;
   } while(temp!=tail->next);
}
int main()
{
  int n,m;
  char i;
  //clrscr();
  printf("\nEnter data for first node :");
  scanf("%d",&n);
  createfirst(n);
  printf("\nFirst Node Created :\n");
  while(1)
  {
  printf("\nDo u Want to continue :");
  scanf(" %c",&i);
  if(i=='n' ||i=='N')
  break;
  printf("\n Enter Data for New Node :");
  scanf("%d",&n);
  addnode(n);

  }
  printf("\nThis Is Your Final List :");
  disp();
  
//   swap_First_Last();
//   cout<<"\nAfter swapinng First and last this is your final list :";
//   disp();
  // swap_First_Second();
  // cout<<"\nAfter swapinng First and second this is your final list :";
  // disp();
  // swap_SecondLast_Last();
  // cout<<"\nAfter swapinng second Last and last this is your final list :";
  // disp();

 }