import java.util.Scanner;
import java.util.Arrays;

public class sort {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int A = sc.nextInt();
        int B = sc.nextInt();
        int C = sc.nextInt();

        int[] arr = {A, B, C};
        Arrays.sort(arr);

        // Print sorted values
        System.out.println(arr[0]);
        System.out.println(arr[1]);
        System.out.println(arr[2]);

        System.out.println(); // blank line

        // Print original values
        System.out.println(A);
        System.out.println(B);
        System.out.println(C);
    }
}

