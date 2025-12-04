import java.util.Scanner;

public class X {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);

        int n=sc.nextInt();

        while(n>0)
        {
            long a=sc.nextLong();

            int ones = Long.bitCount(a);

            long result = (1<<ones) - 1;

            System.out.println(result);
            n--;
        }

    }
}
