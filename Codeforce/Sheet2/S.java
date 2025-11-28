import java.util.Scanner;

public class S {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);

        int n=sc.nextInt();

        while(n>0)
        {
            int a=sc.nextInt();
            int b=sc.nextInt();

            int start=Math.min(a, b)+1;
            int end=Math.max(a, b);
            int sum=0;

            for(int i=start;i<end;i++)
            {
                if(i%2!=0)
                {
                    sum+=i;
                }
            }
            System.out.println(sum);
            n--;
        }
        





    }
}
