//. Rearrange array in alternating positive & negative items

public class Prob15 {
    public static void main(String[] args) {
        int arr[]={3,1,-2,-5,2,-4};
        int ans[]=new int[arr.length];
        int posindex=0;
        int negindex=1;

        for(int i=0;i<arr.length;i++)
        {
            if(arr[i]>=0)
            {
                ans[posindex]=arr[i];
                posindex+=2;
            }else{
                ans[negindex]=arr[i];
                negindex+=2;
            }
        }
        for(int i=0;i<ans.length;i++)
        {
            System.out.println(ans[i]);
        }
        
    }
}
