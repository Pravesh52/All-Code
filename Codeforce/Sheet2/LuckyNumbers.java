import java.util.Scanner;

public class LuckyNumbers {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int A = sc.nextInt();
        int B = sc.nextInt();

        boolean found = false;

        for (int num = A; num <= B; num++) {
            int x = num;
            boolean isLucky = true;

            while (x > 0) {
                int digit = x % 10;

                if (digit != 4 && digit != 7) {
                    isLucky = false;
                    break;
                }

                x /= 10;
            }

            if (isLucky) {
                System.out.print(num + " ");
                found = true;
            }
        }

        if (!found) {
            System.out.println(-1);
        }
    }
}
