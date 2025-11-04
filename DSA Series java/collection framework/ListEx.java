import java.util.ArrayList;
import java.util.*;

public class ListEx {
    public static void main(String[] args) {
        List<String> fruits=new ArrayList<>();
        fruits.add("Apple");
        fruits.add("Mango");
        fruits.add("Banana");
        fruits.add("Apple");
        
        System.out.println(fruits);

        
        fruits.remove(2);
        System.out.println(fruits);
        System.out.println(fruits.size());

        
    }
}
