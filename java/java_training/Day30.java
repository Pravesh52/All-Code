import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.*;
import java.util.stream.*;;

public class Day30 {
    public static void main(String[] args) {
        // ArrayList<String>list=new ArrayList<>();
        // list.add("Anand");
        // list.add("Pravesh");
        // list.add("Ankit");

        // Collections.sort(list,new Comparator<String>(){
        //     public int compare(String a,String b){
        //         return a.compareTo(b);
        //     }
        // });

        // Collections.sort(list,(a,b)->a.compareTo(b));
        
        // System.out.println(list);

        // Runnable r= new Runnable(){
        //     public void run(){
        //         System.out.println("Runnable class");
        //     }
        // };
        // r.run();
        //Second method to write upper expression
        // Runnable r=()->System.out.println("Runnable ising lembda");
        // r.run();
        //  Thread t1=new Thread(){
        //     public void run(){
        //         System.out.println("lembda ex");
        //     }
        //  };
        //  t1.start();


        // List<Integer>list=Arrays.asList(5,10,15,20,25);

        // List<Integer>evenList=list.stream().filter(n->n%2==0).collect(Collectors.toList());
        // List<Integer>multiply=list.stream().map(n->n*5).collect(Collectors.toList());
        // List<Integer>evenlistmultiply=list.stream().filter(n->n%2==0).map(n->n*5).collect(Collectors.toList());

                               
        // System.out.println(evenList);
        // System.out.println(multiply);
        // System.out.println(evenlistmultiply);

      List<Integer>list=Arrays.asList(15,20,25,30,35,45);

      int ans=list.stream().filter(n->n>2).filter(n->n%2==0).reduce(0,(a,b)->a+b);
      int maxvalue=list.stream().reduce(Integer.MIN_VALUE,(a,b)-> a>b?a:b);
      int minvalue=list.stream().reduce(Integer.MAX_VALUE,(a,b)-> a<b?a:b);

      System.out.println(ans);
      System.out.println(maxvalue);
      System.out.println(minvalue);
    }
}
