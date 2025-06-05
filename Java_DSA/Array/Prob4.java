//Stock Buy and Sell - Max one Transaction Allowed

public class Prob4 {
    public static void main(String[] args) {
        int arr[]={7, 10, 1, 3, 6, 9, 2};

        //int x = Integer.MIN_VALUE;
    //     int x=0;
    //     for(int i=0;i<arr.length;i++)
    //     {
    //         for(int j=i+1;j<arr.length;j++)
    //         {
    //             if(arr[i]<arr[j])
    //             {
    //                 int ans=arr[j]-arr[i];
                   
    //                 if(ans > x){
    //                     x = ans;
    //                 }
                    
    //             }
    //         }
    //     }
    //    System.out.println(x);

    int minimum = arr[0];

    int maxprofit = 0;

    for(int i = 1; i < arr.length; i++)
    {
        if(arr[i]<minimum)
        {
            minimum = arr[i];
        }else{

            int profit = arr[i] - minimum;

            Math.max(maxprofit, profit);
        }
    }

    }
}
