//fibonacci series

import java.util.Scanner;

public class Prob7 {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter the print the fibonacci series: ");
        int n=sc.nextInt();

        int a=0;
        int b=1;
        
        
        System.out.print(a+" "+b+" ");

        for(int i=2;i<=n;i++)
        {
            int c=a+b;
           System.out.print(c+" ");
           
           a=b;
           b=c;
        }
        //System.out.println(temp);

    }
}
