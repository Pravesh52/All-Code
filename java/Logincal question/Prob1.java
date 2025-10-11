//Write a program to check whether a number is even or odd.

import java.util.Scanner;
public class Prob1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter a number: ");
        int n = sc.nextInt();
  
            if(n%2==0)
            {
                System.out.println("Number is even");
            }else{
                System.out.println("Number is Odd");
            }
        
    }
}
