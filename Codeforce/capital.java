import java.util.Scanner;

public class capital {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        char X = sc.next().charAt(0);

        if (X >= '0' && X <= '9') {
            System.out.println("IS DIGIT");
        } else {
            System.out.println("ALPHA");
            if (X >= 'A' && X <= 'Z') {
                System.out.println("IS CAPITAL");
            } else {
                System.out.println("IS SMALL");
            }
        }
    }
}
