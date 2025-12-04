import java.util.Scanner;

public class v {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();

        int count = 1;

        for (int i = 1; i <= N; i++) {
            System.out.println(count + " " + (count + 1) + " " + (count + 2) + " PUM");
            count += 4;
        }
    }
}
