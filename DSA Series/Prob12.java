//•	Missing in Array

import java.util.Arrays;

public class Prob12 {
    public static void main(String[] args) {
        int arr[]={1,3,2,5,7};
        boolean flag=false;

        for(int i=0;i<arr.length;i++)
        {
            for(int j=0;j<arr.length-1-i;j++)
            {
                if(arr[j]>arr[j+1])
                {
                    int temp=arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;


                }
            }
        }
        //this made funtion are used directly sorting;
        //Arrays.sort(arr);
        System.out.print("Missing Numbers: ");

        for(int i=0;i<arr.length-1;i++)
        {
           int current=arr[i];
           int next=arr[i+1];

           for(int j=current+1;j<next;j++)
           {
             System.out.print(j+" ");
             flag=true;
           }
        }
        if(!flag)
        {
            System.out.println("none");
        }

    }
}
