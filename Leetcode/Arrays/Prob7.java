//3 Closest sum

import java.util.Arrays;

public class Prob7 {
    public static void main(String[] args) {
        int arr[]={-1,2,1,-4};
        int target=1;
        
        Arrays.sort(arr);

        int n=arr.length;

        int ClosestSum=arr[0]+arr[1]+arr[2];

        for(int i=0;i<n-2;i++)
        {
            int left=i+1;
            int right=n-1;

            while(left<right)
            {
                int sum = arr[i] + arr[left] + arr[right];

                if(Math.abs(sum-target)<Math.abs(ClosestSum-sum))
                {
                    ClosestSum=sum;
                }
                if(sum<target)
                {
                    left++;
                }else if(sum>target){
                    right--;
                }else{
                    ClosestSum=sum;
                    break;
                }
            }
        }
        System.out.println("Closest sum: "+ClosestSum);
    }
}
