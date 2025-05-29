//GCD and Lcm

public class Prob9 {
    public static void main(String[] args) {
        int a=10;
        int b=20;
        int x=a;
        int y=b;


        while(b!=0)
        {
            int temp=b;
            b= b%a;
            temp=a;
        }
        int GCD=a;
        
        int lcm=(x*y)/GCD;

        System.out.println("GCD is: "+GCD);
        System.out.println("LCM is: "+lcm);
    }
}
