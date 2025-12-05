import java.util.Scanner;

public class Union {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);

        int arr1[]={1, 2, 3, 4, 5};
        int arr2[]={1, 2, 3, 6, 7};
//result 1, 2, 3, 4, 5, 6, 7]
        int result[]=new int[arr1.length+arr2.length];
        int index=0;

        for(int i=0;i<arr1.length;i++)
        {
            result[index++]=arr1[i];
        }

        for(int i=0;i<arr2.length;i++)
        {
            boolean isfound=false;

            for(int j=0;j<index;j++)
            {
                if(result[j]==arr2[i])
                {
                    isfound=true;
                    break;
                }
            }
            if(!isfound)
            {
                result[index++]=arr2[i];
            }
        }

     for(int k=0;k<index;k++)
     {
        System.out.println(result[k]);
     }



    }
}
