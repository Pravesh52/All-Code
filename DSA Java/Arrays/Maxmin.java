//1. Find the maximum and minimum element in an array. 
public class Maxmin {
    public static void main(String[] args) {
        int arr[]={4, 2, 5, 1, 6, 3};
        int max=arr[0];
        int min=arr[0];

        for(int i=1;i<arr.length;i++)
        {
            if(arr[i]>max){
                max=arr[i];
            }
            if(arr[i]<min)
                min=arr[i];
        }
        System.out.println(max);
        System.out.println(min);
    }
}
