public class LCMHCF {
    public static void main(String[] args) {
        int a=4;
        int b=5;
        int temp1=a;
        int temp2=b;

        while(b!=0)
        {
            int temp=b;
            b=a%b;
            a=temp;
        }

        int gcd=a;
        System.out.println("LCM: "+(temp1/gcd)*temp2);

        

        System.out.println("HCF: "+a);

    }
}
