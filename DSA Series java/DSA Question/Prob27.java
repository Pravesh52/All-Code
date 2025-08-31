//Count the frequency of elements in an array.
import java.util.*;
public class Prob27 {
    public static void main(String[] args) {
        int arr[]={1,2,2,3,1,4,5};
    
        int max=0;
    
        for(int i=0;i<arr.length-1;i++)
        {
            for(int j=i+1;j<arr.length;j++)
            {
                if(arr[i]<arr[j])
                {
                    max=arr[j];
                    break;
                }
            }
    
        }
        System.out.println("Maximum frequency: "+max);
        
    }
}
