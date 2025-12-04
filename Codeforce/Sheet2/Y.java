import java.util.Scanner;

public class Y {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        if(n <= 0) return;

        int a = 0, b = 1;

        if(n >= 1) System.out.print(a + " ");
        if(n >= 2) System.out.print(b + " ");

        for(int i = 3; i <= n; i++)
        {
            int result = a + b;
            System.out.print(result + " ");

            a = b;
            b = result;
        }
    }
}
