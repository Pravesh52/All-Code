public class insertion {
    public static void main(String[] args) {
        int arr[] = {7, 8, 5, 1, 2};

        for (int i = 1; i < arr.length; i++) {
            int current = arr[i];
            int j = i - 1;

            // shift larger elements to the right
            while (j >= 0 && current < arr[j]) {
                arr[j + 1] = arr[j];
                j--;
            }

            // place current in the right position
            arr[j + 1] = current;
        }

        // print sorted array
        for (int k = 0; k < arr.length; k++) {
            System.out.print(arr[k]+" ");
        }
    }
}
