//Find the missing number in a range from 1 to N.

import java.util.Arrays;
import java.util.*;

public class Prob24 {
    public static void main(String[] args) {
        int arr[]={1,2,4,5,7};
        boolean flag=false;

        Arrays.sort(arr);
        System.out.print("Missing Array:");
        for(int i=0;i<arr.length-1;i++)
        {
            int current=arr[i];
            int next=arr[i+1];

            for(int j=current+1;j<next;j++)
            {
                System.out.print(j+" ");
                flag=true;
            }

        }
        if(!flag)
        {
            System.out.print("none");
        }

    }
}
