//intersection of two array

public class Intersection {
    public static void main(String[] args) {
        int arr1[]={4,9,5};
        int arr2[]={9,4,9,8,4};

        int result[]=new int[arr2.length];
        int k=0;
        for(int i=0;i<arr1.length;i++)
        {
            for(int j=0;j<arr2.length;j++)
            {
                if(arr1[i]==arr2[j])
                {
                    result[k]=arr1[i];
                    k++;
                    arr2[j]=-1;
                    break;
                }
            }
        }
        for(int i=0;i<k;i++)
        {
            System.out.println(result[i]);
        }
    }
}
