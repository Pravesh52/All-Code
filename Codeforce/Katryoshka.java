import java.util.Scanner;

public class Katryoshka {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        long n = sc.nextLong();  // eyes
        long m = sc.nextLong();  // mouths
        long k = sc.nextLong();  // bodies

        // use sets that require 1 eye, 1 mouth, 1 body
        long use_mouth = Math.min(n, Math.min(m, k));

        n -= use_mouth;
        m -= use_mouth;
        k -= use_mouth;

        // Now use sets that require 2 eyes + 1 body
        long use_no_mouth = Math.min(n / 2, k);

        // Total dolls
        System.out.println((int)(use_mouth + use_no_mouth));
    }
}
