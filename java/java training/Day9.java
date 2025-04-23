public class Day9 {
    public static void main(String[] args) {
        //delete the duplicate data

        // String str="hiii";
        // String newstr="";

        // for(int i=0;i<str.length();i++){
        //     char c=str.charAt(i);
        //     if(newstr.indexOf(c)==-1){
        //         newstr=newstr+c;
        //     }
        // }
        // System.out.println(newstr+" ");


        //palindrone

        // String str="Pravesh";

        // int l=0,r=str.length()-1;
        // boolean isPalindrome=true;

        // while(l<r){
        //     if(str.charAt(l)!=str.charAt(r)){
        //         isPalindrome=false;
        //         break;
        //     }
            
        //     l++;
        //     r--;

        // }
        // if(isPalindrome)
        // {
        //     System.out.println("Palindrone");
        // }else{
        //     System.out.println("Not Palindrone");
        // }


        //find first repeating character

        
        String str="happybirthday";
        String newstr="";

        for(int i=0;i<str.length();i++)
        {
            char c=str.charAt(i);
            if(newstr.indexOf(c)==-1)
            {
                newstr=newstr+c;
 
            }else{
                System.out.println(c);
                break;
            }

        }

        



        
    }
}
