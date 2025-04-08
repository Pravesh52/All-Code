/*Write a C++ code to add integers 
into a heap data structure. Also 
implement heap sort. 
*/


#include <iostream>
using namespace std;

void heapify(int A[], int size) {
    int j;
    for(int i = size; i > 0; i--) {
        j = i*2;
        if(j>size && (j+1)>size) continue;
    
        if((j+1) <= size && A[j] < A[j+1]) j++;
    
        if(A[i] < A[j]) {
           int temp = A[i];
           A[i] = A[j];
           A[j] = temp;
        }
    }
}

void displayHeap(int A[], int size) {
    for(int i=1;i<=size; i++) {
        cout << A[i] << " ";
    }
    cout << endl;
}

int deleteHeap(int A[], int &n) {
    int i = 1,j;
    int val = A[1];
    int temp = A[n];
    A[1] = A[n];
    j = 2*i;

    //Storing elements to be deleted at the last 
    A[n] = val;

    while(j<n-1) {
        if(A[j]<A[j+1]) {
            j++;
        }
        if(A[i]<A[j]) {
            swap(A[i], A[j]);
            i = j;
            j = 2*i;
        } else 
            break;
    }
    
    n--;
    
    return val;
}

void heapSort(int A[], int n) {
    //delete all the elements from heap one by one
    for(int i = n; i > 0; i--) {
        deleteHeap(A, n);
        heapify(A, n);
    }
}


int main()
{
    /*first index not used in array representation of 
    heap hence the first element is set as zero*/
    int A[] = {0,30,20,10,7,25,15};
    int size = sizeof(A)/sizeof(A[0])-1; //6
    heapify(A, size);
    displayHeap(A, size);
    
    heapSort(A,size);
    displayHeap(A,size);
    return 0;
}
