/*Write a C++ code to implement a 
stack using an array. 
*/


#include <iostream>
using namespace std;


struct Node {
    int data;
    Node *next;
    Node *prev;
};

Node *head=NULL, *tail=NULL;

Node *createNode(int data)
{
    Node *n = new Node;
    n->data = data;
    n->prev = n->next = NULL;
    return n;
}
   
void appendNode(int data)
{
    Node *n = createNode(data);
    if(head == NULL && tail == NULL)
    {
        head = n;
        tail = n;
        return;
    }
    tail->next = n;
    n->prev = tail;
    tail = n;
}

void prependNode(int data)
{
    Node *n = createNode(data);
    if(head == NULL && tail == NULL)
    {
        head = n;
        tail = n;
        return;
    }
    head->prev = n;
    n->next = head;
    head = n;
}

void printFwd()
{
    Node *ptr = head;
    if(ptr==NULL)
    {
        cout << "Linked list is empty\n";
        return;
    }
    while(ptr!=NULL)
    {
        cout << ptr->data << " | ";
        ptr = ptr->next;
    }
    cout << endl;
}

void insertNode(int data, int pos)
{
    Node *n = createNode(data);
    if(pos==1)
    {
        prependNode(data);
        return;
    }
    Node *ptr = head;
    for(int i=1;i<pos-1 && ptr->next!=NULL;i++)
    {
        ptr=ptr->next;
    }
    n->next = ptr->next;
    n->prev = ptr;
    if(ptr->next!=NULL)
        ptr->next->prev = n;
    ptr->next = n;
    if(ptr==tail) {
        tail = n;
    }
}

void deleteNode(int pos)
{
    if(pos < 1) {
        cout << "Invalid Position" << endl;
        return;
    }
    Node *ptr = head;
    if(head==tail) {
        delete ptr;
        head = tail = nullptr;
        return;
    }
    
    for(int i=1;i<pos && ptr->next!=NULL;i++)
    {
        ptr=ptr->next;
    }
    
    if(ptr->prev == nullptr)
    {
        head = head->next;
        delete ptr;
        head->prev = nullptr;
        return;
    }
    
    if(ptr->next == nullptr)
    {
        tail = tail->prev;
        delete ptr;
        tail->next = nullptr;
        return;
    }
    
    ptr->prev->next = ptr->next;
    ptr->next->prev = ptr->prev;
    delete ptr;
}

int main()
{
    int arr[] = {10,20,30,40,50};
    for(int i=0;i<5;i++)
    {
        appendNode(arr[i]);
    }
    printFwd();
   
    insertNode(100,7);
    printFwd();
    
    deleteNode(6);
    printFwd();
    insertNode(45,10);
    printFwd();
}