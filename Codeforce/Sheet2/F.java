import java.util.Scanner;

public class F {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);

        long a=sc.nextLong();

        for(int i=1;i<=12;i++)
        {
            System.out.println(a+" * "+i+" = "+a*i);
        }
    }
}
