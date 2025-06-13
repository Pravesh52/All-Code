
//Multithreading

class MyRunnable implements Runnable{
    public void run(){
        System.out.println("Thread using runnable interface");
    }
} 
class downloadFile extends Thread{
    String filename;
    //constructor
    downloadFile(String filename){
       this.filename=filename;
    }
    public void run(){
        for(int i=0;i<=5;i++)
        {
            try {
                Thread.sleep(2000);
            } catch (Exception e) {
                
            }
            System.out.println(filename+" downloading..... "+(i*20)+"%");
        }
        System.out.println(filename+" download successful");
    }
}

    

public class Day28 {
    public static void main(String[] args) {
        // MyRunnable obj=new MyRunnable();
        // Thread t1=new Thread(obj);
        // t1.start();
        // System.out.println("Main Thread is running");
       
        
        downloadFile d1= new downloadFile("file A");
        downloadFile d2= new downloadFile("file B");
        Thread t1 = new Thread(d1);
        Thread t2 = new Thread(d2);
        t1.start();
        t2.start();

    }
}

