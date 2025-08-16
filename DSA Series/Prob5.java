//•	How many numbers are smaller than the current number 

public class Prob5 {
    public static void main(String[] args) {
        int arr[]={5,6,7,8,9};
        int n=6;

        for(int i=0;i<arr.length;i++)
        {
            if(arr[i]<n)
            {
                System.out.println(arr[i]+" ");
            }
        }
    }
}
