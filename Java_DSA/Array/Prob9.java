//reverse an array in place

public class Prob9 {
    public static void main(String[] args) {
        int arr[]={1,85,74,63,23};
        int temp;
        int i=0;
        int j=arr.length-1;

        while(i<j){
            temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
            i++;
            j--;
        }
        System.out.println("Reverse Array: ");
        
        for(int k=0;k<arr.length;k++)
        {
            System.out.println(arr[k]);
        }

        
        
        
    }
}
