import java.util.Scanner;

public class twonumber {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        //  Scanner sc = new Scanner(System.in);
        double A = sc.nextDouble();
        double B = sc.nextDouble();

        System.out.println("floor " + (int)A + " / " + (int)B + " = " + (int)Math.floor(A / B));
        System.out.println("ceil " + (int)A + " / " + (int)B + " = " + (int)Math.ceil(A / B));
        System.out.println("round " + (int)A + " / " + (int)B + " = " + Math.round(A / B));
    }
}
