//find string one is an anagram or string to or not

import java.util.Arrays;
import java.util.HashMap;

public class Day34 {
    public static void main(String[] args) {
        String str1="hello";
        String str2="llohe";
        int m=str1.length();
        int n=str2.length();

        if(m!=n)
        {
            System.out.println("not anagrams");
            return;
        }

        char s1[]=str1.toCharArray();
        char s2[]=str2.toCharArray();

        Arrays.sort(s1);
        Arrays.sort(s2);

        for(int i=0;i<m;i++)
        {
            if(s1[i]!=s2[i])
            {
                System.out.println("not a Anagram");
                return;
            }
        }
        System.out.println("anagram");

        
           

    }
}
