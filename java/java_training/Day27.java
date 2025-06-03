
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
        downloadFile.file("File A");
        downloadFile.file("File B");
    }    
}
