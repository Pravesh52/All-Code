//package DSA Problem;

//Average of an array
/*Input : arr[] = {1, 2, 3, 4, 5}
Output : 3
Sum of the elements is 1+2+3+4+5 = 15 
and total number of elements is 5.
So average is 15/5 = 3

Input : arr[] = {5, 3, 6, 7, 5, 3}
Output : 4.83333
Sum of the elements is 5+3+6+7+5+3 = 29
and total number of elements is 6.
So average is 29/6 = 4.83333.*/

class average{
    public static double Average(int arr[],int n){
        int sum=0;
        for(int i=0;i<n;i++)
        {
            sum+=arr[i];
        }
        
        return sum/n;
    }
    
}

public class Prob2 {
    public static void main(String[] args) {
        int arr[]={1, 2, 3, 4, 5};
        int n=arr.length;
        average obj=new average();
        double m = obj.Average(arr,n);
        System.out.println(m);
       
    }
}
