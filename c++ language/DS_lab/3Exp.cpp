/*Write a C++ code to insert to and 
delete node from a Singly Linked 
List. 
*/


/*Implementation of a Single Linked List (SLL)*/
#include <iostream>
using namespace std;

struct Node {
    int data;
    Node *next;
};

//Global head pointer of the SLL
Node *head = nullptr;

//Count total Nodes in SLL
int countNode(Node *ptr) {
    int count=0;
    while(ptr!=nullptr) {
        count++;
        ptr = ptr->next;
    }
    return count;
}

//Inserting a node at the beginning
void insertAtBeginning(Node *ptr, int num) {
    //Create a new node
    Node *n = new Node;
    n->data = num;
    n->next = nullptr;
    
    if(head==NULL) { //if the SLL is empty 
        head = n; //make the new node as the head node
    } else { // if the SLL is not empty
        n->next = head; //make the new node point head
        head = n; //head should now point to newly added node
    }
}

//Inserting a node at a given position
void insertAtPosition(Node *ptr, int pos, int num) {
    //Count total nodes in SLL
    int count = countNode(ptr);
    //Check if the position given is invalid
    if(pos>count+1 || pos < 1) {
        cout << "Invalid position - " << pos << endl;
        return;
    }
    //Create a new node
    Node *n = new Node;
    n->data = num;
    n->next = nullptr;
    //if pos = 1, insert at the beginning
    if(pos==1) {
        insertAtBeginning(ptr, num);
    } else { // Traverse to the node just before the given position
        for(int i=1;i<pos-1;i++) {
            ptr = ptr->next;
        } 
        if(ptr!=nullptr) { // Insert the node at the given position
            n->next = ptr->next;
            ptr->next = n;
        }
    }
}

//Appending a node in a linked list
void appendNode(Node *ptr, int num) {
    Node *n = new Node;
    n->data = num;
    n->next = nullptr;
    if(head==NULL) { //if the SLL is empty 
        head = n; //make the new node as the head node
    } else {
        while(ptr->next!=nullptr) {
            ptr = ptr -> next;
        }
        ptr->next = n;
    }
}

//Deleting a node at a given position
void deleteNode(Node *ptr, int pos) {
    //Count total nodes in SLL
    int count = countNode(ptr);
    //Check if the position given is invalid
    if(pos>count || pos < 1) {
        cout << "Invalid position - " << pos << endl;
        return;
    }
    //if pos = 1, shift the head to next node and delete the head node
    if(pos==1) {
        head = head->next;
        delete ptr;
    } else { // Traverse to the node just before the given position
        for(int i=1;i<pos-1;i++) {
            ptr = ptr->next;
        }
        Node *temp = ptr->next; //make temp point to the node to be deleted
        ptr->next = temp->next;
        delete temp;
    }
}

//Displaying a linked list
void show(Node *ptr) {
    while(ptr!=nullptr) {
        cout << ptr->data << " ";
        ptr = ptr->next;
    }
    cout << endl;
}

int main()
{
    insertAtBeginning(head,3);
    insertAtBeginning(head,4);
    insertAtBeginning(head,5);
    
    insertAtPosition(head,2,10);
    
    insertAtPosition(head,22,12);
    
    show(head);
    
    deleteNode(head,2);
    show(head);
    
    appendNode(head,2);
    appendNode(head,1);
    
    show(head);
    return 0;
}