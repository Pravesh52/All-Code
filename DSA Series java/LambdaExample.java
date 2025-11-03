// @FunctionalInterface
interface Calculator {
    int operate(int a, int b);
}

public class LambdaExample {
    public static void main(String[] args) {
        // Lambda expression for addition
        Calculator addition = (a, b) -> a + b;
        System.out.println("Sum: " + addition.operate(10, 5)); // Output: Sum: 15

        // Lambda expression for subtraction
        Calculator subtraction = (a, b) -> a - b;
        System.out.println("Difference: " + subtraction.operate(10, 5)); // Output: Difference: 5
    }
}
