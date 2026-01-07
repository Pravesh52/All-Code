//Print the sum of first n natural number

public class printsum {
    public static void printSum(int sum ,int n){
        if(n==0){
            System.out.println(sum);
            return;
        }
        sum+=n;
        printSum(sum, n-1);
    }
    public static void main(String[] args) {
        printSum(0, 5);
    }
}
