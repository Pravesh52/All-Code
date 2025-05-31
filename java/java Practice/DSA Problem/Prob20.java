//Check if an Array is Sorted
// Examples: 

// Input: arr[] = [20, 21, 45, 89, 89, 90]
// Output: Yes

// Input: arr[] = [20, 20, 45, 89, 89, 90]
// Output: Yes

// Input: arr[] = [20, 20, 78, 98, 99, 97]
// Output: No


public class Prob20 {
    public static void main(String[] args) {
       int arr[]={20, 45, 21, 89, 89, 90};
       boolean b=true;

       for(int i=0;i<arr.length-1;i++)
       {
        if(arr[i]>arr[i+1])
        {
            b=false;
            break;
        }

       }
       System.out.println(b);
    }
}
