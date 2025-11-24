import java.util.Scanner;

public class B {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();
        boolean found = false;

        for (int i = 2; i <= N; i += 2) {
            System.out.println(i);
            found = true;
        }

        if (!found) {
            System.out.println("-1");
        }
    }
}
