//Print the factorial number using recursion

public class factorial {
    public static void printfact(int n, int fact){
        if(n==0){
            System.out.println(fact);
            return;
        }
        fact*=n;
        printfact(n-1, fact);
    }
    public static void main(String[] args) {
        printfact(5, 1);
    }
}
