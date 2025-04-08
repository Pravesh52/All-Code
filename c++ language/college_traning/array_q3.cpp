//write a c++ code to reverse an array (not just print actually reverse)
#include<iostream>
using namespace std;
int main()
{
    int i,j,n,rev;
    int a[100],b[100];
    cout<<"Enter the size of array: ";
    cin>>n;
    for(i=0;i<n;i++)
    {
        cin>>a[i];
    }
    for(i=n-1,j=0;i>=0;i--)
    {
        b[j]=a[i];
        j++;
    }
    cout<<"Reverse array: "<<endl;
    for(i=0;i<n;i++)
    {
        cout<<b[i]<<" ";
    }
    return 0;


   
}
