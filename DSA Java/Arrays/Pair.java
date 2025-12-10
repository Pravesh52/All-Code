//Count pairs with a given sum. 
public class Pair {
    public static void main(String[] args) {
        int arr[]={1, 5, 7, -1, 5};
        int target=6;
        int count=0;

        for(int i=0;i<arr.length-1;i++){
            for(int j=i+1;j<arr.length;j++)
            {
                if(arr[i]+arr[j]==target)
                {
                    count++;
                }
            }
        }
        System.out.println(count);
    }
}
