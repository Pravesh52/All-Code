import java.util.Scanner;

public class Conditions {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        double a = sc.nextDouble();
        double b = sc.nextDouble();

        if(a>=b)
        {
            System.out.println("Yes");
        }else{
            System.out.println("No");
        }
    }
}
