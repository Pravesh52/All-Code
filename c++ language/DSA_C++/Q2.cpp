// #include <iostream>
// #include <string>
// using namespace std;

// std::string mergeStrings(const std::string& word1, const std::string& word2) {
//     std::string merged;
//     int len1 = word1.size();
//     int len2 = word2.size();
//     int i = 0, j = 0;

//     // Alternating between characters from word1 and word2
//     while (i < len1 || j < len2) {
//         if (i < len1) {
//             merged += word1[i];
//             i++;
//         }
//         if (j < len2) {
//             merged += word2[j];
//             j++;
//         }
//     }

//     return merged;
// }

// int main() {
//     std::string word1 = "ab";
//     std::string word2 = "pqrs";

//     std::string result = mergeStrings(word1, word2);
//     std::cout << "Merged string: " << result << std::endl;

//     return 0;
// }

//write a program to fibonacci series.
// #include<iostream>
// using namespace std;
// int main()
// {
//     int i,n,a=0,b=1,c;
//     cout<<"Enter the number of terms: ";
//     cin>>n;

//     cout<<"faboncci series is: ";
//     cout<<a<<" "<<b<<" ";

//     for(i=1; i<n-1; i++)
//     {
//         c=a+b;
//         cout<<c<<" ";
//         a = b;
//         b = c;
//     }
//     return 0;
// }

//write a program to find weather the number is palindrone or not.
// #include<iostream>
// using namespace std;
// int main()
// {
//     int n,rev=0,remainder,temp;
//     cout<<"Enter the numbe to check palindrone or not: ";
//     cin>>n;
//     temp = n;

//     while(n!=0)
//     {
//         remainder = n % 10;
//         rev = rev * 10 + remainder;
//         n = n/10;
//     }
//     if(temp==rev)
//     {
//         cout<<"Palindrone no. ";
//     }
//     else
//     {
//         cout<<"Not Palindrone NO. ";
//     }
//     return 0;
// }

//write a program to reverse number
// #include<iostream>
// using namespace std;
// int main()
// {
//     int n,rev=0;
//     cout<<"Enter the number: ";
//     cin>>n;

//     while(n!=0)
//     {
//         rev=rev*10;
//         rev=rev+(n%10);
//         n=n/10;
//     }
//     cout<<"Reverse number: "<<rev<<" "<<endl;
    
//     return 0;
// }

//write a program to rotate array
// #include<iostream>
// using namespace std;
// int main()
// {
//     int i,n,arr[100];
//     cout<<"Enter the size of array: ";
//     cin>>n;

//     cout<<"Enter the Element of an array: ";
//     for(i=0;i<n;i++)
//     {
//         cin>>arr[i];
//     }
//     return 0;
// }