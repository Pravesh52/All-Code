// Day: 16
// Date: 07/05/2025
// Day: Wednesday

class Animal{
    void eat(){
        System.out.println("I am eating");
    }
}

class Dog extends Animal{
    void bark(){
        System.out.println("Bow Wow");
    }
}

class Puppy extends Dog{
    void cute(){
        System.out.println("Cutieeee Pieeee");
    }
}

class Cat extends Animal{
    void meow(){
        System.out.println("Meowwww");
    }
}

class Employee{
    void work(){
        System.out.println("I am working");
    }
}

class Manager extends Employee{
    void attendMeeting(){
        System.out.println("I am on meeting");
    }
}

// Method Overloading...
// class Parent{
//     void sum(int a, int b){
//         System.out.println(a+b);
//     }

//     void sum(int a, int b, int c){
//         System.out.println(a+b+c);
//     }
// }

class Person{
    String name;
    Person(String name){
        this.name = name;
    }

    void displayName(){
        System.out.println(name);
    }
}

class Student extends Person{
    Student(String name) {
        super(name);
        //TODO Auto-generated constructor stub
    }

    void displayClass(){
        System.out.println("B-tech CSE");
    }
}

class Parent{
    void eat(){
        System.out.println("Rice....");
    }
}

// Method Overriding...
class Child extends Parent{
    void eat(){
        System.out.println("Chapati");
        super.eat();
    }
}

public class Day16 {
    public static void main(String[] args) {
        Puppy p = new Puppy();
        p.eat();
        p.bark();
        p.cute();
        Cat c = new Cat();
        c.eat();
        c.meow();

        Manager m = new Manager();
        m.work();
        m.attendMeeting();

        // Parent s = new Parent();
        // s.sum(10, 20);
        // s.sum(10, 20, 30);

        Person per = new Person("Ankit");
        Student st = new Student("Ankit");
        per.displayName();
        st.displayName();
        st.displayClass();

        Parent par = new Child();
        par.eat();
    }
}