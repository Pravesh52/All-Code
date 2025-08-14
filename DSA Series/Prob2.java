//check the missing number yes/NO

public class Prob2 {
    public static void main(String[] args) {
        int arr[]={1,3,4,5,6};
        int n=6;
       // boolean flag=false;

        for(int i=1;i<=n;i++)
        {

            boolean flag=false;
            
            for(int j=0;j<arr.length;j++)
            {
                if(arr[j]==i)
                {
                    flag=true;
                    break;
                }
            }

            if(!flag)
            {
                System.out.println(i+" ");
            }
        }

    }
}
