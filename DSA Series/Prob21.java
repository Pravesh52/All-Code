//Find the sum of digits of a number.

import java.util.Scanner;

public class Prob21 {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter the No.: ");
        int num=sc.nextInt();

        int sum=0,remainder,temp;

        temp=num; 

        while(num!=0)
        {
            remainder=num%10;
            sum+=remainder;
            num=num/10;
        }
        System.out.println(sum);

    }
}
