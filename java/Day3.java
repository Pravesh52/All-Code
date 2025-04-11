//Day 3
//11-04-2025

//import java.util.*;
import java.util.Scanner;
public class Day3 {
    public static void main(String[] args) {
        

        // Scanner in= new Scanner(System.in);

        // System.out.println("Enter you input : ");

        // int a= in.nextInt();



        // switch (a){
        //     case 1:
        //     System.out.println("hello");
        //     break;

        //     case 2:
        //     System.out.println("hii");
        //     break;

        //     case 3:
        //     System.out.println("kaise ho");
        //     break;

        //     case 4:
        //     System.out.println("kya kar rahe ho");
        //     break;

        //     case 5:
        //     System.out.println("bhai");
        //     break;
            
        //     default:

        //     System.out.println("byyy");
        // }


        // Day print


        // switch (a){
        //     case 1:
        //     System.out.println("Monday");
        //     break;

        //     case 2:
        //     System.out.println("Tuesday");
        //     break;

        //     case 3:
        //     System.out.println("Wednesday");
        //     break;

        //     case 4:
        //     System.out.println("Thursday");
        //     break;

        //     case 5:
        //     System.out.println("Friday");
        //     break;

        //     case 6:
        //     System.out.println("Saturday");
        //     break;

        //     case 7:
        //     System.out.println("Sunday");
        //     break;
            
        //     default:

        //     System.out.println("invalid input");
        // }

        //Calculator

        Scanner in =  new Scanner(System.in);

        System.out.println("Enter first number: ");
        int a= in.nextInt();

        System.out.println("Enter Second number: ");
        int b=in.nextInt();

        System.out.println("Enter operator: ");
        char c=in.next().charAt(0);


        switch (c) {
            case '+':
             System.out.println("Addition: "+(a+b));
            break;

            case '-':
             System.out.println("Addition: "+(a-b));
            break;

            case '*':
             System.out.println("Addition: "+(a*b));
            break;

            case '/':
             System.out.println("Addition: "+(a/b));
            break;
        
            default:
            System.out.println("default input");
                break;
        }




    }
}
