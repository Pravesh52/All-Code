import java.util.Scanner;

public class Prob5 {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter the no. to check palindrone ya not : ");
        int n=sc.nextInt();

        int rev=0;
        int temp=n;

        while(n!=0)
        {
          int remainder=n%10;
          rev=rev*10+remainder;
          n=n/10;
        }
        if(rev==temp)
        {
            System.out.println("No. is palindrone");
        }else{
            System.out.println("Not a Palindrone");
        }


        
    }
}
