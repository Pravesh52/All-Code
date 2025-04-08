#include<iostream>
using namespace std;
#define max 5

struct Queue{
    int data[max];
    int front,rear;

};
Queue q,*p,*temp;

void init(){
    p=&q;
    p->front = p->rear = -1;
}
int isEmpty(){
    if(p->front==-1)
    return 1;
   else
   return 0;
}
int isFull(){
    if(p->rear==max-1)
    return 1;
    else 
     return 0;
}
void EnQ(int data)
{
    if (isFull()){
        return;
    }
    if(p->front == -1)
    {
        p->front = p->rear = 0;
    }else{
        p->rear++;
        p->data[p->rear]= data;
    }
}
int DeQ(){
    int x;
    if (isEmpty()){
        return 0;
    }
    x=p->data[p->front];
    if(p->front == p->rear){
        p->front = p->rear = -1;
    }else{
        p->front++;
        return x;
    }
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
