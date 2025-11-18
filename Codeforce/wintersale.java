import java.util.Scanner;

public class wintersale {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);

        double x=sc.nextDouble();
        double p=sc.nextDouble();

        double remaining=100-x;
        double original_price=(p * 100) / remaining;

        System.out.printf("%.2f", original_price);
    }
}
