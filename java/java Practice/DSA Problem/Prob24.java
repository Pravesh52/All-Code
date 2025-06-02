//Segregate 0s and 1s in an array

public class Prob24 {
    public static void main(String[] args) {
        int arr[]={0,1,1,0,1,0};
        int countzero=0;
        //count the 0 no.
        for(int i=0;i<arr.length;i++)
        {
            if(arr[i]==0)
            {
                countzero++;
            }
        }
        for(int i=0;i<countzero;i++)
        {
            arr[i]=0;
        }
        for(int i=countzero;i<arr.length;i++)
        {
            arr[i]=1;
        }

        for(int i=0;i<arr.length;i++)
        {
            System.out.println(arr[i]+" ");
        }


        
       
    }
}
