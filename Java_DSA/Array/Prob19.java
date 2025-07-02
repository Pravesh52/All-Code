//Trapping Rain Water

public class Prob19 {
    public static void main(String[] args) {
        // This problem solves using the formula: min(lmax[i], rmax[i]) - height[i]
        int arr[] = {4, 2, 0, 3, 2, 5};
        int n = arr.length;

        int[] lmax = new int[n];
        int[] rmax = new int[n];

        lmax[0] = arr[0];
        rmax[n - 1] = arr[n - 1];

        for (int i = 1; i < n; i++) {
            lmax[i] = Math.max(lmax[i - 1], arr[i]);
        }

        
        for (int i = n - 2; i >= 0; i--) {
            rmax[i] = Math.max(rmax[i + 1], arr[i]);
        }

        int ans = 0;
        for (int i = 0; i < n; i++) {
            ans += Math.min(lmax[i], rmax[i]) - arr[i];
        }

        System.out.println(ans);
    }
}

