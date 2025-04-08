#include<iostream>
using namespace std;
int main()
{
    int n,istrue=0;
    cin>>n;
    int i=0;
    while((i*i)<=n){
        if((i*i)==n){
            istrue=1;
        }
        i++;
    }
    if(istrue){
        cout<<"Number is perfect square ";
    }
    else
    {
        cout<<"Number is not perfect square";
    }
    
}