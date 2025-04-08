//write a c++ code to find the maximum and minimum element in an array.
#include<iostream>
using namespace std;
int main()
{
    int i,n,min,max;
    int array[100];
    cout<<"Enter the size of array: ";
    cin>>n;
    for(i=0;i<n;i++)
    {
        cin>>array[i];
    }
    max=array[0];
    min=array[0];
    for (int i = 1; i < n; i++) {
        if (array[i] > max) {
            max = array[i];
        }
        if (array[i] < min) {
            min = array[i];
        }
    }
    cout << "Maximum element: " << max << endl;
    cout << "Minimum element: " << min << endl;
    return 0;
}

