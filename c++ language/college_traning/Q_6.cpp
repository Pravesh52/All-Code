#include<iostream>
using namespace std;
int main()
{
    int n,i;
    cout<<"Enter a number greater than 2: ";
    cin>>n;
    for(i=2;i<n;i++)
    {
        if(n%i==0)
        {
            cout<<n<<"is not a prime number";
            break;
        }

    }
    if(i==n)
    {
        cout<<n<<"is prime number";
    }
    return 0;

}