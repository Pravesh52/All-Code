//armstrong no.

public class Prob13 {
    
    public static void main(String[] args) {
        int n=153;
        int temp=n;
        int count=0;
        while(n!=0)
        {
            n=n/10;
            count++;
        }
        System.out.println(count);
          int ans=0;
          n=temp;
        while(temp!=0)
        {
            int x=temp%10;
            int y=1;
            for(int i=0;i<count;i++)
            {
                y = y * x;
            }
            ans += y;
            temp = temp / 10;
        }
        if(n == ans){
            System.out.println("T");
        }
    }
}
