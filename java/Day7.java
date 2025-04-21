//Day 7
//Date-21-04-2025


public class Day7 {
    public static void main(String[] args) {
        // int arr[][]={{1,2,3,4},{3,4,5,6},{4,5,6,7}};
        // int count=0;
        // for(int i=0;i<arr.length;i++)
        // {
        //     for(int j=0;j<arr[i].length;j++)
        //     {
        //         count++;
        //     }
        // }
        // System.out.println("NO of element in array : "+count);

        // int arr1[]=new int[count];
        // int index=0;
        // for(int i=0;i<arr.length;i++)
        // {
        //     for(int j=0;j<arr[i].length;j++)
        //     {
        //         arr1[index++]=arr[i][j];
        //     }
        // }
        // for(int i=0;i<arr1.length;i++)
        // {
        //     System.out.println(arr1[i]);
        // }

        //matrix multiplication
        
        // int arr1[][]= {{1,2,3,4},
        //          {3,2,3,4},
        //          {1,5,3,4},
        //          {1,2,8,4}};

        // int arr2[][]= {{1,2,3,4},
        //          {3,2,3,4},
        //          {1,5,3,4},
        //          {1,2,8,4}};

        // int ans[][]=new int[arr1.length][arr1[0].length];
        // int n=arr1.length;

        // for(int i=0;i<n;i++)
        // {
        //     for(int j=0;j<n;j++)
        //     {
        //         int sum=0;
        //         for(int k=0;k<n;k++){
        //             sum+=arr1[i][k]*arr2[k][j];
        //         }
        //         ans[i][j]=sum;
        //     }
        // }
        // for(int i=0;i<ans.length;i++){
        //     for(int j=0;j<ans[i].length;j++){
        //         System.out.print(ans[i][j]+" ");
        //     }
        //     System.out.println();
        // }





        //String


        String str="Pravesh";
        System.out.println(str.length());
        System.out.println(str.charAt(4));

        for(int i=0;i<str.length();i++)
        {
            System.out.print(str.charAt(i));
        }
        System.out.println();


        int l=0,r=str.length()-1;

        boolean isPalindrome =true;

        while(l<r)
        {
            if(str.charAt(l) != str.charAt(r)){
                isPalindrome=false;
                break;
            }
            l++;
            r--;
        }
        if(isPalindrome){
            System.out.println("Palindrome");
        }else{
            System.out.println("Not a Palindrome");
        }


        


    }


}
