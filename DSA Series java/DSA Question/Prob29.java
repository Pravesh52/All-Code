//15. Remove duplicate elements from an array.

import java.util.Arrays;

public class Prob29 {
    public static void main(String[] args) {
        int arr[] = {7, 8, 5, 7, 1, 2, 8};

        
        Arrays.sort(arr);

        
        int temp[] = new int[arr.length];
        int j = 0;

       
        for (int i = 0; i < arr.length - 1; i++) {
            if (arr[i] != arr[i + 1]) {
                temp[j] = arr[i];
                j++;
            }
        }

        // Add last element (always unique after loop)
        temp[j] = arr[arr.length - 1];
        j++;

        // Print result
        System.out.println("Array after removing duplicates:");
        for (int i = 0; i < j; i++) {
            System.out.print(temp[i] + " ");
        }
    }
}

