import java.util.Scanner;

public class lucky {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);

        int n=sc.nextInt();

        int firstvalue=n/10;
        int secondvalue=n%10;

        if(firstvalue == 0 || secondvalue == 0 || (firstvalue%secondvalue==0 || secondvalue%firstvalue==0))
        {
            System.out.println("YES");
        }else{
            System.out.println("NO");
        }
    }
    
}
