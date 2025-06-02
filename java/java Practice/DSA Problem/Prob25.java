//Prime Numbers

public class Prob25 {
    public static void main(String[] args) {
        int  n=10;
        boolean b=true;
        if(n<=1)
        {
            b=false;
            System.out.println(b);
        }
        for(int i=0;i<n;i++)
        {
            if(n%2==0)
            {
                b=false;
            }
        }
        System.out.println(b);
        
    }
}
