import java.util.Scanner;

public class twodigitprint {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);

        long a=sc.nextLong();
       long b=sc.nextLong();
       long c=sc.nextLong();
       long d=sc.nextLong();
               long result = 1;
      result = (result * (a % 100)) % 100;
        result = (result * (b % 100)) % 100;
        result = (result * (c % 100)) % 100;
        result = (result * (d % 100)) % 100;


        
        if (result < 10) {
            System.out.println("0" + result);
        } else {
            System.out.println(result);
        }





      

    }
}
