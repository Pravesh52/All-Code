//Q8. Kadane's Algorithm - Maximum Subarray Sum

public class Prob13 {
    public static void main(String[] args) {
        int arr[]={2, 3, -8, 7, -1, 2, 3};
        int maxsum=Integer.MIN_VALUE;

        for(int i=0;i<arr.length;i++){
            int sum=0;
            for(int j=i;j<arr.length;j++)
            {
                sum+=arr[j];
                maxsum=Math.max(sum,maxsum);
            }
        }
        System.out.println(maxsum);
    }
}
