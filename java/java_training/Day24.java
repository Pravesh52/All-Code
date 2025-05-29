import java.util.HashMap;

public class Day24 {
    public static void main(String[] args) {
        String str="programming";
        char[]ch=str.toCharArray();
        HashMap<Character ,Integer> map=new HashMap<>();
        for(char i :ch){
            map.put(i, map.getOrDefault(i, 0)+1);
        }
        System.out.println(map);
    }
}
