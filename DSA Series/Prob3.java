//Find All Numbers Disappeared in an Array

public class Prob3 {
    public static void main(String[] args) {
        int arr[]={4,3,2,7,8,2,3,1};
        int n=8;

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
                System.out.print(i+" ");
            }
        }
    }
}
