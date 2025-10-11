//Write a program to check if a number is palindrome.

// Write a function to reverse a string.

// Write a function to find the largest number in an array.

// Print all even numbers between 1 to 100.

// Write a function to count vowels in a string.

public class Prob3 {
    public static void main(String[] args) {
        //Write a program to check if a number is palindrome.
        int n=121;
        int ans=0;
        int temp=n;

        while (n>0) {
            int reminder=n%10;
            ans=ans*10+reminder;
            n=n/10;
        }
        
        if(temp==ans)
        {
            System.out.println("number is palindrome");

        }else{
            System.out.println("number is not plaindrome");
        }
    }
}
