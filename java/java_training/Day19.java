public class Day19 {
    //move all 0 to beginning and negative to middle and postive to last 
    public static void main(String[] args) {
        
        
        // int arr[]={-4,0,5,5,0,0,-5};
        // int ans[] = new int[arr.length];
        // int idx = 0;
        // for(int i=0;i<arr.length;i++)
        // {
        //     if(arr[i]==0)
        //     {
        //         ans[idx] = arr[i];
        //         idx++;
        //     }
        // }
        // for(int i=0;i<arr.length;i++)
        // {
        //     if(arr[i]<0)
        //     {
        //         ans[idx] = arr[i];
        //         idx++;
        //     }
        // }
        // for(int i=0;i<arr.length;i++)
        // {
        //     if(arr[i]>0)
        //     {
        //         ans[idx] = arr[i];
        //         idx++;
        //     }
        // }

        // for(int j=0;j<ans.length;j++)
        // {
        //     System.out.println(ans[j]);
        // }


        //2.cyclic left rotation

        // int arr[]={1,2,3,4,5};
        // int temp=arr[arr.length-1];

        // for(int i=arr.length-1;i>0;i--)
        // {
        //     arr[i]=arr[i-1];
        // }
        // arr[0]=temp;
          
        // for(int j=0;j<arr.length;j++)
        // {
        //     System.out.print(arr[j]);
        // }

        //2.cyclic right rotation

        int arr[]={1,2,3,4,5};
        int temp=arr[0];

        for(int i=0;i<arr.length-1;i++)
        {
            arr[i]=arr[i+1];
        }
        arr[arr.length-1]=temp;

        for(int j=0;j<arr.length;j++)
        {
            System.out.println(arr[j]);
        }


    }
}
