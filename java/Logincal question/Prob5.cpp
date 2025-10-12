
// #include<iostream>
// using namespace std;

// // int a = 10, b = 20;

// int a=5;

// int main() {
//     // int *p = &a;
//     // *p = b;
//     // cout << a;

//     cout<<a++ + ++a;
//     return 0;
// }

#include <iostream>
using namespace std;

int main() {
    int a = 5;
    int x = a++;   // x = 5, a = 6
    int y = ++a;   // a = 7, y = 7
    cout<<a;
    //cout << x + y; // prints 12
    return 0;
}

