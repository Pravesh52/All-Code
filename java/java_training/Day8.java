public class Day8 {
    public static void main(String[] args) {
        //sum of digit
        
        
        // int sum=123;
        // int s=0;
        // for(int i=0;i<3;i++)
        // {
        //     s+=sum%10;
        //     sum/=10;
        // }
        // System.out.println(s);

        //no one by one even odd check

    //     int n=123;
    //     while(n!=0){
    //         int temp=n%10;

    //     if(temp%2==0){
    //         System.out.println("Even");
    //     }else{
    //         System.out.println("odd");
    //     }
    //     n=n/10;
    // }


    //prime number

    // int arr[]={1,2,3,4,5,67,55,89}
    // System.out.println("Prime Numbers : ");
    //  boolean flag;
    // for(int i=0;i<arr.length;i++){

    // }


    // String str="hello";
    // String str1="hiii";

    // for(int i=0;i<str.length();i++){
    //     for(int j=0;j<str1.length();j++){
    //         if(str.charAt(i)==str1.charAt(j)){
    //             System.out.println(str.charAt(i));
    //             break;
    //         }
    //     }
    // }

    //string palindrone
    // String str="racecar";
    // int l=0,r=str.length()-1;
    // boolean isPalindrome=true;

    // while(l<r){
    //     if(str.charAt(l) != str.charAt(r)){
    //         isPalindrome=false;
    //         break;
    //     }
    //     l++;
    //     r--;

    // }
    // if(isPalindrome){
    //     System.out.println("Palindrone");
    // }else{
    //     System.out.println("Not a Palindrone");
    // }



       // count given string character frequency
    //    String str="racecar";
    //    char arr[]=str.toCharArray();

    //    for(int i=0;i<str.length();i++){
    //     System.out.print(arr[i]);
    //    }

    //    String target="e";
    //    int count=0;

    //    for(int i=0;i<str.length();i++){
    //     if(str.charAt(i)== target.charAt(0)){
    //         count++;
    //     }
    //    }
    //    System.out.println(count);

    String str="racecarjhdgahaaha";
    int count=0;
    for(int i=0;i<str.length();i++)
    {
        switch(str.charAt(i)){
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                        count++;
        }
    }
    System.out.println(count);
    
 }
}
