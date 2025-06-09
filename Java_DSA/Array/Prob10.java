// Move all negative numbers to beginning and positive to end

public class Prob10 {
    public static void main(String[] args) {
        int arr[]={45,-5,85,86,-6,-8};
        
        int temp;
        int j=0;

        for(int i=0;i<arr.length;i++)
        {
            if(arr[i]<0)
            {
                if(i!=j)
                {
                    temp=arr[i];
                    arr[i]=arr[j];
                    arr[j]=temp;
                    j++;
                }
            }
        }
        for(int k=0;k<arr.length;k++)
        {
            System.out.println(arr[k]);
        }

    }
}
