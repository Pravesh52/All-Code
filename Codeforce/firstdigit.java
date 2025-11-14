import java.util.Scanner;

public class firstdigit {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int x = sc.nextInt();

        int firstDigit = x / 1000;  // since X is 4-digit (1000 to 9999)

        if (firstDigit % 2 == 0) {
            System.out.println("EVEN");
        } else {
            System.out.println("ODD");
        }
    }
}
