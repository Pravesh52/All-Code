#include<stdio.h>
#include<conio.h>
#include<iostream>
#define max 5
using namespace std;

typedef struct Queue
{
    int data[max];
    int front,rear;
}s;

s s1,*p;

void init()
{
    p=&s1;
    p->front=p->rear =  max-1;
} 

int empty()
{
    if(p->front == p->rear)
    return 1;
    else
    return 0;
}
 
int full()
 {
    int nxt_rear;
    if(p->rear == max-1)
    nxt_rear=0;
    else
     nxt_rear=p->rear+1;
    if(nxt_rear==p->front)
    return 1;
    else  
    return 0;
}

int EnQ(int x)
{
    if(full()==1)
    return 0;
    if(p->rear == max-1)
    p->rear=0;
    else
    p->rear = p->rear+1;
    p->data[p->rear]=x;
}

int DeQ()
{
    int x;
    if(empty()==1)
    return -1;
    if(p->front == max-1)
    p->front =0;
   else
    p->front=p->front+1;
    x=p->data[p->front];
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
    cout<<DeQ()<<"\n ";
    cout<<DeQ()<<"\n ";
    cout<<DeQ()<<"\n ";
    cout<<DeQ()<<"\n ";
    cout<<DeQ()<<"\n ";
}