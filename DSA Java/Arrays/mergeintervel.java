import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class mergeintervel {
    public static void main(String[] args) {
        int arr[][]={{1,3},{2,6},{8,10},{15,18}};

        if(arr.length==0){
            System.out.println("[]");
            return;
        }
        //first of sort the array

        Arrays.sort(arr,(a,b)->a[0]-b[0]);

        //list to store meged array

        List<int[]>result=new ArrayList<>();

        //Add first interval

        int[]current=arr[0];
        result.add(current);

        //traverse
        for(int i=1;i<arr.length;i++)
        {
            int[]next=arr[i];

            //check overlap
            if(current[1]>=next[0])
            {
                //merge kar do
                current[1]=Math.max(current[1],next[1]);

            }else{
                //no overlap
                current=next;
                result.add(current);
            }
        }

        System.out.println("Merge Interval: ");

        for(int[]arrr : result)
        {
            System.out.println(Arrays.toString(arrr));

        }
    }
}
