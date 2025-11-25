import java.util.Scanner;

public class Histogram {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        char S = sc.next().charAt(0); 
        int N = sc.nextInt();        

        for (int i = 0; i < N; i++) {
            int X = sc.nextInt();     
            
            
            for (int j = 0; j < X; j++) {
                System.out.print(S);
            }
            System.out.println(); 
        }
    }
}
