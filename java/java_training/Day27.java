
//Multithreading

class MyThread extends Thread{
    public void run(){
        System.out.println("Hello");
    }
    
}


public class Day27 {
    public static void main(String[] args) {
        // for(int i=0;i<=100;i++)
        // {
        //     System.out.print(i+" ");
        // }
        MyThread t1=new MyThread();
        t1.start();
        //t1.print();
        System.out.println("hii");
    }    
}
