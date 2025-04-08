#include<iostream>
#include<cstdio>
using namespace std;
// int main()
// {
    //half pascal triangle.
//    int i,j,n,k;
//    cin>>n;
//    k=n/2;
//    for(i=1;i<=n;i+=2)
//    {
//     for(j=0;j<k;j++)
//     {
//         cout<<"\t";
//     }
//     for(j=1;j<=i;j++)
//     {
//         cout<<"\t*";
//     }
//     cout<<"\n";
//     k--;
//    } 
//    return 0;

//    int n;
//    cin>>n;
//    int k = 0;
//    for(int i=n; i>0; i-=2){
//     for(int j=0; j<k; j++){
//         cout<<"\t";
//     }
//     for(int j=1; j<=i; j++){
//         cout<<"\t*";
//     }
//     k++;
//     cout<<endl;
//    }

//     int n;
//     char x = 65;
//    cin>>n;
//    int k = 0;
//    for(int i=n; i>0; i-=2){
//     for(int j=0; j<k; j++){
//         cout<<"\t";
//     }
//     for(int j=1; j<=i; j++){
//         printf("\t%c",x);
//         // cout<<"\t*";
//     }
//     k++;
//     x++;
//     cout<<endl;
//    }

    // Q. print the swastik pattern?
    // Q. Draw Full Pascal Pattern?
    // int n;
    // cin>>n;
    // int temp = n;
    // int count = 0;
    // while(n){
    //     count++;
    //     n/=10;
    // }
    // cout<<count<<endl;
    // n = temp;
    
    // if(count%2==0){
    //     int x = 1;
    //     for(int i=0; i<count-1; i++){
    //         x *= 10;
    //     }
    //     while(n){
    //         cout<<(n/x)<<(n%10)<<endl;
    //         n = n%x;
    //         n /= 10;
    //         x/=100;
    //     }
    // }

    // Take two numbers and print the common numbers in their table and count...
    // int a,b;
    // cin>>a>>b;
    // int i = 1;
    // while(i<=10){
    //     cout<<a*i<<" "<<b*i<<endl;
    //     i++;
    // }
    //swastik Pattern
    int main()
    {
        int n,i,j;
        cout<<"Enter the number: ";
        cin>>n;

        for(i=1;i<=n;i++)
        {
            for(j=1;j<=n;j++)
            {
                if(i==n/2+1 || j==n/2+1 || (i==1 && j>=(n/2+1)&& (j>=n)))
                {
                    cout<<"*";
                }
                else
                {
                    cout<<" ";
                }

            }
            cout<<"\n";
        }
        
        return 0;
    }
