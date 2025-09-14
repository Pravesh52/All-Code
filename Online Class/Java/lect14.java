//operator increment and decrement

public class lect14 {
    public static void main(String[] args) {
       int a=10;
       int b=0;
       /*increment: pre increment are first of change the value and 
       use the value*/
       //b=++a;
       //System.out.println("Pre Increment: "+a);
       //System.out.println("Pre Increment: "+b);
        /*Increment: Post increment are first of use the value and 
        after change the value*/
    //    b=a++;
    //    System.out.println("\nPost Increment: "+a);
    //    System.out.println("Post Increment: "+b);


       /*decrement: pre decrement are first of change the value and 
       use the value*/
    //    b=--a;
    //    System.out.println("\nPre decrement: "+a);
    //    System.out.println("Pre decrement: "+b);
        /*decrement: Post decrement are first of use the value and 
        after change the value*/
       b=a--;
       System.out.println("\nPost decrement: "+a);
       System.out.println("Post decrement: "+b);
    }
    
}
