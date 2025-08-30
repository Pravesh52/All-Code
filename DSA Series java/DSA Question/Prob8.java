//•	Best time to by and sell stock 

public class Prob8 {
    public static void main(String[] args) {
        int prices[]={7,1,5,3,6,4};

        int minprices=prices[0];
        int maxprofit=0;

        for(int i=1;i<prices.length;i++)
        {
            int profit=prices[i]-minprices;

            if(profit>maxprofit)
            {
                maxprofit=profit;
            }

            if(prices[i]<minprices)
            {
                minprices=prices[i];
            }
        }
        System.out.println(maxprofit);
        System.out.println(minprices);


    }
}
