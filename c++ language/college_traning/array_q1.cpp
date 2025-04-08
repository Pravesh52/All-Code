#include<iostream>
using namespace std;
int main()
{
 //write a c++ code to find the sum, product and average of elements in an array.
 int n,a[100],sum=0,product=1,average=0;
 cin>>n;
 for(int i=0;i<n;i++)
 {
    cin>>a[i];
 }
 for(int i=0;i<n;i++)
 {
    sum+=a[i];
    product*=a[i];
 }   
 average=sum/n;
 cout<<sum<<" "<<product<<" "<<average;
 return 0;
}