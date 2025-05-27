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
node *first,*temp,*ttemp,*p,*q,*r,*ptemp,*pttemp,
*ntemp,*nttemp;

void init()
{
 first=temp=ttemp=null;
}
void addnode(int val)
{
  temp=first;
  while(temp->next!=null)
  {
  temp=temp->next;

  }
  ttemp=(node*)malloc(sizeof(node));
  ttemp->data=val;
  ttemp->next=null;
  temp->next=ttemp;
}
void createfirst(int val)
{
 first=(node*)malloc (sizeof(node));
  first->data=val;
  first->next=null;
}
void disp()
{
 temp=first;
 while(temp!=null)
 {

   printf("\n%d",temp->data);
   temp=temp->next;
 }
}
void sum()
{
  int S=0;
  temp=first;
  while(temp!=NULL)
  {
    S=S+temp->data;
    temp=temp->next
    ;
  }
 cout<< "\nsum is :" <<S;
}
void NodebeforeFirst(int val)
{
   temp=(node*) malloc(sizeof(node));
  temp->data=val;
  temp->next=first;
     first=temp;
}
void NodebeforeLast(int val)
{
  temp=first;
  while(temp->next!=null)
  {
    ttemp=temp;
    temp=temp->next;
  }
  p=(node*) malloc(sizeof(node));
  p->data=val;
  ttemp->next=p;
  p->next=temp;
}
void NodeAfterLast(int val)
{
  
  temp=first;
  while(temp!=null)
  {
    ttemp=temp;
    temp=temp->next;
  }
  p=(node*) malloc(sizeof(node));
  p->data=val;
  ttemp->next=p;
  p->next=null;
}
void NodeAfter_data(int val,int data)
{
  temp=first;
  while(temp->data!=data)
  {
    temp=temp->next;
  }
  ttemp=temp->next;
  p=(node*) malloc(sizeof(node));
  p->data=val;
  temp->next=p;
  p->next=ttemp;
}
void NodeBefore_data(int val,int data)
{
  ttemp=temp=first;
  while(temp->data!=data)
  {
    ttemp=temp;
    temp=temp->next;
  }
  p=(node*) malloc(sizeof(node));
  p->data=val;
  ttemp->next=p;
  p->next=temp;
}
void Del_First()
{
  temp=first;
  first=temp->next;
  temp->next=null;
  free(temp);
}
void Del_Last()
{
  temp=first;
  while(temp->next!=NULL)
  {
    ttemp=temp;
    temp=temp->next;
  }
  ttemp->next=null;
  free(temp);
}
void Del_AfterData(int data)
{
  temp=first;
  while(temp->data!=data)
  {
    temp=temp->next;
  }
  p=temp->next;
  q=p->next;
  temp->next=q;
  p->next=null;
  free(p);
}
void Del_BeforeData(int data)
{
  ttemp=temp=first;
  while(temp->data!=data)
  {
    p=ttemp;
    ttemp=temp;
    temp=temp->next;
  }
  p->next=temp;
  ttemp->next=null;
  free(ttemp);
}
void Del_PresentPosNode(int pos)
{
  temp=first;
  for(int i=1; i<pos-1; i++)
  {
    temp=temp->next;
  }
  p=temp->next;
  temp->next=p->next;
  p->next=null;
  free(p);
}
void swap_FirstAndSecond()
{
   temp=first;
   temp=temp->next;
   first->next=temp->next;
   temp->next=first;
   first=temp;
} 
void swap_FirstAndLast()
{
  temp=first;
  while(temp->next!=null)
  {
    ttemp=temp;
    temp=temp->next;
  }
  temp->next=first->next;
  first->next=null;
  ttemp->next=first;
  first=temp;
}
void swap_SecondLastAndLast()
{
  temp=first;
  while(temp->next!=null)
  {
    p=ttemp;
    ttemp=temp;
    temp=temp->next;
  }
  temp->next=ttemp;
  p->next=temp;
  ttemp->next=null;
}
void swap_Mth_And_Nth(int m,int n)
{
 int i,j;
 i=j=1;
 while(i<m)
 {
  ptemp=temp;
  temp=temp->next;
  i++;
 }
 while(j<n)
 {
  pttemp=ttemp;
  ttemp=ttemp->next;
  j++;
 }
 ntemp=temp->next;
 nttemp=ttemp->next;

 ptemp->next=ttemp;
 ttemp->next=ntemp;

 pttemp->next=temp;
 temp->next=nttemp;
}
int main()
{
  int n,m,x,y;
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
  if(i=='n' || i=='N') 
  break;
  printf("\n Enter Data for New Node :");
  scanf("%d",&n);
  addnode(n);
  }
  printf("\nThis Is Your Final List :");
  disp();
  // sum();
  // cout<<"\nDo You Want To Add Node Before First Node : ";
  // cin>>i;
  // if(i=='y' || i=='Y') 
  // {
  // int data;
  // cout<<"Enter Data for First Node: ";
  // cin>>data;
  // NodebeforeFirst(data);
  // }
  // printf("\nThis Is Your Final List After adding Node before First Node:");
  // disp();
  // cout<<"\nDo You Want To Delete a node at the given position : ";
  // cin>>i;
  // int pos;
  // if(i=='y' || i=='Y') 
  // {
  //   cout<<"Enter Positon for Delete Node: ";
  //   cin>>pos;
  //   Del_PresentPosNode(pos);
  // } 
  //swap_FirstAndSecond();
  // swap_FirstAndLast();
//  swap_SecondLastAndLast();
  cout<<"\nEnter position m : ";
  cin>>x;
  cout<<"\nEnter position n: ";
  cin>>y;
  swap_Mth_And_Nth(3,4);
  printf("\nThis Is Your Final List After swaping second last and last: ");
  disp();
}
