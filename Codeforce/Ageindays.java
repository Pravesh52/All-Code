import java.util.Scanner;

public class Ageindays {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int N = sc.nextInt();

        int years = N / 365;
        N = N % 365;

        int months = N / 30;
        int days = N % 30;

        System.out.println(years + " years");
        System.out.println(months + " months");
        System.out.println(days + " days");
    }
}
