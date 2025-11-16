public class MinHeap {

    private int[] heap;
    private int size;

    public MinHeap(int capacity) {
        heap = new int[capacity];
        size = 0;
    }

    private int parent(int i) {
        return (i - 1) / 2;
    }

    private int left(int i) {
        return (2 * i) + 1;
    }

    private int right(int i) {
        return (2 * i) + 2;
    }

    // Insert a number into the heap
    public void insert(int value) {
        if (size >= heap.length) {
            System.out.println("Heap is full");
            return;
        }

        heap[size] = value;
        int current = size;
        size++;

        // Move up until heap property is correct
        while (current > 0 && heap[current] < heap[parent(current)]) {
            int temp = heap[current];
            heap[current] = heap[parent(current)];
            heap[parent(current)] = temp;

            current = parent(current);
        }
    }

    // Return smallest value
    public int getMin() {
        if (size == 0) {
            System.out.println("Heap is empty");
            return -1;
        }
        return heap[0];
    }

    // Remove and return the smallest value
    public int extractMin() {
        if (size == 0) {
            System.out.println("Heap is empty");
            return -1;
        }

        int min = heap[0];
        heap[0] = heap[size - 1];
        size--;

        heapify(0);
        return min;
    }

    // Restore heap property going downward
    private void heapify(int i) {
        int smallest = i;
        int leftChild = left(i);
        int rightChild = right(i);

        if (leftChild < size && heap[leftChild] < heap[smallest]) {
            smallest = leftChild;
        }
        if (rightChild < size && heap[rightChild] < heap[smallest]) {
            smallest = rightChild;
        }

        if (smallest != i) {
            int temp = heap[i];
            heap[i] = heap[smallest];
            heap[smallest] = temp;

            heapify(smallest);
        }
    }

    // Delete value at specific index
    public void delete(int index) {
        if (index < 0 || index >= size) {
            System.out.println("Invalid index");
            return;
        }

        heap[index] = Integer.MIN_VALUE;

        while (index > 0 && heap[index] < heap[parent(index)]) {
            int temp = heap[index];
            heap[index] = heap[parent(index)];
            heap[parent(index)] = temp;

            index = parent(index);
        }

        extractMin();
    }

    // Print the heap as array
    public void print() {
        System.out.print("Heap: ");
        for (int i = 0; i < size; i++) {
            System.out.print(heap[i] + " ");
        }
        System.out.println();
    }

    // Test the heap
    public static void main(String[] args) {

        MinHeap h = new MinHeap(20);

        h.insert(10);
        h.insert(4);
        h.insert(15);
        h.insert(1);
        h.insert(20);

        h.print();

        System.out.println("Minimum: " + h.getMin());

        System.out.println("Extracted: " + h.extractMin());
        h.print();

        h.delete(2);
        h.print();
    }
}

