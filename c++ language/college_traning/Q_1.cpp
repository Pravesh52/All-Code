#include <iostream>
using namespace std;

int countDigits(int number) {
    int count = 0;
    while (number != 0) {
        number /= 10;  // Remove the last digit
        count++;       // Increase the digit count
    }
    return count;
}

int main() {
    int num;
    cout << "Enter a positive integer: ";
    cin >> num;

    if (num <= 0) {
        cout << "Please enter a positive integer." << endl;
    } else {
        int digits = countDigits(num);
        cout << "The number of digits in " << num << " is: " << digits << endl;
    }

    return 0;
}
