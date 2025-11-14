//
import java.util.Scanner;

public class Character {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        char x = sc.next().charAt(0);

        if (x >= 'a' && x <= 'z') {
            System.out.println((char)(x - 32));  
        } else {
            System.out.println((char)(x + 32));  
        }
    }
}
