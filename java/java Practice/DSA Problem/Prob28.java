//Display the longest name

public class Prob28 {
    public static void main(String[] args) {
        String arr[]={"PraveshTiwari","AnkitPal"};

        int max=0;
        int idx=0;

        for(int i=0;i<arr.length;i++)
        {
            if(arr[i].length()>max)
            {
                max=arr[i].length();
                idx=i;
            }
        }
        System.out.println(arr[idx]);
    }
}
