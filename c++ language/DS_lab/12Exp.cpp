/*Write a C++ code to add integers 
into a Binary Search Tree. Also 
write functions to traverse BST 
using Pre-order, In-order and 
Post-order traversal techniques.
*/



#include <iostream>
using namespace std;

struct Node {
    Node* left;
    Node* right;
    int data;
};

Node *createNode(int data) {
    Node *n = new Node;
    n->data = data;
    n->left = n->right = NULL;
    return n;
}
Node* insert(Node *t, int key) {
    Node *p;
    if(t==NULL) {
        p = createNode(key);
        return p;
    } else if(key < t->data) {
        t->left = insert(t->left, key);
    } else if(key > t->data) {
        t->right = insert(t->right, key);
    }

    //key is equal to already existing element so just return
    return t;
}

void inorder(Node *p) {
    if(p!=NULL) {
        inorder(p->left);
        cout << p->data << " ";
        inorder(p->right);
    }
}

void preorder(Node *p) {
    if(p!=NULL) {
        cout << p->data << " ";
        preorder(p->left);
        preorder(p->right);
    }
}

void postorder(Node *p) {
    if(p!=NULL) {
        postorder(p->left);
        postorder(p->right);
        cout << p->data << " ";
    }
}

int main()
{
    Node *root = NULL;
    int arr[] = {35,40,50,25,20,45,15};
    int size = sizeof(arr)/sizeof(arr[0]);
    root = insert(root, arr[0]);
    
    for(int i=1;i<size;i++) {
        insert(root, arr[i]);
    }

    cout << "Inorder: "; inorder(root);
    cout << endl;
    
    cout << "Preorder: "; preorder(root);
    cout << endl;
    
    cout << "Postorder: "; postorder(root);
    cout << endl;
}