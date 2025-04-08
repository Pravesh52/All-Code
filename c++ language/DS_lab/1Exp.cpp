/*Write a C++ program to search an 
element using (a) Linear Search 
(b) Binary Search. */

#include <iostream>
using namespace std;

int LinearSearch(int arr[], int key, int size) {
    int found = -1;
    for(int i=0; i<size; i++) {
        if(arr[i] == key) {
            found = i;
            return found;
        }
    }
    return found;
}

int BinarySearch(int arr[], int key, int L, int R) {
	int found = -1;
	while(L<=R) {
		int m = (L+R)/2;
		if(arr[m] == key) {
			found = m;
			return found;
		} else if(arr[m] < key) {
			L = m+1; //key to be found is higher, so move L forward
		} else {
			R = m-1;
		}
	}
	return found;	
}

int main() {
	int arr[] = {4,8,10,14,21,22,36,62,77,81,91};
	int size = sizeof(arr)/sizeof(arr[0]);
	int result = BinarySearch(arr, 62, 0, size-1);
	if(result!=-1)
		cout << "Binary Search: Found at index " << result << endl; 
	else 
		cout << "Binary Search: Not Found\n";
		
	result = LinearSearch(arr, 62, size);
	if(result!=-1)
		cout << "Linear Search: Found at index " << result << endl; 
	else 
		cout << "Binary Search: Not Found\n";
}