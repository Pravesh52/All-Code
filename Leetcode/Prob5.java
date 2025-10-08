//5. Longest Palindromic Substring

public class Prob5 {
    public static void main(String[] args) {
        String str = "babad";
        String longest = "";

        for (int i = 0; i < str.length(); i++) {
            for (int j = i + 1; j <= str.length(); j++) {
                String sub = str.substring(i, j);
                if (isPalindrome(sub) && sub.length() > longest.length()) {
                    longest = sub;
                }
            }
        }

        System.out.println("Longest Palindromic Substring: " + longest);
    }

    public static boolean isPalindrome(String s) {
        int start = 0, end = s.length() - 1;
        while (start < end) {
            if (s.charAt(start) != s.charAt(end)) return false;
            start++;
            end--;
        }
        return true;
    }
}
