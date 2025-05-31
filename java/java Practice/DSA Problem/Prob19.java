// Input : n = 3
// Output : 22
// Sum of first three numbers is 3 + 2 + 1 = 6
// Square of the sum =  36
// Sum of squares of first three is 9 + 4 + 1 = 14
// Absolute difference = 36 - 14 = 22

// Input : n = 10
// Output : 2640

import java.lang.Math;
public class Prob19 {
    public static void main(String[] args) {
        
        int n=10;
        int count=0;
        int sum=0;
        
       for(int i=1;i<=n;i++)
       {
        sum+=i;
       }
       System.out.println("sum of no."+sum);

       int sumofsquare=sum*sum;

       System.out.println("Sum of square: "+sumofsquare);

       int ans=0;
       for(int i=1;i<=n;i++)
       {
        ans=ans+(i*i);
        
       }
       System.out.println("Square of sum= "+ans);

       int difference=sumofsquare-ans;
       System.out.println("difference: "+difference);



    }
}
