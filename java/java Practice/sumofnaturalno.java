//sum of natural number

import java.util.Scanner;

public class sumofnaturalno {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter number : ");
        int  n = sc.nextInt(); 

        int sum=0;

        for(int i=1;i<=n;i++)
        {
            sum+=i;
        }
        System.out.println(sum);
    }
}
