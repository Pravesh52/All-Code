//exception handling
import java.util.Scanner;

public class Day21 {
    public static void main(String[] args) {
        //int a=10; int b=0;
        //int a,b;
        // Scanner sc= new Scanner(System.in);
        // System.out.println("Enter A: ");
        // int a=sc.nextInt();

        // System.out.println("Enter B: ");
        // int b=sc.nextInt();

        // System.out.println("Result: ");
        //  try {
        // int c=a/b;
        // System.out.println(c);
        //  } catch (Exception e) {
        //     System.out.println("We can not divide by zero");
        //  }
        //  System.out.println("hello");
        //  System.out.println("hiii");
        //  System.out.println("byeee");



        int arr []={1,2,3,4};

        try {
            System.out.println(arr[6]);
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Array Index not found");
        }catch(ArithmeticException e){
            System.out.println("");
        }finally{
            System.out.println("Hiii");
            System.out.println("hello");
        }
  
    }
}
