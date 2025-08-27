//6. Find the second largest element in an array.

import java.util.Arrays;

public class Prob18 {
    public static void main(String[] args) {
        int arr[]={12,45,78,96,63};
        Arrays.sort(arr);
        for(int i=arr.length-2;i>=0;i--)
        {
            if(arr[i]!=arr[arr.length-1])
            {
                System.out.println(arr[i]);
                break;
            }
        }
    }
}
