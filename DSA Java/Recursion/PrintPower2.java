//Print x^n (with stack height = logn)
public class PrintPower2 {
    public static int PrintPower(int x , int n){
        if(n==0){
            return 1;
        }
        if(n%2==0){
          return PrintPower(x, n/2)*PrintPower(x, n/2);
        }else{
            return x*PrintPower(x, n/2) *PrintPower(x, n/2);
        }

    }
    public static void main(String[] args) {
        int x=2,n=5;
        int output=PrintPower(x, n);
        System.out.println(output);

    }
}
