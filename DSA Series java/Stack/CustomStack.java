public class CustomStack {
    private int maxSize;   // Stack ki maximum size
    private int top;       // Top index
    private int[] stack;   // Array to store stack elements

    // Constructor
    public CustomStack(int size) {
        maxSize = size;
        stack = new int[maxSize];
        top = -1;
    }

    // Push operation
    public void push(int value) {
        if (top == maxSize - 1) {
            System.out.println("Stack Overflow! Cannot push " + value);
        } else {
            stack[++top] = value;
            System.out.println(value + " pushed into stack");
        }
    }

    // Pop operation
    public int pop() {
        if (empty()) {
            System.out.println("Stack Underflow! Cannot pop");
            return -1;
        } else {
            return stack[top--];
        }
    }

    // Peek operation
    public int peek() {
        if (empty()) {
            System.out.println("Stack is empty! No top element");
            return -1;
        } else {
            return stack[top];
        }
    }

    // Empty check
    public boolean empty() {
        return (top == -1);
    }

    // Search operation
    public int search(int value) {
        for (int i = top; i >= 0; i--) {
            if (stack[i] == value) {
                return top - i + 1; // Position from top (1-based)
            }
        }
        return -1; // Not found
    }

    // Display stack elements
    public void display() {
        if (empty()) {
            System.out.println("Stack is empty!");
        } else {
            System.out.print("Stack elements: ");
            for (int i = 0; i <= top; i++) {
                System.out.print(stack[i] + " ");
            }
            System.out.println();
        }
    }

    // Main function to test
    public static void main(String[] args) {
        CustomStack stack = new CustomStack(5);

        stack.push(10);
        stack.push(20);
        stack.push(30);
        stack.push(40);

        stack.display();

        System.out.println("Peek element: " + stack.peek());

        System.out.println("Popped element: " + stack.pop());
        stack.display();

        System.out.println("Search 20 -> Position from top: " + stack.search(20));

        System.out.println("Is stack empty? " + stack.empty());
    }
}

