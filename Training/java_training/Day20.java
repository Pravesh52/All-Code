public class Day20 {
     public static void main(String[] args) {
    //     String str="aaabbbcc";
    //     StringBuilder newStr= new StringBuilder();

    //     int count =1;

    //     for(int i=1;i<str.length();i++)
    //     {
    //         if(str.charAt(i)==str.charAt(i-1)){
    //             count++;
    //         }else{
    //             newStr.append(str.charAt(i-1)).append(count);
    //             count =1;
    //         }

    //     }
    //     newStr.append(str.charAt(str.length()-1)).append(count);
    //     System.out.println(newStr);
    // Human obj = new Human();
    //  obj.run();
    //  obj.walk();

    //  Demo obj1 = new Demo();
    //  obj1.display();

    //  Dog obj2 = new Dog();
    //  obj2.makeSound();

        Circle obj3 = new Circle();
        double result = obj3.area();
        System.out.println(result);
     }  
} 

/*Q.1  Create two interfaces Walkable and Runnable. 
Each should have a method: walk() and run() respectively.
 Then, create a class Human that implements 
 both interfaces and defines both methods.
 Create a main method where an object of Human 
 is created and both methods are called*/

   interface Walkable{
     void walk();
     void run();
   }
   interface runable{
    void walk();
    void run();
   }

   class Human implements Walkable,runable{
    public void walk(){
        System.out.println("walking...");
    }
    public void run(){
        System.out.println("running....");
    }
   }


/* Q2. Create two interfaces A and B. Both interfaces should
 have a method named display().Then, create a class Demo that 
 implements both interfaces */

 interface A{
    void display();
 }
 interface B{
    void display();
 }

 class Demo implements A,B{
    public void display(){
        System.out.println("Display....");
    }
 }


 /* Q3. Create an interface Animal with a method makeSound().
 Then, create a class Dog that implements Animal and overrides
makeSound() to print "Bark".In the main method, use the interface
 reference to call the method from Dog. */

 interface Animal{
    void makeSound();
 }
 class Dog implements Animal{
    public void makeSound(){
        System.out.println("Bark....");
    }
 }


 /*Q4. Create an interface Shape with a method area().
 Then, create a class Circle that implements Shape and
 calculates the area using radius = 5. Print the area 
 in the main method */

 interface Shape{
    double area();
 }
 class Circle implements Shape{
    public double area(){
        return 3.14*5*5;
    }
 }