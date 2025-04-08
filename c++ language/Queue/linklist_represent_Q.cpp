#define null 0
#include<iostream>
#include<stdlib.h>
#include<stdio.h>
#include<conio.h>

typedef struct lQueue
{
    int data;
    struct lQueue *next;
}lq;
lq *front,*rear,*temp;
void init()
{
    rear = front = null;
}

void EnQ(int x)
{
    temp=(lq*)malloc(size of (lq));
    if(temp==null)
     return;
    temp ->data = x;
    temp ->next = null;
    if(rear == null)
    {
        rear=front=temp;
    }
    else{
        rear->next=temp;
        rear=temp;
    }
}

int DeQ()
{
    int x;
    if(front==null)
    return 0;
    temp = front;
    if(front==rear)
    front=rear=null;
    else
    front=front->next;
   x=temp->data;
   temp->next = null;
   free(temp);
   return x;

}

int main()
{
    init();
    EnQ(10);
    EnQ(20);
    EnQ(30);
    EnQ(40);
    EnQ(50);
    printf("\n %d",DeQ());
    printf("\n %d",DeQ());
    printf("\n %d",DeQ());
    printf("\n %d",DeQ());
    getch();
}