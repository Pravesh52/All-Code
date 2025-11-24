//palindrome

import java.util.Scanner;

public class I {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();

        
        int temp=n;

        int rev=0;
        int  remainder;

        while(n!=0)
        {
            remainder=n%10;
            rev=rev*10+remainder;
            n=n/10;
        }
        System.out.println(rev);
        if(temp==rev)
        {
            System.out.println("YES");
        }else{
            System.out.println("NO");
        }
    }
}
