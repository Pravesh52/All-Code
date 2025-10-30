// Recursive Tree Traversal Example
class Node {
    int data;
    Node left, right;

    // Constructor
    Node(int value) {
        data = value;
        left = right = null;
    }
}

public class TreeRecursion {
    
    // Inorder Traversal (Left -> Root -> Right)
    static void inorder(Node root) {
        if (root == null)
            return; // base case
        inorder(root.left);   // recursive call on left subtree
        System.out.print(root.data + " ");
        inorder(root.right);  // recursive call on right subtree
    }

    // Preorder Traversal (Root -> Left -> Right)
    static void preorder(Node root) {
        if (root == null)
            return;
        System.out.print(root.data + " ");
        preorder(root.left);
        preorder(root.right);
    }

    // Postorder Traversal (Left -> Right -> Root)
    static void postorder(Node root) {
        if (root == null)
            return;
        postorder(root.left);
        postorder(root.right);
        System.out.print(root.data + " ");
    }

    public static void main(String[] args) {
        // Create a simple tree
        /*
                 1
               /   \
              2     3
             / \   / \
            4   5 6   7
        */

        Node root = new Node(1);
        root.left = new Node(2);
        root.right = new Node(3);
        root.left.left = new Node(4);
        root.left.right = new Node(5);
        root.right.left = new Node(6);
        root.right.right = new Node(7);

        System.out.println("Inorder Traversal:");
        inorder(root);

        System.out.println("\nPreorder Traversal:");
        preorder(root);

        System.out.println("\nPostorder Traversal:");
        postorder(root);
    }
}
