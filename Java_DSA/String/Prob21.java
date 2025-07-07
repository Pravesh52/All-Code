//package String;
// Reverse a string
public class Prob21 {
    public static void main(String[] args) {
        String str= "Pravesh Tiwari";
        String rev=" ";

        for(int i=str.length()-1;i>=0;i--)
        {
            rev=rev+str.charAt(i);
        }
        System.out.println("Reverse String:"+rev);
    }
}
