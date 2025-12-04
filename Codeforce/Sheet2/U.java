import java.util.Scanner;

public class U {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int N = sc.nextInt();
        int A = sc.nextInt();
        int B = sc.nextInt();

        int total = 0;

        for (int i = 1; i <= N; i++) {

            int sum = 0;
            int x = i;

    
            while (x > 0) {
                sum += x % 10;
                x /= 10;
            }

            if (sum >= A && sum <= B) {
                total += i;
            }
        }

        System.out.println(total);
    }
}
