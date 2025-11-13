import java.util.Scanner;

public class Summation {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        long n = sc.nextLong();  
        long temp = (n * (n + 1)) / 2; 
        System.out.println(temp);
    }
}
