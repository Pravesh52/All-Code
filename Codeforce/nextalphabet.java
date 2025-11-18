import java.util.Scanner;

public class nextalphabet {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);

        char c = sc.next().charAt(0);   

        char next;

        if (c == 'z') {
            next = 'a';               
        } else {
            next = (char)(c + 1);       
        }

        System.out.println(next);
    }
}
