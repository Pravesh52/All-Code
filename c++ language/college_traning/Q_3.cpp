#include<iostream>
using namespace std;
int main()
{
    int n,rev=0,remainder,org;
    cout<<"Enter a Number: ";
    cin>>n;
    org = n;
    while(n!=0)
    {
        remainder=n % 10;
        rev=rev*10+remainder;
        n=n/10;
    }
    if(org==rev)
    {
        cout<<"Palindrone number";

    }
    else{
        cout<<"not a palindrone number"<<endl;
    }
    return 0;
}