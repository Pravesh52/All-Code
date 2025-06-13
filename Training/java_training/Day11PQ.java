import java.util.Scanner;

public class Day11PQ {
    public static void main(String[] args) {
       // 1.	WAP to print natural numbers up-to 'n'
        //         Scanner in=new Scanner(System.in);
        //         System.out.println("Enter the no. to print natural no.");
        //         int n=in.nextInt();
        //    for(int i=1;i<=n;i++)
        //    {
            
        //     System.out.println(i);
        //    }

    //2.WAP to print all even numbers between two given range
        //  Scanner in=new Scanner(System.in);
        //  System.out.println("Enter the start No.");
        //  int start=in.nextInt();
        //  System.out.println("Enter the last No.");
        //  int end=in.nextInt();

        //  for(int i=start;i<=end;i++)
        //  {
        //     if(i%2==0){
        //         System.out.println(i+" ");
        //     }
        //  }

    //3.WAP to print 'n' natural numbers in reverse order
        // Scanner in=new Scanner(System.in);
        //  System.out.println("Enter the natural no.");
        //  int n=in.nextInt();
        //  System.out.println("Reverse natural no.");
        //  for(int i=n;i>=1;i--)
        //  {
        //     System.out.println(i);
        //  }

    //4. WAP to find sum of 'n' natural numbers
        //  Scanner in=new Scanner(System.in);
        //  System.out.print("Enter the natural no.");
        //  int n=in.nextInt();
        //  int sum=0;
        //  for(int i=1;i<=n;i++){
        //     sum=sum+i;
        //  }
        //  System.out.println("sum of Natural no."+sum);


        //5.WAP to find product of 'n' natural numbers
        //  Scanner in=new Scanner(System.in);
        //  System.out.print("Enter the natural no.");
        //  int n=in.nextInt();
        //  int product=1;
        //  for(int i=1;i<=n;i++){
        //     product=product*i;
        //  }
        //  System.out.println("product of Natural no."+product);


        //6.WAP to extract and display all digits from a given number
        
        // Scanner in=new Scanner(System.in);
        // System.out.println("Enter the number: ");
        // int n=in.nextInt();

        // while(n!=0)
        // {
            
        //     System.out.println(n%10);
        //     n=n/10;
            
        // }

        //7.WAP to find sum of all digits in a given number

        Scanner in=new Scanner(System.in);
        System.out.println("Enter the No.");
        int n=in.nextInt();
        int sum=0;
        while(n!=0)
        {
            sum += (n % 10);
            n /= 10;
        }
        System.out.println(sum);
        
        


     }
}
