#include <iostream>
#include <string>
using namespace std;

std::string mergeStrings(const std::string& word1, const std::string& word2) {
    std::string merged;
    int len1 = word1.size();
    int len2 = word2.size();
    int i = 0, j = 0;

    // Alternating between characters from word1 and word2
    while (i < len1 || j < len2) {
        if (i < len1) {
            merged += word1[i];
            i++;
        }
        if (j < len2) {
            merged += word2[j];
            j++;
        }
    }

    return merged;
}

int main() {
    std::string word1 = "abc";
    std::string word2 = "pqr";

    std::string result = mergeStrings(word1, word2);
    std::cout << "Merged string: " << result << std::endl;

    return 0;
}
