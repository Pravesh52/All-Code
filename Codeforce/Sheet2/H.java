//is prime

import java.util.Scanner;

public class H {
    public static void main(String[] args) {
       Scanner sc=new Scanner(System.in);
       
       int n=sc.nextInt();

       boolean is_prime=true;

       for(int i=2;i<=n/2;i++)
       {
         if(n%i==0)
         {
            is_prime=false;
            break;
         }
       }
       if(is_prime)
       {
        System.out.println("YES");
       }else{
        System.out.println("NO");
       }
    }
}
