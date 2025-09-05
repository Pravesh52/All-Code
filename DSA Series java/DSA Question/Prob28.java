//14. Check if two strings are anagrams

import java.util.Arrays;

public class Prob28 {
    public static void main(String[] args) {
        String str1="anagram";
        String str2="nagaram";
        boolean flag=true;

         if (str1.length() != str2.length()) {
            System.out.println("False");
            return;
        }

        // Arrays.sort(str1);
        // Arrays.sort(str2);
        for(int i=0; i<str1.length(); i++){
            for(int j=0; j<str1.length()-1-i; j++){
                if(str[j]>str[j+1])
                {
                int temp=str[j+1];
                str[j+1]=str[j];
                str[j]=temp;
                }

            }
        }
        for(int i=0; i<str2.length(); i++){
            for(int j=0; j<str2.length()-1-i; j++){
                if(str[j]>str[j+1])
                {
                int temp=str[j+1];
                str[j+1]=str[j];
                str[j]=temp;
                }

            }
        }

        for(int i=0;i<str1.length();i++)
        {
            if(str1.charAt(i)!=str2.charAt(i))
            {
                flag=false;
                break;
            }
        }
        if(!flag)
        {
            System.out.println("false");
        }else{
            System.out.println("true");
        }
        
        


        

    }
}
