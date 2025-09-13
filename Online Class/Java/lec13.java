//Topic: String Builder

import java.util.*;
public class lec13 {
    public static void main(String[] args) {
        //Declaration

        // StringBuilder sb=new StringBuilder("Pravesh Tiwari");
        // System.out.println(sb);

        //Get A character from index

        // StringBuilder sb=new StringBuilder("Tony");
        // System.out.println(sb.charAt(0));

        //Set a character at index
        //StringBuilder sb=new StringBuilder("Tony");
        // sb.setCharAt(0, 'P');
        // System.out.println(sb);

        //Insert
        // sb.insert(0, 's');
        // System.out.println(sb);

        //Delete

        // sb.delete(0, 1);
        // System.out.println(sb);

        //Append

        // sb.append(" "+"stark");
        // System.out.println(sb+" ");

        //length of string
        // System.out.println(sb.length());

        //Reverse a string
        StringBuilder sb=new StringBuilder("Hello world");
        for(int i=0;i<sb.length()/2;i++)
        {
            int front=i;
            int back=sb.length()-i-1;

            char frontchar=sb.charAt(front);
            char backchar=sb.charAt(back);

            sb.setCharAt(front, backchar);
            sb.setCharAt(back, frontchar);


        }
        System.out.println(sb);
    }
}
