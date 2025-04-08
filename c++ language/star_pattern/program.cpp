#include<iostream>
#include<stdio.h>
#include<conio.h>
using namespace std;

/* * * * * *
   * * * * *
   * * * * * 
   * * * * * 
   * * * * *   */

//    int main()
//    {
//     int n,i,j;
//     cout<<"Enter the no. of row :: ";
//     cin>>n;

//     for(i=0;i<n;i++)
//     {
//         for(j=0;j<n;j++)
//         {
//             cout<<" * ";
//         }
//         cout<<"\n";
//     }
//     return 0;
//    }


// Print the no. of rows and column

//   int main()
//   {
//     int n,m,i,j;
//     cout<<"Enter the no. of rows and column :: ";
//     cin>>n>>m;

//     for(i=0;i<n;i++)
//     {
//         for(j=0;j<m;j++)
//         {
//             cout<<" * ";
//         }
//         cout<<"\n";
//     }
//     return 0;
//   }

//Print the pattern
/*  *
    * *
    * * *
    * * * *
    * * * * * 
*/
  
//   int main()
//   {
//     int row,i,j,temp;

//     cout<<"Enter no. of row :: ";
//     cin>>row;
//     //temp=row;

//     for(i=1;i<=row;i++)
//     {
//         for(j=i;j>0;j--)
//         {
//             cout<<" * ";
//         }
//         cout<<"\n";
//     }
//     return 0;
//   }
    
/*
          *
         * *
        * * *
       * * * * 
      * * * * *
*/
// int main()
// {
//     int row,i,j;
//     cout<<"Enter the row :: ";
//     cin>>row;

//     for(i=1;i<=row;i++)
//     {
//         for(j=i;j<row;j++)
//         {
//             cout<<" ";//two space
//         }
//         for(j=i;j>0;j--)
//         {
//             cout<<" * ";
//         }
//         cout<<"\n";
//     }
//     return 0;
// }

// plus pattern

// int main()
// {
//     int i,j,mid,row;
//     cout<<"Enter the no. of row :: ";
//     cin>>row;

//     mid=row/2;

//     for(i=1;i<=row;i++)
//     {
//         for(j=1;j<=row;j++)
//         {
//             if(i==mid+1 || j==mid+1)
//             {
//                 cout<<" * ";
//             }
//             else{
//                 cout<<" o ";
//             }
//         }
//         cout<<"\n";
//     }
//     return 0;
//}

