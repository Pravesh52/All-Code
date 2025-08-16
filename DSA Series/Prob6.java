//•	Minimum time visiting all points 
import java.util.Arrays;
import java.util.*;
public class Prob6 {
    public static void main(String[] args) {
        int [][] arr={{3,2},{-2,2}};
        int total_time=0;

        for(int i=0;i<arr.length-1;i++)
        {
            int x1 = arr[i][0];
            int y1 = arr[i][1];
            int x2 = arr[i+1][0];
            int y2 = arr[i+1][1];

            total_time+=Math.max(Math.abs(x2-x1), Math.abs(y2-y1));
        }
        System.out.println("Minimum time visiting points:"+total_time);
    }
}
