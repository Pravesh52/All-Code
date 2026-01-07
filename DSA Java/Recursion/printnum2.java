//Print the number 1 to 5

public class printnum2 {
    public static void printnumber(int n){
        if(n==6){
            return;
        }
        System.out.println(n);
        printnumber(n+1);
    }
    public static void main(String[] args) {
        printnumber(0);
    }
}
