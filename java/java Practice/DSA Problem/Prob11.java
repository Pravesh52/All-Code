//sum of digit for a given number

import java.util.Scanner;

public class Prob11 {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter the no.: ");
        int n=sc.nextInt();
        int sum=0;
        while(n!=0){
            int temp=n%10;
            sum+=temp;
            n/=10;
        }
        System.out.println("sum is: "+sum);
    }
}
