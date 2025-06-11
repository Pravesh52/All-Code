//Any file creating in java code

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

public class Day33 {
    public static void main(String[] args) {
        /*create the file*/

        // try{
        //     File file = new File("new.txt");
        //     if(file.createNewFile()){
        //         System.out.println("File created: "+file.getName());
        //     }else{
        //         System.out.println("file already exists.");
        //     }
        // }catch(IOException e)
        // {
        //     System.out.println("An error occurred.");
        //     e.printStackTrace();
        // }

        /*file creating to write the message*/
        
        // try{
        //     FileWriter writer=new FileWriter("new.txt");
        //     writer.write("Pravesh Tiwari");
        //     writer.close();
        //     System.out.println("successfully wrote to the file.");
        // }catch(IOException e){
        //     System.out.println("An error occurred.");
        //     e.printStackTrace();
        // }

        /*Read the file */

        // try {
        //     File file = new File("new.txt");
        //     Scanner scanner=new Scanner(file);
        //     while(scanner.hasNextLine()){
        //         String data=scanner.nextLine();
        //         System.out.println(data);
        //     }
        //     scanner.close();

        // } catch (FileNotFoundException e) {
        //     System.out.println("An error occurred.");
        //     e.printStackTrace();

        // }

        /*Delete the file*/
        
        // File file =new File("new.txt");
        // if(file.delete())
        // {
        //     System.out.println("Deleted the file: "+file.getName());
        // }else {
        //     System.out.println("Failed the delete the file.");
        // }

    }
}
