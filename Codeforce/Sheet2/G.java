import java.util.Scanner;

public class G {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int a = sc.nextInt();  
        
        while (a> 0) {
            int N = sc.nextInt();
            long fact = 1;

            for (int i = 1; i <= N; i++) {
                fact *= i;
            }
            a--;

            System.out.println(fact);
        }
    }
}
