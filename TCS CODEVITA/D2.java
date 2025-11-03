import java.util.*;

public class D2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int E = sc.nextInt();

        int[][] current = new int[E][2];
        int[][] expected = new int[E][2];

        for (int i = 0; i < E; i++) {
            current[i][0] = sc.nextInt();
            current[i][1] = sc.nextInt();
        }

        for (int i = 0; i < E; i++) {
            expected[i][0] = sc.nextInt();
            expected[i][1] = sc.nextInt();
        }

        // Normalize all edges (smaller first)
        for (int i = 0; i < E; i++) {
            if (current[i][0] > current[i][1]) {
                int tmp = current[i][0];
                current[i][0] = current[i][1];
                current[i][1] = tmp;
            }
            if (expected[i][0] > expected[i][1]) {
                int tmp = expected[i][0];
                expected[i][0] = expected[i][1];
                expected[i][1] = tmp;
            }
        }

        // Map each edge from initial layout to its index
        Map<String, Integer> currentMap = new HashMap<>();
        for (int i = 0; i < E; i++) {
            String key = current[i][0] + "-" + current[i][1];
            currentMap.put(key, i);
        }

        // Create permutation array
        int[] permutation = new int[E];
        Arrays.fill(permutation, -1);
        for (int i = 0; i < E; i++) {
            String key = expected[i][0] + "-" + expected[i][1];
            if (currentMap.containsKey(key)) {
                permutation[i] = currentMap.get(key);
            }
        }

        // Detect cycles safely
        boolean[] visited = new boolean[E];
        int cycles = 0;
        for (int i = 0; i < E; i++) {
            if (!visited[i] && permutation[i] != -1) {
                int j = i;
                while (!visited[j] && permutation[j] != -1) {
                    visited[j] = true;
                    j = permutation[j];
                }
                cycles++;
            }
        }

        // rotations = E - valid_cycles
        int validEdges = 0;
        for (int val : permutation) {
            if (val != -1) validEdges++;
        }

        int rotations = validEdges - cycles;
        System.out.println(rotations);
    }
}

