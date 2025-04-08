//write  a c++ code to find second maximum and second minimum in an array, 
// #include<iostream>
// using namespace std;
// int main()
// {

//   int arr[]={7,2,3,12,6,8};
//   int size=sizeof(arr)/sizeof(arr[0]);
//   int largest = arr[0];
//   int slargest=INT32_MIN;
//   for(int i =1;i<size;i++)
//   {
//     if(largest < arr[i])
//     {
//       slargest=largest;
//       largest=arr[i];
//     }else if(slargest<arr[i]){
//       slargest=arr[i];
//     }
//   }
//   cout<<largest<<" "<<slargest<<endl;
//   return 0;


// }


//write a code to check if an array is sorted or not.
// {
//   bool result = true;
//   int arr[]={10,2,3,4,5,6};
//   int size=sizeof(arr)/sizeof(arr[0]);
//   for(int i=0;i<size-1;i++)
//   {
//     if(arr[i]>arr[i+1]){
//       result = false;
//       break;
//     }
//   }
//   if(result)
//   {
//     cout<<"sorted"<<endl;
//   }else{
//     cout<<"NOt Sorted"<<endl;
//   }
//   return 0;
// }


// {
//   int a[100],n;
//   cout<<"Enter the size of array :: ";
//   cin>>n;
  
//   cout<<"Enter the element of an array :: ";
//   for(int i=0;i<n;i++)
//   {
//     cin>>a[i];
//   }
//   int start=0;
//   int end=n-1;
//   while(start<end){
//   while(a[start]!=1 && start<end)
//   start++;
//   while(a[end]!=0 && start<end)
//   end--;
//  if(start<end){
//   a[start]=0;
//   a[end]=1;
//  }
//   start++;
//   end--;
//   }
//   for(int i=0;i<n;i++)
//   {
//     cout<<a[i]<<" ";
//   }
  
//   return 0;

// }

//print a rotating running cursor.
//
// {
//   char cursor[]={'|','/','-','\\'};
//   for(int i=0;i<50;i++)
//   {
//     cout<<cursor[i%4];
//     cout<<'\b';
//   }
//}

// {
//   //write a c++ code to remove duplicate integers from a sorted array.
//   int A[]={1,1,2,2,3,3,4};
//   int size=sizeof(A)/sizeof(A[0]);
//   int i=0,j=i+1;
//   while(j<size){
//     if(A[i]!=A[j]){
//       A[i+1] = A[j];
//       i++;
//     }
//     j++;
//   } 
//   size = i+1;
//   for(int i=0;i<size;i++)
//   {
//     cout<<A[i]<<" ";
//   }
//   return 0;
// }

// {
//   //write a c++ code to sort an array using selection sort 
//   int i,j,n,loc;
//   int a[100];
  
//   cout<<"Enter the size of an array :: ";
//   cin>>n;
//   cout<<"Enter element of an array :: ";
//   for(i=0;i<n;i++)
//   {
//     cin>>a[i]
//   }
//   for(i=0;i<n-1;i++)
//   {
//     loc=i;
//     for(j=i+1;j<n)
//   }
// }
// C++ Program to illustrate how to Find the Number of

performance matrics of sorting alogrithms.
1. best case Time complexity.
2. worst case time complexity.
3. Adaptibility. 
4. stability.

