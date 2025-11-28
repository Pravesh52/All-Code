import java.util.Scanner;

public class T {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
            int count=1;
        int n=sc.nextInt();

        for(int i=0;i<n;i++)
        {
            for(int j=0;j<n-i-1;j++)
            {
                System.out.print(" ");
            }
           
            for(int j=0;j<count;j++){

                System.out.print("*");

            }
            System.out.println();
            count+=2;
            

        }
    }
}
