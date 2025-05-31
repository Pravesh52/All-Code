import java.util.ArrayList;
import java.util.Iterator;
import java.util.ListIterator;

public class Day25 {
    public static void main(String[] args) {
        ArrayList<String> list=new ArrayList<>();

        // list.add("Pravesh");
        // list.add("Anand");
        // list.add("Ankit");
        // list.add("Adarsh");

        // System.out.println(list);

    //   ListIterator<String>it=list.listIterator();
     //Iterator<String> list=new ArrayList();
        //System.out.println(it.hasNext());

        // while(it.hasNext()){
        //     String data=it.next();
        //     if(data.startsWith("P"))
        //     it.remove();
        // }
       //ystem.out.println(list);
    //   System.out.println("Next DATA : ");
    //    while(it.hasNext()){
    //         String data=it.next();
    //         System.out.println(data);
    //     }
    //  System.out.println("Previous DATA: ");
    //     while(it.hasPrevious()){
    //         String PrevData=it.previous();
    //         System.out.println(PrevData);
    //     }
    list.add("Pravesh");
    list.add("om");
    list.add("Ankit");
    list.add("as");
    
    
    ListIterator<String>it=list.listIterator();
    
   while(it.hasNext()){
    String data=it.next();
    if(data.length()<3){
        it.set("Bye");
    }
   }
   System.out.println(list);


   while(it.hasPrevious()){
    if(it.previous()!=list.get(0)){
        it.set("Hello");
    }
   }
   System.out.println(list);

   





        

        
    }
}
