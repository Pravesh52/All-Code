import java.util.Scanner;

public class twointervals {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);

        long l1 = sc.nextLong();
        long r1 = sc.nextLong();
        long l2 = sc.nextLong();
        long r2 = sc.nextLong();

        long start = Math.max(l1, l2);
        long end = Math.min(r1, r2);

        if (start <= end) {
            System.out.println(start + " " + end);
        } else {
            System.out.println("-1");
        }
    }
}
