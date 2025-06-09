//Kth max and min value of array

public class Prob11 {
    public static void main(String[] args) {
        int arr[]={1,2,7,6,56};

        int max=arr[0];
        int min=arr[0];

        for(int i=1;i<arr.length;i++)
        {
            if(arr[i]<0)
            {
                min=arr[i];
            }
            if(arr[i]>0)
            {
                max=arr[i];
            }
        }
        System.out.println("Maximum value: "+max);
        System.out.println("Minimum value: "+min);
    }
}
