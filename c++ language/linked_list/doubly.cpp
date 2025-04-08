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
   node *previous;
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
  ttemp->previous=temp;   
  ttemp->data=val;
  ttemp->next=null;
  temp->next=ttemp;
}
void createfirst(int val)
{
 first=(node*)malloc (sizeof(node));
  first->previous=null;
  first->data=val;
  first->next=null;
}
void sum()
{
  int S=0;
  temp=first;
  while(temp!=NULL)
  {
    S=S+temp->data;
    temp=temp->next;
  }
 cout<< "\nsum is :" <<S;
}
void Add_before_First(int val)
{
 temp=(node*) malloc(sizeof(node));
  temp->data=val;
  temp->next=first;
 temp->previous=null;
 first->previous=temp;
 first=temp;
}
void Add_before_Last(int val)
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
  p->previous=ttemp;
  temp->previous=p;
}
void Add_After_data(int x,int val)
{
  temp=first;
  while(temp->data!=x)
  {
    temp=temp->next;
  }
  ttemp=temp->next;
  p=(node*) malloc(sizeof(node));
  p->data=val;
  temp->next=p;
  p->next=ttemp;
  p->previous=temp;
  ttemp->previous=p;
}
void Add_before_data(int x,int val)
{
    ttemp=temp=first;
  while(temp->data!=x)
  {
    //ttemp=temp;
    temp=temp->next;
  }
  ttemp=temp->previous;
  p=(node*) malloc(sizeof(node));
  p->data=val;
  ttemp->next=p;
  p->next=temp;
  p->previous=ttemp;
  temp->previous=p;
}
void Del_First()
{
  temp=first;
  first=temp->next;
  first->previous=null;
  temp->next=null;
  free(temp);
}
void Del_Last()
{
  temp=first;
  while(temp->next!=null)
  {
    ttemp=temp;
    temp=temp->next;
  }
  ttemp->next=null;
  temp->previous=null;
  free(temp);
}
void Del_After_data(int x)
{
   temp=first;
  while(temp->data!=x)
  {
    temp=temp->next;
  }
  p=temp->next;
  q=p->next;
  temp->next=q;
  q->previous=temp;
  p->next=null;
  p->previous=null;
  free(p);
}
void Del_before_data(int x)
{
   ttemp=temp=first;
  while(temp->data!=x)
  {
    p=ttemp;
    ttemp=temp;
    temp=temp->next;
  }
  p->next=temp;
  temp->previous=p;
  ttemp->next=null;
  ttemp->previous=null;
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
  q=p->next;
  temp->next=q;
  q->previous=temp;
  p->next=null;
  p->previous=null;
  free(p);
}
void swap_FirstAndSecond()
{
   temp=first;
   temp=temp->next;
   p=temp->next;
   first->next=p;
   temp->next=first;
   temp->previous=null;
   first->previous=temp;
   p->previous=first;
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
  temp->previous=null;
  first->next=null;
  first->previous=ttemp;
  ttemp->next=first;
  first=temp;
}
void swap_SecondLastAndLast()
{
  temp=first;
  while(temp->next->next!=null)
  {
    ttemp=temp;
    temp=temp->next;
  }
  p=temp->next;
  ttemp->next=p;
  p->previous=ttemp;
  p->next=temp;
  temp->previous=p;
  temp->next=null;
}
void swap_Mth_And_Nth(int m,int n)
{
 ttemp=temp=first;
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
 ttemp->previous=ptemp;
 ttemp->next=ntemp;

 pttemp->next=temp;
 temp->previous=pttemp;
 temp->next=nttemp;
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
  sum();
  // cout<<"\nDo You Want To Add Node Before First Node : ";
  // cin>>i;
  // if(i=='y' || i=='Y') 
  //  {
  // int data;
  // cout<<"Enter Data for New Node: ";
  // cin>>data;
  // Add_before_First(data);
  // }
  // printf("\nThis Is Your Final List After adding Node before First Node:");
  // disp();
  //  cout<<"\nDo You Want To Add Node Before Last Node : ";
  // cin>>i;
  // if(i=='y' || i=='Y') 
  //  {
  // int data;
  // cout<<"Enter Data for New Node: ";
  // cin>>data;
  // Add_before_Last(data);
  // }
  // printf("\nThis Is Your Final List After adding Node before Last Node:");
  // disp();
  // cout<<"\nDo You Want To Add Node After the given data : ";
  // cin>>i;
  // if(i=='y' || i=='Y') 
  //  {
  // int data,value;
  // cout<<"Enter data: ";
  // cin>>data;
  // cout<<"Enter the value of new node: ";
  // cin>>value;
  // Add_After_data(data,value);
  // }
  // printf("\nThis Is Your Final List After adding Node After the given Data: ");
  // disp();
  // cout<<"\nDo You Want To Add Node before the given data : ";
  // cin>>i;
  // if(i=='y' || i=='Y') 
  //  {
  // int data,value;
  // cout<<"Enter data: ";
  // cin>>data;
  // cout<<"Enter the value of new node: ";
  // cin>>value;
  // Add_before_data(data,value);
  // }
  // printf("\nThis Is Your Final List After adding Node before the given Data: ");
  // disp();
  //  cout<<"\nDo You Want To Delete the first Node : ";
  // cin>>i;
  // if(i=='y' || i=='Y') 
  //  {
  // Del_First();
  // }
  // printf("\nThis Is Your Final List After Deleting The First Node: ");
  // disp();
  //  cout<<"\nDo You Want To Delete the Last Node : ";
  // cin>>i;
  // if(i=='y' || i=='Y') 
  //  {
  // Del_Last();
  // }
  // printf("\nThis Is Your Final List After Deleting The Last Node: ");
  // disp();
  //  cout<<"\nDo You Want To Delete the Node After Given data : ";
  // cin>>i;
  // if(i=='y' || i=='Y') 
  //  {
  //   int data;
  // cout<<"Enter The data: ";
  // cin>>data;
  // Del_After_data(data);
  // }
  // printf("\nThis Is Your Final List After Deleting The  Node After the data: ");
  // disp();
  // cout<<"\nDo You Want To Delete the Node before Given data : ";
  // cin>>i;
  // if(i=='y' || i=='Y') 
  //  {
  //   int data;
  // cout<<"Enter The data: ";
  // cin>>data;
  // Del_before_data(data);
  // }
  // printf("\nThis Is Your Final List After Deleting The  Node before the data: ");
  // disp();
  //  cout<<"\nDo You Want To Delete the present position Node : ";
  // cin>>i;
  // if(i=='y' || i=='Y') 
  //  {
  //   int position;
  // cout<<"Enter The position Node: ";
  // cin>>position;
  // Del_PresentPosNode(position);
  // }
  // printf("\nThis Is Your Final List After Deleting The  Given Position Node: ");
  // disp();
  //  cout<<"\nDo You Want To Swap First And second node: ";
  // cin>>i;
  // if(i=='y' || i=='Y') 
  //  {
  //   swap_FirstAndSecond();
  // }
  // printf("\nThis Is Your Final List After swaping the first and second node: ");
  // disp();
  //  cout<<"\nDo You Want To Swap First And last node: ";
  // cin>>i;
  // if(i=='y' || i=='Y') 
  //  {
  //   swap_FirstAndLast();
  // }
  // printf("\nThis Is Your Final List After swaping the first and Last node: ");
  // disp();
  //  cout<<"\nDo You Want To Swap second Last And Last node: ";
  // cin>>i;
  // if(i=='y' || i=='Y') 
  //  {
  //   swap_SecondLastAndLast();
  // }
  // printf("\nThis Is Your Final List After swaping the second Last and Last node: ");
  // disp();
  cout<<"\nDo You Want To Swap Mth And Nth node: ";
  cin>>i;
  if(i=='y' || i=='Y') 
   {
    int x,y;
    cout<<"Enter the Mth Node: ";
    cin>>x;
    cout<<"Enter the Nth Node: ";
    cin>>y;
    swap_Mth_And_Nth(x,y);
  }
  printf("\nThis Is Your Final List After swaping the Mth and Nth node: ");
  disp();
}