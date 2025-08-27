//. Print the Fibonacci sequence up to N terms

import java.util.Scanner;

public class Prob17 {
    public static void main(String[] args) {
        Scanner sc= new Scanner(System.in);
        System.out.print("Enter the number: ");
        int num=sc.nextInt();

        int a=0,b=1,c;
        System.out.print(a+" ");
        System.out.print(b+" ");

        for(int i=1;i!=num;i++)
        {
            c=a+b;
            System.out.print(c+" ");
            a=b;
            b=c;
        }
    }
    
}
