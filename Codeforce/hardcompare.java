import java.util.Scanner;

public class hardcompare {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        long A = sc.nextLong();
        long B = sc.nextLong();
        long C = sc.nextLong();
        long D = sc.nextLong();

     
        double left = B * Math.log(A);
        double right = D * Math.log(C);

        if (left > right) {
            System.out.println("YES");
        } else {
            System.out.println("NO");
        }
    }
}

