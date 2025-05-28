//Perfect square
public class Prob8 {
    public static void main(String[] args) {
        int n=36;

        for(int i=1;i*i<=n;i++)
        {
            if(i*i==n)
            {
                System.out.println(i);
                System.out.println("true");
                return;
            }
           
        }
        System.out.println("false");
    }
}
