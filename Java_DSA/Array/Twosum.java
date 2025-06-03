
public class Twosum {
    public static void main(String[] args) {
        int arr[]={4,5,8,6,10};
        int target =9;
        for(int i=0;i<arr.length-1;i++)
        {
            if(arr[i]+arr[i+1]==target)
            {
                System.out.println(i+" "+(i+1));
            }
        }
    }
}
