//•	Squares of a sorted array 
import java.util.Arrays;
public class Prob9 {
  public static void main(String[] args) {
    int arr[]={-4,-1,0,3,10};

    int ans[]=new int [arr.length];

    for(int i=0;i<arr.length;i++)
    {
        ans[i]=arr[i]*arr[i];
    }
    Arrays.sort(ans);

    for(int i=0;i<ans.length;i++)
    {
        System.out.println(ans[i]+" ");
    }

  }  
}