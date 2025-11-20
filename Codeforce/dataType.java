import java.util.Scanner;

public class dataType {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        // Step 1: Input n, k, a
        long n = sc.nextLong();
        long k = sc.nextLong();
        long a = sc.nextLong();

       double value = n * k;
       if(value % a != 0){
        System.out.println("double");
       }
       else{
        if (value/a >= Integer.MIN_VALUE && value/a <= Integer.MAX_VALUE) {
            System.out.println("int");
        } 
        else {
            System.out.println("long long");
        } 
       }

        // if(value )
      
        // if (value >= Integer.MIN_VALUE && value <= Integer.MAX_VALUE) {
        //     System.out.println("int");
        // } 
        
        // else if (value >= Long.MIN_VALUE && value <= Long.MAX_VALUE) {
        //     System.out.println("long long");
        // } 
   
        // else {
        //     System.out.println("double");
        // }
    }
}
