

//27-04-2025

/*1. Basics (Variables, Data Types, Input/Output)
1.Write a Java program to print "Hello World".

2.Write a Java program to add two integers.

3.Write a Java program to multiply two floating point numbers.

4. Write a Java program to find ASCII value of a character.

5. Write a Java program to swap two numbers using a temporary variable.

6. Write a Java program to swap two numbers without using a temporary variable.

7. Write a Java program to find the size of int, float, double and char.

8. Write a Java program to find quotient and remainder.

9. Write a Java program to find largest of two numbers.

10. Write a Java program to find largest of three numbers.

11. Write a Java program to check even or odd.

12. Write a Java program to check vowel or consonant.

13. Write a Java program to find sum of natural numbers.

14. Write a Java program to find factorial of a number.

15. Write a Java program to generate multiplication table.

16. Write a Java program to display Fibonacci series.

17. Write a Java program to check prime number.

18. Write a Java program to find all prime numbers between two intervals.

19. Write a Java program to find GCD of two numbers.

20 Write a Java program to find LCM of two numbers.

21. Write a Java program to display alphabets (A-Z, a-z).

22. Write a Java program to count the number of digits in an integer.

23. Write a Java program to reverse a number.

24. Write a Java program to check palindrome number.

25. Write a Java program to find the sum of digits of a number.

26. Write a Java program to calculate simple interest.

27. Write a Java program to calculate compound interest.

28. Write a Java program to find power of a number using for loop.

29. Write a Java program to check Armstrong number.

30. Write a Java program to check if the year is leap year.

 */


 //1.program

import java.util.Scanner;

public class Basic {
              public static void main(String[] args) {

                // System.out.println("Hello world\n");

             //2.Write a Java program to add two integers.
            //  Scanner in=new Scanner(System.in);

            //  System.out.println("Enter first number : ");

            //  int x=in.nextInt();

            //  System.out.println("Enter the second number : ");
            //  int y=in.nextInt();

            //  System.out.println("Sum of Two number: "+(x+y));


            //3.program

            // Scanner in=new Scanner(System.in);

            //  System.out.println("Enter first number : ");

            //  float x=in.nextFloat();

            //  System.out.println("Enter the second number : ");
            //  float y=in.nextFloat();

            // System.out.println("MUlTIPLICATION OF TWO FLOTING VALUE : "+(x*y));






            //4. Write a Java program to find ASCII value of a character.

            // Scanner in =new Scanner(System.in);
            
            // System.out.println("Enter a character to find ASCII value : ");
            // char character=in.next().charAt(0);

            // int asciiValue=(int)character;
            // System.out.println("The ASCII value of "+character+" is "+asciiValue);



            //5. Write a Java program to swap two numbers using a temporary variable.
            //  int a=10;
            //  int b=20;
            //  int temp;
            //    temp=a;
            //    a=b;
            //    b=temp;

            //    System.out.println("Swap of Two value a= "+a+" b= "+b);


            //6.Write a Java program to swap two numbers without using a temporary variable.
              // int a=10;
              // int b=20;

              // a=a+b;
              // b=a-b;
              // a=a-b;

              // System.out.println("a = "+a+" b = "+b);


              //7. Write a Java program to find the size of int, float, double and char.

              // System.out.println("Size of int: "+Integer.BYTES+" Bytes");
              // System.out.println("Size of float: "+Float.BYTES+" Bytes");
              // System.out.println("Size of Double: "+Double.BYTES+" Bytes");
              // System.out.println("Size of Character: "+Character.BYTES+" Bytes");


              //8.Write a Java program to find quotient and remainder.
                //  int a=10;
                //  int b=20;
                //  int quotient=b/a;
                //  int remainder=b%a;

                //  System.out.println("quotient: "+quotient+" Remainder:"+remainder);



                //9.Write a Java program to find largest of two numbers.

                // int a=10;
                // int b=20;
                // if(a>b)
                // {
                //   System.out.println("largest value is a");
                // }else{
                //   System.out.println("largest value is b");
                // }



                //10.Write a Java program to find largest of three numbers.
                // Scanner in=new Scanner(System.in);
                // System.out.println("Enter first No.");
                // int a=in.nextInt();
                // System.out.println("Enter second no.");
                // int b=in.nextInt();
                // System.out.println("enter third no.");
                // int c=in.nextInt();

                // if(a>b && a>c){
                //   System.out.println("largest value is a");
                // }else if(b>a && b>c){
                //   System.out.println("Largest value is B");
                // }else{
                //   System.out.println("Largest value is c");
                // }
                

                //11.Write a Java program to check even or odd.

                // Scanner in=new Scanner(System.in);
                // System.out.println("Enter the no. to check even odd:");
                // int n=in.nextInt();

                // if(n%2==0){
                //   System.out.println("Even");
                // }else{
                //   System.out.println("odd");
                // }


                //12.Write a Java program to check vowel or consonant.
                // Scanner in=new Scanner(System.in);
                //  System.out.println("Enter the no. to check vowel and consonent:");
                //  char c=in.next().charAt(0);
                 
                //  if(c=='a'||c=='e'||c=='i'||c=='o'||c=='u'){
                //   System.out.println("vowel");
                //  }else{
                //   System.out.println("consonent");
                //  }


                //13.Write a Java program to find sum of natural numbers.
                // Scanner in=new Scanner(System.in);
                // System.out.println("Enter the no. to sum natural no.");
                // int n=in.nextInt();
                // int sum = 0;
                // for(int i=1;i<=n;i++)
                // {
                //    sum=sum+i;
                   
                // }
                // System.out.println(sum);

                //14. Write a Java program to find factorial of a number.

                // Scanner in=new Scanner(System.in);
                // System.out.println("Enter the no.to find the factorial: ");
                // int n=in.nextInt();

                // int fact=1;

                // for(int i=1;i<=n;i++){
                //   fact=fact*i;
                // }
                // System.out.println("Factorial no. "+fact);

                 //15. Write a Java program to generate multiplication table.

                // Scanner in=new Scanner(System.in);
                // System.out.println("Enter the number: ");
                // int n=in.nextInt();

                // for(int i=1;i<=10;i++){
                // //System.out.println(n+"*"+i+"="+n*+i);
                // }

                //16.Write a Java program to display Fibonacci series.
                // Scanner sc= new Scanner(System.in);
                // System.out.print("Enter the no. to find fibonacci series: ");
                // int n=sc.nextInt();

                // int a=0;
                // int b=1;
                // int c = 0;

                // System.out.print(a+" ");
                // System.out.print(b+" ");
                // for(int i=2;i<n;i++)
                // {
                //   c=a+b;
                //   System.out.print(c+" ");
                //   a=b;
                //   b=c;
                // }
                // // System.out.println("Fibonacci series: "+c);
                

               //17. Write a Java program to check prime number.
              //  Scanner sc=new Scanner(System.in);
              //  System.out.println("Enter the no. to check prime or not: ");
              //  int n=sc.nextInt();
              //  boolean istrue=true;
              //  for(int i=2;i<=n/2;i++)
              //  {
              //   if(n%i==0){
              //     istrue=false;
              //     break;
              //   }
              //  }
              //  if(istrue)
              //  {
              //   System.out.println("Prime no. ");
              //  }else{
              //   System.out.println("Not Prime no. ");
              //  }


               /*18. Write a Java program to find all
                prime numbers between two intervals.*/

                // Scanner sc=new Scanner(System.in);
                // System.out.println("Enter the first interval: ");
                // int a=sc.nextInt();
                // System.out.println("Enter the second interval: ");
                // int b=sc.nextInt();
                // System.out.println("Result: ");
                // int count=0;
                // for(int j=a; j<=b; j++){
                //   boolean istrue=true;
                //   int n = j;
                //  for(int i=2;i<=n/2;i++)
                //  {
                //   if(n%i==0){
                //     istrue=false;
                //     break;
                //   }
                // }
                // if(istrue)
                // {
                //   System.out.println(n);
                //   count++;
                //  }
                // }
                // System.out.println("First and second interval of middle Prime no.: "+count);

                //19. Write a Java program to find GCD of two numbers.

                Scanner sc=new Scanner(System.in);
                System.out.println("Enter first no.: ");
                int a=sc.nextInt();

                System.out.println("Enter second no.: ");
                int b=sc.nextInt();

                while(b!=0)
                {
                  int temp=b;
                  b=a%b;
                  a=temp;
                }
                int GCD = a;
                System.out.println("GCD of two values: "+GCD);





                //20 Write a Java program to find hcf and LCM of two numbers.
              //   Scanner sc=new Scanner(System.in);
              //   System.out.println("Enter first no.: ");
              //   int a=sc.nextInt();

              //   System.out.println("Enter first no.: ");
              //   int b=sc.nextInt();

              //   int x=a;
              //   int y=b;
              //   int temp;

              //   while (b!=0)
              //   {
              //     temp=b;
              //     b=a%b;
              //     a=temp;
              //   }
              //   int hcf=a;
                
              //  int  lcm=(x*y)/hcf;

              //  System.out.println("Hcf: "+hcf);
              //  System.out.println("Lcm: "+lcm);

              }
    
 }