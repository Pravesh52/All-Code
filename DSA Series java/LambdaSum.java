
    // Functional interface
    // interface MyFunction {
    //     void apply();
    // }

    // public class lambda {
    //     public static void main(String[] args) {
    //         MyFunction greeting = () -> System.out.println("Hello from Lambda!");
    //         greeting.apply();
    //     }
    // }

interface Sum {

    int add(int a, int b);
    
}

public class LambdaSum {
    public static void main(String[] args) {
        Sum s = (a, b) -> a + b;

        System.out.println("Sum = " + s.add(10, 20)); 
    }
}

