import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;

public class Day30 {
    public static void main(String[] args) {
        ArrayList<String>list=new ArrayList<>();
        list.add("Anand");
        list.add("Pravesh");
        list.add("Ankit");

        // Collections.sort(list,new Comparator<String>(){
        //     public int compare(String a,String b){
        //         return a.compareTo(b);
        //     }
        // });

        Collections.sort(list,(a,b)->a.compareTo(b));
        
        System.out.println(list);

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
    }
}
