


//Array
public class Java_class_sheet {


    //1.Find the maximum and minimum element in an array


    // public static void main(String[] args) {
    //     int arr[]={4,5,6,8,2};
    //      int min=arr[0];
    //      int max=arr[0];

    //      for(int i=1; i<arr.length; i++)
    //      {
    //         if(arr[i]<min){
    //             min=arr[i];

    //         }
    //         if(arr[i]>max){
    //             max=arr[i];
    //         }
    //      }
    //      System.out.println("Minimum Element: "+min);
    //      System.out.println("Maximum Element: "+max);

    // }

    //2. Reverse an array in place
    //   public static void main(String[] args) {
    //     int [] arr={1,2,3,4,5,6};
    //     int temp;
    //     int i=0;
    //     int j=arr.length-1;

    //     while(i<j){
    //         temp=arr[i];
    //         arr[i]=arr[j];
    //         arr[j]=temp;
    //         i++;
    //         j--;
    //     }
    //     System.out.println("Reverse array: ");
    //     for(int k=0;k<arr.length;k++)
    //     {
            
    //         System.out.print(arr[k]);
    //     }
        
    //   }

   // 3.Find the 'Kth' max and min element of an array
//    public static void main(String[] args) 
//    {
//      int []arr={7,5,9,6,3};
//      int max=arr[0];
//      int min=arr[0];

//      for(int i=0;i<arr.length;i++)
//      {
//         if(arr[i]<min)
//         {
//             min=arr[i];

//         }
//         if(arr[i]>max)
//         {
//             max=arr[i];
//         }
//      }
//      System.out.println("Min Element: "+min);
//      System.out.println("Max Element: "+max);
//     }

     // 4. Move all negative numbers to beginning and positive to end

//      public static void main(String[] args) {
//           int []arr={8,5,-1,-3,3,-7};
//           int j=0; 
//           int temp;
//           for(int i=0;i<arr.length;i++)
//           {
//              if(arr[i]<0)
//              {
//                if(i!=j){
//                temp=arr[i];
//                arr[i]=arr[j];
//                arr[j]=temp;
//                j++;
//                }
//              }  

//           }
//           for(int k=0;k<arr.length;k++)
//           {
//                System.out.print(arr[k]);
//           }
          
        

//      }
// }

//  // 6. Find Union and Intersection of two arrays
 
      public static void main(String[] args) {
          int [] arr1= {4,5,6,7,8,9};
           int [] arr2= {4,6,10,20,21,8};
           //Intersection
           System.out.println("InterSection of Array: ");
            for(int i=0;i<arr1.length;i++){
            for(int j=0;j<arr2.length;j++){
                if(arr1[i]==arr2[j]){
                     System.out.print(arr1[i]+" ");
                     break;
                 }
            }
          }
          System.out.println("  ");
          //Union
          System.out.println("Union Of Array: ");
          //array 1 sort
          for(int i=0;i<arr1.length;i++){
               for(int j=0;j<arr1.length-i-1;j++){
                  if(arr1[j]>arr1[j+1]){
                    int temp=arr1[j];
                    arr1[j]=arr1[j+1];
                    arr1[j+1]=temp;

                  }
               }
          }
         //array 2 sort
          for(int i=0;i<arr1.length;i++){
               for(int j=0;j<arr1.length-i-1;j++){
                  if(arr1[j]>arr1[j+1]){
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
                    System.out.print(arr1[i]+" ");
                    i++;
                    j++;
               }
               else if(arr1[i]<arr2[j])
               {
                System.out.print(arr1[i++]+" ");
               }else
               {
                 System.out.print(arr2[j++]+" ");
               }
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






//String 

// 21. Reverse a string


// public static void main(String[] args) {
//      System.out.println("Enter the string: ");
//      char c=
// }
// }



 





