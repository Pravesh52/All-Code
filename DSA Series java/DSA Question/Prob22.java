//. Find the sum of digits of a number

import java.util.Scanner;

public class Prob22 {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter the number: ");
        int num=sc.nextInt();

        int remainder,sum=0,temp;

        temp=num;


        while(num!=0)
        {
            remainder=num%10;
            sum+=remainder;
            num=num/10;
        }
        System.out.print("Sum of number:"+sum);
        
    }
}
