//find the union and intersection

public class Prob12 {

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

