//2. Count the number of even and odd numbers in a list and even and odd number print

public class Prob14 {
    public static void main(String[] args) {
        int arr[]={1,2,3,4,5,6,7,8,9,10};

        int evenCount = 0;
        int oddCount = 0;

        System.out.print("Even numbers: ");
        for(int i=0; i<arr.length; i++) {
            if(arr[i] % 2 == 0) {
                System.out.print(arr[i] + " ");
                evenCount++;
            }
        }
        System.out.println("\nTotal Even numbers: " + evenCount);

        System.out.print("Odd numbers: ");
        for(int i=0; i<arr.length; i++) {
            if(arr[i] % 2 != 0) {
                System.out.print(arr[i] + " ");
                oddCount++;
            }
        }
        System.out.println("\nTotal Odd numbers: " + oddCount);
    }
}

