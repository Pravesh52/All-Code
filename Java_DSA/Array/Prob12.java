//Find Union and Intersection of two arrays

public class Prob12 {
    public static void main(String[] args) {
        int arr1[]={1,2,3,4,5,6};
        int arr2[]={1,8,3,6,5,7};

        //intersection

        System.out.println("Intersection of Two array: ");
        for(int i=0;i<arr1.length;i++)
        {
            for(int j=0;j<arr2.length;j++)
            {
                if(arr1[i]==arr2[j])
                {
                    System.out.println(arr1[i]+ " ");
                    break;
                }
            }
        }
        System.out.println();
        //Union

        System.out.println("Union of Two array: ");

        //arr1 sort

        for(int i=0;i<arr1.length;i++)
        {
            for(j=0;j<arr1.length-i-1;j++)
            {
                if(arr1[i]>arr1[j+1])
                {
                    int temp=arr1[j];
                    arr1[j]=arr1[j+1];
                    arr1[j+1]=temp;
                }
            }
        }

        //ARRAY 2 SORT

         for(int i=0;i<arr1.length;i++)
        {
            for(j=0;j<arr1.length-i-1;j++)
            {
                if(arr1[i]>arr1[j+1])
                {
                    int temp=arr1[j];
                    arr1[j]=arr1[j+1];
                    arr1[j+1]=temp;

                }
            }
        }
       int i=0;
       int j=0;

       while(i<arr1.length && j<arr2.length)
       {
        if(arr1[i]==arr2[j])
        {
            System.out.println(arr[i]+" ");
            i++;
            j++;
        }else if(arr1[i]<arr2[j])
        {
            System.out.println(arr1[i++]+" ");
        }else{
            System.out.println(arr2[j++]+" ");
        }


        if(i<arr1.length)
          {
               for(;i<arr1.length;i++)
               {
                    System.out.print(arr1[i]+" ");
               }
          }

          if(i<arr2.length)
          {
               for(;i<arr2.length;i++)
               {
                    System.out.print(arr2[i]+" ");
               }
          }



       }





    }
}
