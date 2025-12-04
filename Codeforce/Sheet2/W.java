import java.util.Scanner;

public class W {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);

        int n=sc.nextInt();
        //print top triangle
        for(int i=1;i<=n;i++)
        {
            // print space
            for(int j=1;j<=n-i;j++)
            {
                System.out.print(" ");
            }
            //print star
            for(int star=1;star<=2*i-1;star++)
            {
                System.out.print("*");
            }
            System.out.println();
        }

        //print top to buttom half pyramid
        for(int i=n;i>=1;i--)
        {
            //print space
            for(int j=1;j<=n-i;j++ )
            {
                System.out.print(" ");
            }
            //print star
            for(int str=1;str<=2*i-1;str++)
            {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}
