public class Rotate {
    public static void main(String[] args) {
        int arr[] = {1,2,3,4,5,6,7};
        int k = 3;
        int n = arr.length;
        int result[] = new int[n];

        k = k % n;

        // Shift last k elements to front
        for (int i = 0; i < k; i++) {
            result[i] = arr[n - k + i];
        }

        // Shift remaining elements
        for (int i = k; i < n; i++) {
            result[i] = arr[i - k];
        }

        
        for (int j = 0; j < n; j++) {
            System.out.print(result[j]+" ");
        }
    }
}
