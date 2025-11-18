import java.util.Scanner;

public class sweep {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int a = sc.nextInt();  
        int b = sc.nextInt(); 

        int n=a+b;
         if (n == 0) {
            System.out.println("NO");
            return;
        }
        //start with even

        int even1=(n+1)/2;
        int odd1=n/2;

        //start with odd
        int odd2=n/2;
        int even2=(n+1)/2;

        if((even1==a && odd1==b) || (odd2==a && even2==b)){
            System.out.println("YES");
        }else{
            System.out.println("NO");
        }


    }
    
}
