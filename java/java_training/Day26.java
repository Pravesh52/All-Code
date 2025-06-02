//
import java.lang.*;
import java.util.ArrayList;
import java.util.Collections;
class Student implements Comparable<Student> {
    int age;
    String name;

    public Student(int age,String name)
    {
        this.age=age;
        this.name=name;

    }

    public String toString(){
        return age+" "+name;
    }
    public int compareTo(Student s)
    {
        return this.age-s.age;
    }
}
public class Day26 {
    public static void main(String[] args) {
        // ArrayList<Integer>list=new ArrayList<>();
        // list.add(10);
        // list.add(20);
        // list.add(5);
        // Collections.sort(list);
        // System.out.println(list);
       
       
       
       
        ArrayList<Student>list=new ArrayList<>();

        
        list.add(new Student(20, "Pravesh"));
        list.add(new Student(19, "Ankit"));
        Collections.sort(list);
       for(Student s : list)
       {
        System.out.println(s.toString());

       }
       
    }
}
