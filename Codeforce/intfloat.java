import java.util.Scanner;

public class intfloat {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String n = sc.next();

        int dotIndex = -1;

        // find '.' manually (no functions like split or regex)
        for (int i = 0; i < n.length(); i++) {
            if (n.charAt(i) == '.') {
                dotIndex = i;
                break;
            }
        }

        // if '.' not found → integer
        if (dotIndex == -1) {
            System.out.println("int " + n);
            return;
        }

        // extract integer part manually
        String intPart = "";
        for (int i = 0; i < dotIndex; i++) {
            intPart += n.charAt(i);
        }

        // extract decimal part manually
        String decPart = "";
        for (int i = dotIndex + 1; i < n.length(); i++) {
            decPart += n.charAt(i);
        }

        // check if decimal part is all zeros
        boolean allZero = true;
        for (int i = 0; i < decPart.length(); i++) {
            if (decPart.charAt(i) != '0') {
                allZero = false;
                break;
            }
        }

        if (allZero) {
            System.out.println("int " + intPart);
        } else {
            System.out.println("float " + intPart + " 0." + decPart);
        }
    }
}
