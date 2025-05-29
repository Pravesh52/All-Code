//Pattern
//Inverted half pyramid

public class Prob18 {
    public static void main(String[] args) {
        int n=4;

        //outer loop

        for(int i=0;i<=n;i++)
        {
            //Inner loop -- space print
            for(int j=1;j<=n-i;j++){
                System.out.print("-");
            }
            //inner loop-- print star
            for(int j=0;j<=i;j++)
            {
                System.out.print("*");
            }
            System.out.println();

        }
        
    }
}
