// Write a function to reverse a string.

public class Prob4 {
    public static void main(String[] args) {
        String str="Pravesh";

        String ans=" ";

        for(int i=str.length()-1;i>=0;i--)
        {
            ans=ans+str.charAt(i);
        }

        System.out.println(ans);

    }
}
