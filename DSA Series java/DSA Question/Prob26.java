//Merge two sorted arrays into one.

import java.util.Arrays;

public class Prob26 {
    public static void main(String[] args) {
        int arr1[] = {1, 3, 5, 7};
        int arr2[] = {2, 4, 6, 8};

        int n1 = arr1.length;
        int n2 = arr2.length;

        int arr3[] = new int[n1 + n2];

        for (int i = 0; i < n1; i++) {
            arr3[i] = arr1[i];
        }

        for (int i = 0; i < n2; i++) {
            arr3[n1 + i] = arr2[i];
        }

        Arrays.sort(arr3);

        System.out.println("Merged Array: " + Arrays.toString(arr3));
    }
}
