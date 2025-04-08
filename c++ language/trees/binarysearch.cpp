#include<iostream>
#include<stdio.h>
using namespace std;
typedef struct Tree
{
    int data;
    Tree *left,*right;
}T;
T *root,*temp,*ttemp,*p;

void init(){
    root=temp=ttemp=NULL;
}
void create_Root(int val)
{
    root= new Tree;
    root->left=root->right=NULL;
    root->data=val;
}
void Add_nodes(int val){
    temp=root;
    while(temp!=NULL)
    {
        p=temp;
        if(temp->data>val)
        temp=temp->left;
        else
        temp=temp->right;
    }
    ttemp = new Tree;
    ttemp->data = val;
    ttemp->left=ttemp->right=NULL;

    if(p->data>val)
    p->left=ttemp;
    else
    p->right=ttemp;
}
void In(T *p)
{
    if(p!=NULL)
    {
        In(p->left);
        cout<<p->data<<",";
        In(p->right);
    }
}
void Pre(T *p)
{
    if(p!=NULL)
    {
        cout<<p->data<<",";
        Pre(p->left);
        Pre(p->right);
    }
}
void Post(T *p)
{
    if(p!=NULL)
    {
        Post(p->left);
        Post(p->right);
        cout<<p->data<<",";
    }
}
void search_element(T *p,int n)
{
    if(p==NULL){
    cout<<n <<"Not present in the tree ";return;
    }
    else if(n==p->data)
    cout<<n <<"Present in the tree";
    else if(n<p->data)
         search_element(p->left,n);
   else
      search_element(p->right,n);
}
Tree* Del_node(T *p,int n)
{  Tree *ptr;
   if(p==NULL)
   {
    cout<<"Enterd data is not found in Tree";
    return 0;
   }else if(n<p->data){
    ttemp=p;
    return (Del_node(p->left,n));
   }else if(n>p->data){
    ttemp=p;
    return (Del_node(p->right,n));
   }else if(p->left==NULL && p->right==NULL){
       if(ttemp->left==p)
       ttemp->left=NULL;
       else
          ttemp->right=NULL;
          delete(p);
   }else if(p->right==NULL && p->left!=NULL)
   {
     if(ttemp->left==p)
     {
       ttemp->left=p->left;
     }else
        ttemp->right=p->left;

   p->left=NULL;
   delete(p);

   }else if(p->left==NULL && p->right!=NULL)
   {
     if(ttemp->left==p)
     {
       ttemp->left=p->right;
     }else
        ttemp->right=p->right;

   p->right=NULL;
   delete(p);
   }else
   {
     ttemp=p;
     T *s=p->right;

     while(s->left!=NULL)
     {
        ttemp=s;
        s=s->left;
     }
     p->data=s->data;

     if(s->right!=NULL)
     {
        ttemp->left=s->right;
        delete(s);
     }
   }
   return p;
}
int main()
{
    int n;
    char i;
  printf("\nEnter data for Root node :");
  scanf("%d",&n);
  create_Root(n);
  printf("\nFirst Node Created :\n");
  while(1)
  {
  printf("\nDo u Want to continue :");
  scanf(" %c",&i); 
  if(i=='n' || i=='N') 
  break;
  printf("\n Enter Data for New Node :");
  scanf("%d",&n);
  Add_nodes(n);
  }
  cout<<"InOrder Traversal :- ";
  In(root);
  cout<<"\nPreOrder Traversal :- ";
  Pre(root);
  cout<<"\nPostOrder Traversal :- ";
  Post(root);
  
 printf("\n Enter the element to find:");
 scanf("%d",&n);
 search_element(root,n);

cout<<"\n\nEnter the data for deleting a node: ";
cin>>n;
 Del_node(root,n);
cout<<"\n\n Inorder Traversal After Deleting the node: ";
In(root);
}