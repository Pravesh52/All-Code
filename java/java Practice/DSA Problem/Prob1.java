// package DSA Problem;
//Count Odd and Even
/*Examples: 
Input: arr = [2, 3, 4, 5, 6]
Output: 2 3 
Explanation: There are two odds[3, 5] and three even[2, 4, 6] present in the array.

Input: arr = [22, 32, 42, 52, 62]
Output: 0 5
Explanation: All the elements are even.
 */
 class oddeven{
    public void evenOrOdd(int arr[]){
        int counteven=0; int countodd=0;

        for(int i=0;i<arr.length;i++)
        {
            if(arr[i]%2==0){
                counteven++;
            }
            else{
                countodd++;
            }
        }
        System.out.println(countodd+" "+counteven);

    }
 }

 public class Prob1 {
    public static void main(String[] args) {
        int arr[]={22, 32, 42, 52, 62};
        oddeven obj = new oddeven();
        obj.evenOrOdd(arr);
    }
}
