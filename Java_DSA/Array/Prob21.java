//14. Longest Common Prefix

public class Prob21 {
    public static void main(String[] args) {
        String[] strs = {"flower", "flow", "flight"};
        if (strs.length == 0) {
            return "";
        } 

        String prefix = "";
        String first = strs[0];

        for (int i = 0; i < first.length(); i++) {
            char ch = first.charAt(i);
            boolean match = true;

            for (int j = 1; j < strs.length; j++) {
                if (i >= strs[j].length() || strs[j].charAt(i) != ch) {
                    match = false;
                    break;
                }
            }

            if (match) {
                prefix = prefix + ch; 
            } else {
                break;
            }
            
        }
        System.out.println(prefix);
    }
}
