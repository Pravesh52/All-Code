public class Selection {
    public static void main(String[] args) {
        int arr[]={7,8,5,1,2};
        int ans[]=new int[arr.length];

        for(int i=0;i<arr.length-1;i++)
        {
            int smallest=i;
            for(int j=i+1;j<arr.length;j++)
            {
                if(arr[smallest]>arr[j])
                {
                    smallest=j;
                }
            }
            int temp=arr[smallest];
            arr[smallest]=arr[i];
            arr[i]=temp;

        }
        for(int k=0;k<ans.length;k++)
        {
            System.out.println(arr[k]);
        }
    }
}
