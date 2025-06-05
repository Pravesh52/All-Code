//Two Sum - Pair with given Sum

public class Prob3 {
   public static void main(String[] args) {
     int arr[]={0, -1, 2, -3, 1};
     int target=-2;

     

     for(int i=0;i<arr.length-1;i++)
     {
        if(arr[i]+arr[i+1]==target){
            System.out.println("true");
            return;
        }
    }
    System.out.println("false");
 } 
}
