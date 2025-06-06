//Maximum Subarray Sum - Kadane's Algorithm

//Input: arr[] = {2, 3, -8, 7, -1, 2, 3}
// Output: 11
// Explanation: The subarray {7, -1, 2, 3} has the largest sum 11.
import java.lang.*;
public class Prob7 {
    public static void main(String[] args) {
        int arr[]={2, 3, -8, 7, -1, 2, 3
        };

        int maxsum=Integer.MIN_VALUE;

        for(int i=0;i<arr.length;i++)
        {
            int sum=0;
            for(int j=i;j<arr.length;j++)
            {
                sum+=arr[j];
                maxsum= Math.max(sum,maxsum);
            }
            

        }
        System.out.print(maxsum);
    }
    
}
