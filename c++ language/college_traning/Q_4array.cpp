#include<iostream>
using namespace std;
int main()
{
    int i,n;
    int array[100];
    cout<<"Enter the size of array: ";
    cin>>n;
    cout<<"Enter"<<" "<<n<<" "<<"element of an array: ";
    for(i=0;i<n;i++)
    {
        cin>>array[i];
    }
    cout<<endl;
    for(i=0;i<n;i++)
    {
        cout<<array[i]<<" ";
    }
    return 0;


}