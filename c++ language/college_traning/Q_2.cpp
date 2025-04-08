#include <iostream>
using namespace std;

int sumOfDigits(int number) {
    int sum = 0;
    while (number != 0) {
        sum += number % 10;  // Add the last digit to the sum
        number /= 10;        // Remove the last digit
    }
    return sum;
}

int main() {
    int number;
    cout << "Enter a number: ";
    cin >> number;

    int sum = sumOfDigits(number);
    cout << "Sum of digits: " << sum << endl;

    return 0;
}
