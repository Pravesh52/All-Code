//Print x^n (with stack height =n)

public class printpower {
    public static int PrintPower(int x ,int n){
        if(n==0){
            return 1;
        }
        if(x==1){
            return 0;
        }
        int x_=PrintPower(x,n-1);
        int xn=x*x_;
        return xn;
    }
    public static void main(String[] args) {
        int x=2, n=3;
        int output=PrintPower(x,n);
        System.out.println(output);
    }
}
