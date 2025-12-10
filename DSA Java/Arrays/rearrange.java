//Rearrange positive and negative numbers alternately
public class rearrange {
    public static void main(String[] args) {
         int arr[]={1,-2,-7,8,-1,5};

         int result[]=new int[arr.length];

         int positive[]=new int[arr.length];
         int negative[]=new int[arr.length];
         
         int pos=0;
         int neg=0;

         for(int i=0;i<arr.length;i++)
         {
            if(arr[i]>=0)
            {
                positive[pos++]=arr[i];
            }else{
                negative[neg++]=arr[i];
            }
         }

         int i=0, p=0, n=0;

         while(p<pos && n<neg)
         {
            result[i++] = positive[p++];
            result[i++] = negative[n++];
         }
//if remaining safe the positive and negative 
         while (p < pos) {
            result[i++] = positive[p++];
        }

        while (n<neg) {

            result[i++]= negative[n++];
            
        }

        for(int k=0;k<result.length;k++)
        {
            System.out.println(result[k]);
        }

        // for(int j=0;j<pos;j++)
        // {
        //     System.out.println("Positive: "+positive[j]);
        // }
        // for(int k=0;k<neg;k++)
        // {
        //     System.out.println("Negative: "+negative[k]);
        // }
    }
}
