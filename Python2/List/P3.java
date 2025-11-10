public class P3 {
    public static void main(String[] args) {
        int arr[] = {1, 0, 2, 3};
        int result[] = new int[arr.length];
        int j = 0;

        for (int i = 0; i < arr.length; i++) {
            if (arr[i] != 0) {
                result[j++] = arr[i];
            }
        }

       
        while (j < arr.length) {
            result[j++] = 0;
        }

        
        for (int k = 0; k < result.length; k++) {
            System.out.print(result[k] + " ");
        }
    }
}
