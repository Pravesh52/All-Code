import java.util.Scanner;

public class Majority {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int arr[] = {2, 2, 1, 1, 2, 1};

        int candidate = 0;
        int count = 0;

        for (int i = 0; i < arr.length; i++) {
            if (count == 0) {
                candidate = arr[i];
            }
            if (arr[i] == candidate) {
                count++;
            } else {
                count--;
            }
        }

        System.out.println("Majority Element: " + candidate);
    }
}
