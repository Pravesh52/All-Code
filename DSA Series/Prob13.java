//1. Find the maximum element in an array.

public class Prob13 {
    public static void main(String[] args) {
        int arr[]={1,5,8,4,6,4};
        int max=arr[0];

        for(int i=1;i<arr.length;i++)
        {
             if(arr[i]>max)
                {
                    max=arr[i];
                }
            
        }

        System.out.println("Max Element: "+max);
    }
}
