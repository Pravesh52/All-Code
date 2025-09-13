public class CustomQueue {
    private int[] queue;
    private int front;     // index of front element
    private int rear;      // index of last element
    private int size;      // current number of elements
    private int capacity;  // max capacity

    // Constructor
    public CustomQueue(int capacity) {
        this.capacity = capacity;
        this.queue = new int[capacity];
        this.front = 0;
        this.rear = -1;
        this.size = 0;
    }

    // Check if queue is empty
    public boolean isEmpty() {
        return size == 0;
    }

    // Check if queue is full
    public boolean isFull() {
        return size == capacity;
    }

    // Enqueue (insert at rear)
    public void enqueue(int value) {
        if (isFull()) {
            System.out.println("Queue Overflow! Cannot enqueue " + value);
            return;
        }
        rear = (rear + 1) % capacity; // circular move
        queue[rear] = value;
        size++;
        System.out.println(value + " enqueued into queue");
    }

    // Dequeue (remove from front)
    public int dequeue() {
        if (isEmpty()) {
            System.out.println("Queue Underflow! Cannot dequeue");
            return -1; // or throw exception if you prefer
        }
        int val = queue[front];
        front = (front + 1) % capacity; // circular move
        size--;
        return val;
    }

    // Peek (get front without removing)
    public int peek() {
        if (isEmpty()) {
            System.out.println("Queue is empty! No front element");
            return -1;
        }
        return queue[front];
    }

    // Get current size
    public int getSize() {
        return size;
    }

    // Display queue elements from front to rear
    public void display() {
        if (isEmpty()) {
            System.out.println("Queue is empty!");
            return;
        }
        System.out.print("Queue elements: ");
        for (int i = 0; i < size; i++) {
            System.out.print(queue[(front + i) % capacity] + " ");
        }
        System.out.println();
    }

    // Search value and return position from front (1-based). Return -1 if not found.
    public int search(int value) {
        for (int i = 0; i < size; i++) {
            if (queue[(front + i) % capacity] == value) {
                return i + 1;
            }
        }
        return -1;
    }

    // Test the queue step-by-step
    public static void main(String[] args) {
        CustomQueue q = new CustomQueue(5);

        q.enqueue(10);
        q.enqueue(20);
        q.enqueue(30);
        q.enqueue(40);

        q.display(); // 10 20 30 40

        System.out.println("Front element (peek): " + q.peek());

        System.out.println("Dequeued: " + q.dequeue());
        q.display(); // 20 30 40

        System.out.println("Enqueue 50 and 60 (will wrap-around):");
        q.enqueue(50);
        q.enqueue(60); // now queue is full
        q.display(); // 20 30 40 50 60

        System.out.println("Is full? " + q.isFull());
        System.out.println("Search 30 -> position from front: " + q.search(30));

        System.out.println("Dequeue all elements:");
        while (!q.isEmpty()) {
            System.out.println("Dequeued: " + q.dequeue());
        }

        System.out.println("Is empty? " + q.isEmpty());
    }
}
