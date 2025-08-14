import java.util.*;

class BoardGame {

    static class Cell {
        int x, y, moves;
        Cell(int x, int y, int moves) {
            this.x = x;
            this.y = y;
            this.moves = moves;
        }
    }

    static boolean isValid(int x, int y, int M, int N, int[][] grid, boolean[][] visited) {
        return x >= 0 && x < M && y >= 0 && y < N && grid[x][y] == 0 && !visited[x][y];
    }

    static int minMoves(int[][] grid, int[] src, int[] dst, int[] moveRule) {
        int M = grid.length;
        int N = grid[0].length;

        // Directions as per move rule
        int[][] directions = {
            { moveRule[0],  moveRule[1] },   // forward
            { moveRule[1], -moveRule[0] },   // right (90° clockwise)
            {-moveRule[1],  moveRule[0] },   // left (90° counterclockwise)
            {-moveRule[0], -moveRule[1] }    // backward (180° rotation)
        };

        boolean[][] visited = new boolean[M][N];
        Queue<Cell> queue = new LinkedList<>();
        queue.offer(new Cell(src[0], src[1], 0));
        visited[src[0]][src[1]] = true;

        while (!queue.isEmpty()) {
            Cell curr = queue.poll();

            if (curr.x == dst[0] && curr.y == dst[1]) {
                return curr.moves;
            }

            for (int[] dir : directions) {
                int nx = curr.x + dir[0];
                int ny = curr.y + dir[1];

                if (isValid(nx, ny, M, N, grid, visited)) {
                    visited[nx][ny] = true;
                    queue.offer(new Cell(nx, ny, curr.moves + 1));
                }
            }
        }

        return -1; // Destination unreachable
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int M = sc.nextInt();
        int N = sc.nextInt();
        int[][] grid = new int[M][N];

        for (int i = 0; i < M; i++)
            for (int j = 0; j < N; j++)
                grid[i][j] = sc.nextInt();

        int[] src = { sc.nextInt(), sc.nextInt() };
        int[] dst = { sc.nextInt(), sc.nextInt() };
        int[] moveRule = { sc.nextInt(), sc.nextInt() };

        System.out.println(minMoves(grid, src, dst, moveRule));
    }
}
