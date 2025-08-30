//Reverse a given string.

public class Prob15 {
    public static void main(String[] args) {
        String str="Pravesh";
        String ans=" ";

        for(int i=str.length()-1;i>=0;i--)
        {
            ans+=str.charAt(i);
        }
        System.out.println("Reverse string: "+ans);

    }
}
