//Sort an array of 0s, 1s, and 2s without extra space.

import java.util.Arrays;

public class sort {
    public static void main(String[] args) {
        int arr[]={0, 1, 2, 0, 1, 2};

        int result[]=new int[arr.length];
        int low=0;
        int mid=0;
        int high=arr.length-1;

        while(mid<=high)
        {
            switch(arr[mid]){
                // if arr of 0
                case 0: 
                  int temp0=arr[low];
                  arr[low]=arr[mid];
                  arr[mid]=temp0;
                  low++;
                  mid++;
                  break;
        // if arr 1 just move the pointer
                case 1:
                    mid++;
                    break;

        // if arr of 2
                 case 2:
                    int temp2=arr[high];
                    arr[high]=arr[mid];
                    arr[mid]=temp2;
                    high--;
                 break;



            }
        }

        

       


        


    }
}
