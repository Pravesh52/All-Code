
//Multithreading

// class MyThread extends Thread{
//     public void run(){
//         System.out.println("Hello");
//         try{
//             Thread.sleep(5000);
//         }catch(Exception e){
            
//         }
//         System.out.println("Pravesh");
//     }
// }

//without threading used code

// class downloadFile{
//     public static void file(String file){
//         for(int i=1;i<=5;i++)
//         {
//             System.out.println(file+" downloading..."+(i*20)+"%");
//             try{
//             Thread.sleep(2000);
//         }catch (Exception e){

//         }
//         }
//         System.out.println();
        // try{
        //     Thread.sleep(2000);
        // }catch (Exception e){

        // }
//         System.out.println(file+" downloading successful");
//         System.out.println();
        
//     }
// }

// using Thread 

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


public class Day27 {
    public static void main(String[] args) {
        // for(int i=0;i<=100;i++)
        // {
        //     System.out.print(i+" ");
        // }
        // MyThread t1=new MyThread();
        // t1.start();
        // //t1.print();
        // System.out.println("hii");



        //without threading used code
        // downloadFile.file("File A");
        // downloadFile.file("File B");



        downloadFile t1= new downloadFile("file A");
        downloadFile t2= new downloadFile("file B");
        t1.start();
        t2.start();
    }    
}
