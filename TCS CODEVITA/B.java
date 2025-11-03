import java.util.*;

public class B {
    static int N, M;
    static char[][] g;

    static int[] dx = {1, -1, 0, 0};
    static int[] dy = {0, 0, 1, -1};

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        N = sc.nextInt();
        M = sc.nextInt();
        sc.nextLine();

        g = new char[N][M];

        // Read robustly: each input line may have spaces between chars or may be continuous.
        for (int i = 0; i < N; i++) {
            String line = sc.nextLine().trim();
            String[] parts = line.split("\\s+");
            if (parts.length == M) {
                for (int j = 0; j < M; j++) g[i][j] = parts[j].charAt(0);
            } else {
                // assume no spaces, continuous string
                if (line.length() >= M) {
                    for (int j = 0; j < M; j++) g[i][j] = line.charAt(j);
                } else {
                    // fallback: pad with dots (shouldn't normally happen)
                    for (int j = 0; j < M; j++) g[i][j] = (j < line.length() ? line.charAt(j) : '.');
                }
            }
        }

        // We'll first infer rod presence more robustly: some cells marked 'C' may actually
        // also contain a rod passing underneath (or vice versa). We create two boolean maps:
        boolean[][] hasRod = new boolean[N][M];
        boolean[][] hasCable = new boolean[N][M];

        // Basic fill from chars: if char is 'R' -> rod present (and possibly cable under if neighbors suggest),
        // if char is 'C' -> cable present (and possibly rod under if neighbors suggest).
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < M; j++) {
                char ch = g[i][j];
                if (ch == 'R') hasRod[i][j] = true;
                if (ch == 'C') hasCable[i][j] = true;
            }
        }

        // Infer potential rod cells that are marked 'C' (rod passes but cable shown on top)
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < M; j++) {
                if (g[i][j] == 'C') {
                    // if left and right are R, likely a horizontal rod passes through here
                    if (j - 1 >= 0 && j + 1 < M && (g[i][j-1] == 'R') && (g[i][j+1] == 'R')) {
                        hasRod[i][j] = true;
                    }
                    // if up and down are R, likely a vertical rod passes through here
                    if (i - 1 >= 0 && i + 1 < N && (g[i-1][j] == 'R') && (g[i+1][j] == 'R')) {
                        hasRod[i][j] = true;
                    }
                }
                if (g[i][j] == 'R') {
                    // maybe cable passes through but R shown on top
                    if (j - 1 >= 0 && j + 1 < M && (g[i][j-1] == 'C') && (g[i][j+1] == 'C')) {
                        hasCable[i][j] = true;
                    }
                    if (i - 1 >= 0 && i + 1 < N && (g[i-1][j] == 'C') && (g[i+1][j] == 'C')) {
                        hasCable[i][j] = true;
                    }
                }
            }
        }

        // Now: we will count how many distinct rod components are "enclosed" by cable loops.
        // The heuristic: treat cable cells (hasCable==true) as obstacles, and see whether
        // each rod-component can reach the grid boundary by movement through non-cable cells.
        // If a rod-component cannot reach boundary (blocked by cable), we consider it captive
        // and require at least one flip to free it.
        boolean[][] visitedRodComp = new boolean[N][M];
        int captiveCount = 0;

        for (int i = 0; i < N; i++) {
            for (int j = 0; j < M; j++) {
                if (hasRod[i][j] && !visitedRodComp[i][j]) {
                    // BFS over rod-connected cells (we allow movement on cells that contain rod)
                    // but also allow stepping onto adjacent non-cable cells ('.' or cells that don't have cable)
                    // to explore whether that component can reach boundary without crossing cable.
                    Queue<int[]> q = new LinkedList<>();
                    q.add(new int[]{i,j});
                    visitedRodComp[i][j] = true;
                    boolean reachesBoundary = false;

                    while (!q.isEmpty()) {
                        int[] cur = q.poll();
                        int x = cur[0], y = cur[1];
                        if (x == 0 || y == 0 || x == N-1 || y == M-1) reachesBoundary = true;

                        for (int d = 0; d < 4; d++) {
                            int nx = x + dx[d];
                            int ny = y + dy[d];
                            if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
                            if (visitedRodComp[nx][ny]) continue;
                            // We can move if the neighbour cell is NOT a cable cell (i.e., hasCable==false).
                            // Also we prefer to move through cells that either have rod or are empty ('.') or inferred rod.
                            if (!hasCable[nx][ny]) {
                                // allow traversal and mark visited if it's part of this rod component or simply reachable space
                                visitedRodComp[nx][ny] = true;
                                q.add(new int[]{nx, ny});
                            } else {
                                // neighbor has cable on top -> it blocks movement in this heuristic
                            }
                        }
                    } // end BFS

                    if (!reachesBoundary) {
                        // It's enclosed by cable (heuristic), count it
                        captiveCount++;
                    }
                }
            }
        }

        // Output the heuristic captiveCount as minimum flips
        System.out.println(captiveCount);
    }
}
