import java.util.ArrayList;
import java.util.Iterator;

public class Day25 {
    public static void main(String[] args) {
        ArrayList<String> list=new ArrayList<>();

        list.add("Pravesh");
        list.add("Anand");
        list.add("Ankit");
        list.add("Adarsh");

        System.out.println(list);

        Iterator<String> it=list.iterator();
        //System.out.println(it.hasNext());

        while(it.hasNext()){
            String data=it.next();
            if(data.startsWith("P"))
            it.remove();
        }
        System.out.println(list);
    }
}
