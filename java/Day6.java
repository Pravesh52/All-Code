//Day 6
//Date 17-04-2025




public class Day6 {
    public static void main(String[] args) {
        // int[] arr1={1,2,3,4,5};
        // int[] arr2={1,2,3,4,5};
        // int sum[]=new int[5];

        // int sum1=0;
        // int sum2=0;

        // for(int i=0;i<5;i++)
        // {
        //     sum1 += arr1[i];
        //     sum2 += arr2[i];
        // }
        // System.out.println("sum1: "+sum1);
        // System.out.println("sum2: "+sum2);
        // System.out.println("Total sum: "+(sum1+sum2));

        // for(int i=0;i<5;i++){
        //     sum[i]=arr1[i]+arr2[i];
        // }

        // for(int i=0;i<5;i++){
        //     System.out.println(sum[i]+" ");
        // }
        // System.out.println();



        //Copy Elements of One Array into Another

        // int[] arr1={1,2,3};
        // int[] arr2= new int[arr1.length];

        // for(int i=0;i<arr1.length;i++){
        //     arr2[i]=arr1[i];
        // }

        // System.out.println("copied array");

        // for(int j=0;j<arr2.length;j++){
        //     System.out.println(arr2[j]+" ");
        // }



        //Common Elements in Two Array

        // int[] arr1={1,5,7};
        // int[] arr2={2,7,8};

        // System.out.println("Common element : ");

        // for(int i=0;i<arr1.length;i++){
        //     for(int j=0;j<arr2.length;j++){
        //         if(arr1[i]==arr2[j]){
        //             System.out.println(arr1[i]+" ");
        //             break;
        //         }
        //     }
        // }



        //Merge Two Arrays

        int[] arr1={1,2,3,4,5};
        int[] arr2={1,2,3,4,5};
        int newArray[]=new int[arr1.length+arr2.length];
        int index=0;
        int i=0;

        while(i<arr1.length){
            newArray[index]=arr1[i];
            index++;
            i++;
        }
        i=0;
        while(i<arr2.length){
            newArray[index]=arr2[i];
            index++;
            i++;
        }

        System.out.println("merged array : ");

        for(int j=0;j<index;j++){
            System.out.print(newArray[j]+" ");
        }


    }
    
}
