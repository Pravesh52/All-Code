//Day10
//25-04-2025

public class Day10 {
        public static void main(String[] args) {
            // int i = 1;
            // while (i++ <= 5) {
            //     if (i == 3) continue;
            //     System.out.print(i + " ");
            // }

             //iMutable stirng 

            // String str="hello";
            // str="hii";
            // System.out.println(str.concat("hii"));
            // System.out.println(str);

             /*This consept use the string can be change 
             mutable string*/


            //  StringBuilder str=new StringBuilder("Hello");
            //  str.append("hii");
            //  System.out.println(str);


             //String capacity

             StringBuilder str=new StringBuilder(10);
             str.append("Hello hii byyy");
             //old*2+2
             System.out.println(str.length());
             System.out.println(str.capacity());






        }
    }

