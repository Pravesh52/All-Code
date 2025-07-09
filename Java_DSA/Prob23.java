//Remove duplicates from a string


public class Prob23 {
    public static void main(String[] args) {
        String str = "Apple";
        char[] arr = str.toCharArray();
        int n = arr.length;

        for (int i = 0; i < n; i++) {
            boolean isDuplicate = false;

            // Check if arr[i] has appeared before
            for (int j = 0; j < i; j++) {
                if (arr[i] == arr[j]) {
                    isDuplicate = true;
                    break;
                }
            }

            // If not duplicate, print the character
            if (!isDuplicate) {
                System.out.print(arr[i]);
            }
        }
    }
}
