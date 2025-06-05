//meadian of two sorted array

import java.util.Arrays;

public class Prob2 {
    public static void main(String[] args) {
        int arr1[]={4,5,6,7,8,9};
        int arr2[]={7,6,5,3,8,5};

        int arr3[]= new int[arr1.length+arr2.length];

        int idx = 0;
        
        for(int i=0;i<arr1.length; i++)
        {
            arr3[idx++] = arr1[i];
        }
        for(int i=0;i<arr2.length; i++)
        {
            arr3[idx++] = arr2[i];
        }

        Arrays.sort(arr3);
        System.out.println("sorted Array: ");

        for(int i = 0; i<arr3.length; i++)
        {
            System.out.print(arr3[i] + " ");
        }
        System.out.println();
       System.out.println("Median of array: ");
        int n = arr3.length / 2;

        System.out.println(arr3[n]);

    




    }
}
