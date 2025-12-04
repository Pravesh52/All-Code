import java.util.Scanner;

public class Z {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);

        int a=sc.nextInt();
        int b=sc.nextInt();

        int count=0;

        for(int i=0;i<=a;i++)
        {
            for(int j=0;j<=a;j++)
            {
                int z=b-i-j;
                if(0<=z && z<=a){
                    count++;
                 }
            }
            
        }
        System.out.println(count);


     }
}
