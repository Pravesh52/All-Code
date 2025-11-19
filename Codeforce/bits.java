//adding bits

import java.util.Scanner;

public class bits {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        long a=sc.nextLong();
        long b=sc.nextLong();

        long c=a^b;

        System.out.println(c);
    }
}
