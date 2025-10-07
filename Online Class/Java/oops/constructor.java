//Non-Parameterized constructor

// class Student {
//    String name;
//    int age;
  
//    Student() {
//        System.out.println("Constructor called");
//    }
// }

//Parameterized Constructor

class Student {
   String name;
   int age;
  
   Student(String name, int age) {
       this.name = name;
       this.age = age;
   }


   Student(Student s2) {  //Copy Constructor
       this.name = s2.name;
       this.age = s2.age;
   }
}


  





public class constructor {
    public static void main(String[] args) {
        //Student s1=new Student();
        Student s1=new Student("Pravesh",18);//Parameterized Constructor
        System.out.println(s1.name+" "+s1.age);

        Student s2 = new Student(s1);           // Copy constructor

        System.out.println(s2.name + " " + s2.age);
    }
}
