import java.util.Scanner;

public class mathmatical {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);

        int A = sc.nextInt();
        char S = sc.next().charAt(0);
        int B = sc.nextInt();
        char Q = sc.next().charAt(0); 
        int C = sc.nextInt();

        int result = 0;

        if (S == '+') result = A + B;
        else if (S == '-') result = A - B;
        else if (S == '*') result = A * B;

        if (result == C) {
            System.out.println("Yes");
        } else {
            System.out.println(result);
        }
    }
}
