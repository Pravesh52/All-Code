//•	Peak index mountain in array.

public class Prob11 {
    public static void main(String[] args) {
        int arr[]={0,1,8,9,5,2};

        int st=1;
        int end=arr.length-2;

        while(st<=end)
        {
            int mid=st+(end-st)/2;

            if(arr[mid-1]<arr[mid]&& arr[mid]>arr[mid+1])
            {
                System.out.println("Peak Element:"+arr[mid]);
                break;
            }else if(arr[mid-1]<arr[mid])//right
            {
                st=mid+1;
            }else{ //left
                end=mid-1;
            }

        }
    }
}
