//Product of Array Except Self
// Example: 

// Input: arr[] = [10, 3, 5, 6, 2]
// Output: [180, 600, 360, 300, 900]
// Explanation: 

// For i=0, res[i] = 3 * 5 * 6 * 2 is 180.
// For i = 1, res[i] = 10 * 5 * 6 * 2 is 600.
// For i = 2, res[i] = 10 * 3 * 6 * 2 is 360.
// For i = 3, res[i] = 10 * 3 * 5 * 2 is 300.
// For i = 4, res[i] = 10 * 3 * 5 * 6 is 900.

public class Prob6 {
    public static void main(String[] args) {
        int arr[]={10, 3, 5, 6, 2};

        int result=new int[arr.length];

        for(int i=0;i<arr.length;i++){
              int temp = 1;
            for(int j=0;j<arr.length;j++)
            {
                    if(i==j)
                    continue;

                    temp = temp*arr[j];
            }
            
           result[i] = temp;
            
        }
        for(int i=0;i<result;i++)
        {
            System.out.println(result[i]);
        }

        
        
        


    }
}
