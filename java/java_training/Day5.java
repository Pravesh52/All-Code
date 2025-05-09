//16-04-2025



import java.util.Scanner;

public class Day5 {
    public static void main(String[] args) {
        // Scanner in=new Scanner(System.in);
        // System.out.println("Enter the number : ");
        // int n=in.nextInt();

        // int temp=n;
        // int sum=0;

        // while(n!=0){
        //     int remainder=n%10;
        //     sum=sum+remainder;
        //     n=n/10;
        // }
        // System.out.println("sum of digit: "+sum);

        //Array

        Scanner in=new Scanner(System.in);
        System.out.println("Enter size of an array : ");
         int n=in.nextInt();
        int[] arr=new int[n];
        System.out.println("Enter value of array: ");

        for(int i=0;i<n;i++){
             arr[i]=in.nextInt();
        }
         //array printing
        System.out.println("values of array : ");
        for(int k=0;k<arr.length;k++){
            System.out.println(arr[k]);
        }
        //sum of elements of an array

        int sum=0;
        for(int i=0;i<n;i++){
            sum+=arr[i];
        }
        System.out.println("Sum of elements of array : "+sum);


        //reverse array

        int left=0,right=arr.length -1;

        while(left<right){
            int temp=arr[left];
            arr[left]=arr[right];
            arr[right]=temp;
            left++;
            right--;
        }

        System.out.print("reverse an element : ");
        for(int i=0;i<n;i++){
            System.out.println(arr[i]+" ");
        }

        //maximum and minimum

        int maxi=Integer.MIN_VALUE;
        int min=Integer.MAX_VALUE;

        for(int i=0;i<n;i++)
        {
            if(arr[i]>maxi){
                maxi=arr[i];
            }
            if(arr[i]< min){
                min=arr[i];

            }
        }
        System.out.println("Maximum value:  "+maxi);
        System.out.println("Minimum value: "+min);



    }
}
