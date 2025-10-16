import java.util.Arrays;

public class Prob6 {
    public static void main(String[] args) {
        int nums[] = {-1, 0, 1, 2, -1, -4};
        Arrays.sort(nums); // Sort array first
        int n = nums.length;
        
        System.out.println("Triplets that sum to 0:");
        
        for (int i = 0; i < n - 2; i++) {
            // Skip duplicates for i
            if (i > 0 && nums[i] == nums[i - 1]) continue;

            int left = i + 1;
            int right = n - 1;

            while (left < right) {
                int sum = nums[i] + nums[left] + nums[right];

                if (sum == 0) {
                    // Print the triplet directly
                    System.out.println(nums[i] + " " + nums[left] + " " + nums[right]);

                    left++;
                    right--;

                    // Skip duplicates for left
                    while (left < right && nums[left] == nums[left - 1]) left++;
                    // Skip duplicates for right
                    while (left < right && nums[right] == nums[right + 1]) right--;

                } else if (sum < 0) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }
}
