
class MyThread extends Thread{
    public void run(){
        for(int i=0;i<=10;i++){
            System.out.println(getName()+" is running with Priority "+getPriority());
            Thread.yield();
        }
    }
}
public class Day29 {
    public static void main(String[] args) {
        // System.out.println("idher dekhoo");
        //   Thread t1= new Thread(()->{
        //     System.out.println("Hello");
        //   });

        //   Thread t2 = new Thread(()->{
        //     System.out.println("Hii");
        //   });

        //   t1.start();
        //   t2.start();
        MyThread t1= new MyThread();
        MyThread t2= new MyThread();

        t1.setName("Lower Priority thread");
        t2.setName("Higher Priority thread");

        t1.setPriority(Thread.MIN_PRIORITY);
        t2.setPriority(Thread.MAX_PRIORITY);

        t1.start();
        t2.start();


          
            
        }
    
}
