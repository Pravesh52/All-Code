//Program to count vowels in a string 

import java.util.Scanner;

public class Prob6 {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter the String to count the vowel : ");
        String str=sc.next();
        int count=0;

        for(int i=0;i<str.length();i++)
        {
           char ch=str.charAt(i);
           if(ch=='A' || ch=='E' || ch=='I' || ch=='O' || ch=='U'){
             count++;
           }
        }
        System.out.println("vowe count: "+count);

    }
}
