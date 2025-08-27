//check the number is prime or not prime

public class Prob16 {
    public static void main(String[] args) {
        int arr[] = {45, 46, 52, 8, 4, 7, 11};

        String primes = "";
        String nonPrimes = "";

        for (int k = 0; k < arr.length; k++) {
            int num = arr[k];
            boolean isPrime = true;

            if (num <= 1) {
                isPrime = false;
            } else {
                for (int i = 2; i<=Math.sqrt(arr[i]); i++) {  
                    if (num % i == 0) {
                        isPrime = false;
                        break;
                    }
                }
            }

            if (isPrime) {
                primes += num + " ";
            } else {
                nonPrimes += num + " ";
            }
        }

        System.out.println("Prime numbers: " + primes);
        System.out.println("Not prime numbers: " + nonPrimes);
    }
}
