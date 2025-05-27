//Program to print the given digit in words

/* Examples: 

Input: N = 1234 
Output: One Two Three Four 
Explanation: 
Every digit of the given number has been converted into its corresponding word.

Input: N = 567 
Output: Five Six Seven */

public class Prob3 {
    public static void main(String[] args) {
        String n = "1234";
        for(int i = 0; i<n.length(); i++){
            char digit = n.charAt(i);
            switch(digit){
                case '0':
                System.out.print("Zero ");
                break;
                
                case '1':
                System.out.print("One ");
                break;

                case '2':
                System.out.print("Two ");
                break;
                
                case '3':
                System.out.print("Three ");
                break;
                
                case '4':
                System.out.print("Four ");
                break;
                
                case '5':
                System.out.print("Five ");
                break;
                
                case '6':
                System.out.print("Six ");
                break;
                
                case '7':
                System.out.print("Seven ");
                break;
                
                case '8':
                System.out.print("Eight ");
                break;
                
                case '9':
                System.out.print("Nine ");
                break;
                
            }
        }
        


        
        
    }
}
