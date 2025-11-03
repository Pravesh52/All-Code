import java.util.*;

public class D {
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

        // Normalize edges so smaller node comes first
        for (int i = 0; i < E; i++) {
            if (current[i][0] > current[i][1]) {
                int temp = current[i][0];
                current[i][0] = current[i][1];
                current[i][1] = temp;
            }
            if (expected[i][0] > expected[i][1]) {
                int temp = expected[i][0];
                expected[i][0] = expected[i][1];
                expected[i][1] = temp;
            }
        }

        // Map current edges to indices
        Map<String, Integer> currentMap = new HashMap<>();
        for (int i = 0; i < E; i++) {
            String key = current[i][0] + "-" + current[i][1];
            currentMap.put(key, i);
        }

        // Build permutation from expected edges using currentMap
        int[] permutation = new int[E];
        for (int i = 0; i < E; i++) {
            String key = expected[i][0] + "-" + expected[i][1];
            if (!currentMap.containsKey(key)) {
                // Edge missing -> invalid input, print -1
                System.out.println(-1);
                return;
            }
            permutation[i] = currentMap.get(key);
        }

        // Count number of disjoint cycles in permutation
        boolean[] visited = new boolean[E];
        int cycles = 0;
        for (int i = 0; i < E; i++) {
            if (!visited[i]) {
                int j = i;
                while (!visited[j]) {
                    visited[j] = true;
                    j = permutation[j];
                }
                cycles++;
            }
        }

        // Minimum rotations = E - cycles
        int rotations = E - cycles;
        System.out.println(rotations);
    }
}
