import java.util.Scanner;

public class D {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);

        
        while (true) {
            long x=sc.nextLong();

            if(x==1999)
            {
                System.out.println("Correct");
                break;
            }else{
                System.out.println("Wrong");
              
            }
            
            
        }
    }
}
