//“Longest Substring Without Repeating Characters”

public class Prob3 {
   public static void main(String[] args) {
     String s="abcabcbb";
     int max_length=0;
     int n=s.length();
     int[]lastidx=new int[128];

     for(int i=0;i<n;i++)
     {
        lastidx[i]=-1;
     }
     int start=0;

     for(int end=0;end<n;end++)
     {
        char ch=s.charAt(end);

        if(lastidx[ch]>=start)
        {
            start=lastidx[ch]+1;
        }
        lastidx[ch]=end;

        int length=end-start+1;

        if(length>max_length)
        {
            max_length=length;
        }
     }
     System.out.println(max_length);
   } 
}
