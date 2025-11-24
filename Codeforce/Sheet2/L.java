import java.util.Scanner;

public class L {
    public static void main(String[] args) {
        Scanner sc= new Scanner(System.in);

        long a=sc.nextLong();
        long b=sc.nextLong();

        while(b!=0)
        {
            long temp=b;
            b=a%b;
            a=temp;
        }
        System.out.println(a);
    }
}
