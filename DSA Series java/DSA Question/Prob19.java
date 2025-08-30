//Check if a string is a palindrome

public class Prob19 {
    public static void main(String[] args) {
        String str="PrarP";

        int left=0;
        int right=str.length()-1;

        boolean ispalindrome=true;

       while(left<right)
       {
        if(str.charAt(left)!=str.charAt(right))
        {
            ispalindrome=false;
            break;
        }
        left++;
        right--;
       }
       if(ispalindrome)
       {
        System.out.println("string palindrome: "+str);
       }else{
        System.out.println("String not palindrome: "+str);
       }
    }
}
