//Day18
//Date-09/05/2025
//Day-Friday
//Encapsulation

/*  1. Create a class `BankAccount` with a private balance variable.
 Write getter and setter methods to
deposit and withdraw money.*/


// class Atm{
//     private int a;

//     public void setRupees(int a){
//         this.a=a;
//     }

//     public int getRupees(){
//         return a;
//     }

    

// }

/*2.Design a class `Student` with private variables `name` and `marks`.
 Write methods to set and get
 the values. Also, write a method to print student details */

//  class Student{
//     private String name;
//     private int marks;

//     public void setvalues(String n,int m){
//         this.name=n;
//         this.marks=m;
//      }

//      public int getmarks(){
//         return marks;
        
//      }
//      public String getname(){
//         return name;

//  }
// }


/*3. Implement a class `Employee` that has private fields `id`, `name`, and `salary`.
 Provide getter and setter methods for each and display the employee details */

//  class Employee{
//     private int id;
//     private String name;
//     private double salary;

//     public void setvalues(int i,String n,double s){
//         this.id=i;
//         this.name=n;
//         this.salary=s;
//     }

//     public int getid(){
//         return id;
//     }

//     public String getname(){
//         return name;
//     }
//     public double getsalary(){
//         return salary;
//     }
//  }


/* Write a class `Temperature` that has a private variable `celsius`.
 Provide methods to convert and
 return the temperature in Fahrenheit using getter */

//  class Temperature{
//     private double celsius;

//     Temperature(double celsius){
//         this.celsius=celsius;

//     }
//     public double getcelsius(){
//         return celsius;
//     }
//     public double getfahrenheit(){
//         return (celsius*9.0/5.0)+32;
//     }

//     }


/* 5. Create a class `Rectangle` with private fields `length` and `width`. 
   Write setter methods to assign
 values and getter methods to return area and perimeter */

 class Rectangle{
    private int length;
    private int width;
    

    public void setvalues(int length,int width){
        this.length=length;
        this.width=width;
    }
    public int getarea(){
        return length*width;
    }

    public int getperimeter()
    {
        return 2*(length+width);
    }


 }
   
 
 


public class Day18 {
    public static void main(String[] args) {
        // Atm obj=new Atm();
        // obj.setRupees(20000);
        // System.out.println(obj.getRupees());

        // Student obj=new Student();
        // obj.setvalues("Pravesh", 450);
        // System.out.println(obj.getmarks());
        // System.out.println(obj.getname());

        //  Employee obj=new Employee();
        //  obj.setvalues(12, "Pravesh Tiwari", 40000);
        //  System.out.println(obj.getid());
        // System.out.println(obj.getname());
        // System.out.println(obj.getsalary());


        // Temperature obj=new Temperature(45.0);
        //  System.out.println("Celcious : "+ obj.getcelsius());
        //  System.out.println("Fahrenhite : "+ obj.getfahrenheit());
          
        Rectangle obj=new Rectangle();
        obj.setvalues(14, 15);
        System.out.println("Area: "+ obj.getarea());
        System.out.println("Perimeter: "+ obj.getperimeter());


         
         
    }
}
