public class Bubble {
    public static void main(String[] args) {
        int arr[]={8,7,5,1,2};

        int ans[]=new int[arr.length];

        for(int i=0;i<arr.length-1;i++)
        {
            for(int j=0;j<arr.length-i-1;j++)
            {
                if(arr[j]>arr[j+1])
                {
                    int temp=arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                }
            }
        }
        for(int k=0;k<ans.length;k++)
        {
            System.out.print(arr[k]+" ");
        }
    }
}
