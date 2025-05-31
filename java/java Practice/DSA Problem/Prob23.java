//

public class Prob23{
    public static void main(String[] args) {
         String str1="Jay Shri Ram";
         String str2 ="Ram";
         String temp="";
        for(int i=0;i<str1.length()-str2.length();i++){
            {
                for(int j=i;j<str2.length();j++){
                    temp=temp+str1.charAt(j);
                    if(str2==temp)
                    {
                        System.out.println("true");
                        return;
                    }
                    
                }
            }
        }
        System.out.println("False");
    }
}
