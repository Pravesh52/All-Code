//. Merge two sorted arrays into one.
import java.util.Arrays;
public class Prob25 {
    public static void main(String[] args) {
        int arr1[]={1,3,2,5,4};
        int arr2[]={2,4,1,5,6};

        Arrays.sort(arr1);
        Arrays.sort(arr2);

        int n1=arr1.length;
        int n2=arr2.length;

        int arr3[]=new int[n1+n2];

        int i=0, j=0, k=0;

        while (i < n1 && j < n2) 
        {
            if (arr1[i] <= arr2[j])
            {
                arr3[k] = arr1[i];
                i++;
            } else
            {
                arr3[k] = arr2[j];
                j++;
            }
            k++;
        }

         while (i < n1) {
            arr3[k] = arr1[i];
            i++;
            k++;
        }
        while (j < n2) {
            arr3[k] = arr2[j];
            j++;
            k++;
        }

        System.out.print("Merged Sorted Array: ");
        for (int x = 0; x < arr3.length; x++) {
            System.out.print(arr3[x] + " ");
        }
    }
}
