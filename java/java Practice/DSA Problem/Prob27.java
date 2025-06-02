//Second Largest Element in an Array

public class Prob27 {
    public static void main(String[] args) {
        int arr[]={10,40,20,45,42};
        //sorting
        int x = 2;
        for(int i=0;i<arr.length;i++){
            for(int j=0;j<arr.length-i-1;j++)
            {
                if(arr[j]>arr[j+1])
                {
                    int temp=arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                    // System.out.println(temp);
                }
            }
        }
        System.out.println(arr[arr.length-x]);
       
        
    }
}
