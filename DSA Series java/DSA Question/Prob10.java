//3 Array sum

public class Prob10 {
    public static void main(String[] args) {
        int arr1[]={1,2,3,4,5};
        int arr2[]={1,2,3,4,5};
        int arr3[]={1,2,3,4,5};

        int result[]=new int[arr1.length];

        for(int i=0;i<arr1.length;i++)
        {
            result[i]=arr1[i]+arr2[i]+arr3[i];
        }

        for(int i=0;i<result.length;i++)
        {
            System.out.println(result[i]+" ");
        }
    }
}
