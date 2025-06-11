//9. Check if array is sorted and rotated

public class Prob14 {
    public static void main(String[] args) {
        int arr[]={4,5,1,2,3};

        //array sorted
        // for(int i=0;i<arr.length;i++)
        // {
        //     for(j=0;j<arr.length-i-1;j++)
        //     {
        //         if(arr[j]>arr[j+1])
        //         {
        //             int temp=arr[j];
        //             arr[j]=arr[j+1];
        //             arr[j+1]=temp;
        //         }
        //     }
        // }

        //check the array is rotated 
        int count=0;
        for(int i=0;i<arr.length-1;i++)
        {
            if(arr[i]>arr[i+1])
            {
                count++;
            }
        }
        if(count>1)
        {
            System.out.println("Not sorted and rotated");
        }
        else if(count == 1){
            System.out.println("Sorted and rotated");
        }
        else
        System.out.println("sorted array");

    }
}
