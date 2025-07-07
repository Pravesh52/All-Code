//Maximum Product Subarray
public class Prob20 {
    public static void main(String[] args) {
        int arr[]={2, 3, -2, 4};
        int max=arr[0];
        int curr_max=arr[0];
        int curr_min=arr[0];

        for(int i=1;i<arr.length;i++)
        {
            if(arr[i]<0)
            {
                int temp=curr_max;
                curr_max=curr_min;
                curr_min=temp;
            }

            curr_max=Math.max(arr[i],curr_max*arr[i]);
            curr_min=Math.min(arr[i],curr_min*arr[i]);

            max=Math.max(curr_max, max);
        }
        System.out.println(max);
    }
}
