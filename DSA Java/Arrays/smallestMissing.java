//Find the smallest missing positive number. 
public class smallestMissing {
    public static void main(String[] args) {
        int arr[]={3,4,-1,1};
        int n=arr.length;

        for(int i=0;i<n;i++)
        {
            while(arr[i] > 0 && arr[i]<=n && arr[arr[i]-1]!=arr[i]){
                int temp=arr[i];
                arr[i]=arr[temp-1];
                arr[temp-1]=temp;
            }
        }
        int ans=n+1;

        for(int i=0;i<n;i++)
        {
            if(arr[i] != i+1){
                ans=i+1;
                break;
            }
        }
        System.out.println(ans);
    }
}
