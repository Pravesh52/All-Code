import java.util.Scanner;

public class dataType {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        // Step 1: Input n, k, a
        long n = sc.nextLong();
        long k = sc.nextLong();
        long a = sc.nextLong();

        // Step 2: Compute value using double
        double value = (double)n * (double)k * (double)a;

        // Step 3: Check int range
        if (value >= -2147483648.0 && value <= 2147483647.0) {
            System.out.println("int");
        }
        // Step 4: Check long long range
        else if (value >= -9223372036854775808.0 && value <= 9223372036854775807.0) {
            System.out.println("long long");
        }
        // Step 5: Else print double
        else {
            System.out.println("double");
        }
    }
}
