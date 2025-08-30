public class Prob1 {
    public static void main(String[] args) {
        int arr[] = {1, 2, 3, 1};
        boolean flag = false;

        for (int i = 0; i < arr.length - 1; i++) { 
            for (int j = i + 1; j < arr.length; j++) { 
                if (arr[i] == arr[j]) {
                    flag = true;
                    break;
                }
            }
            if (flag) break;
        }

        System.out.println("Contains duplicate? " + flag);
    }
}
