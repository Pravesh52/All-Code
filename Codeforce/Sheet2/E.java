import java.util.Scanner;

public class E {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();   
        long max = Long.MIN_VALUE; 

        for (int i = 0; i < n; i++) {
            long x = sc.nextLong();  

            if (x > max) {
                max = x;  
            }
        }

        System.out.println(max);  
    }
}
