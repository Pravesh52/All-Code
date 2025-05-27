//collection Framework

import java.util.ArrayList;
import java.util.Scanner;
import java.util.Collections;
public class Day22 {
    public static void main(String[] args) {
     ArrayList<String> arr=new ArrayList<>();
    // arr.add("rahul");
    // arr.add("rohit");
    // arr.add("Pravesh");
    // arr.add(3,"jain");
    // System.out.println(arr);
    // System.out.println(arr.get(2));
    // System.out.println(arr.clone());
     //Scanner sc = new Scanner(System.in);
    //String a=sc.next();

    arr.add("a");
    arr.add("B");
    arr.add("D");
    Collections.sort(arr);
    System.out.println(arr);
    


    }
}
