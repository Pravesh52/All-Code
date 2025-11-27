import java.util.*;

public class Q {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        if (!sc.hasNextInt()) return;  
        int T = sc.nextInt();

        while (T > 0) {

            if (!sc.hasNextInt()) break;  
            int N = sc.nextInt();

            if (N == 0) {
                System.out.println("0");
                continue;
            }

            while (N > 0) {
                System.out.print((N % 10) + " ");
                N /= 10;
            }

            System.out.println();
        }
    }
}
