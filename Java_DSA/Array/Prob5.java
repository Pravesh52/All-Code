//Find duplicate 

import java.util.Arrays;

public class Prob5 {
    public static void main(String[] args) {
        int arr[]={1, 2, 3, 6, 3, 6, 1,3};

        for(int i=0;i<arr.length;i++){
            for(int j=0;j<arr.length-i-1;j++)
            {
                if(arr[j]>arr[j+1])
                {
                    int temp=arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                }
            }
        }
         //int count =0;
        for(int i=0;i<arr.length-1;i++)
        {
           
            if(arr[i]==arr[i+1])
            {
                System.out.println(arr[i]);
                
                while(arr[i]==arr[i+1])
                {
                    i++;
                }
            }
        }
    
    }
}
