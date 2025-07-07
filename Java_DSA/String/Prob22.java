//package String;
//Check for palindrome

public class Prob22 {
    public static void main(String[] args) {
        String str="MADAM";
        boolean ispalindrone=true;

        for(int i=0;i<str.length()/2;i++)
        {
            if(str.charAt(i)!=str.charAt(str.length()-i-1))
            {
                ispalindrone=false;
                break;
            }
        }
        if(ispalindrone)
        {
            System.out.println("String is palindrome");
        }else{
            System.out.println("Not a Palindrome");
        }
    }
}
