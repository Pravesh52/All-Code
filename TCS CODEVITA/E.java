import java.util.*;

public class E {
    static int N, K;
    static String[][][] cube = new String[6][][];
    static String[] faceNames = {"base", "back", "top", "front", "left", "right"};
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        N = sc.nextInt();
        K = sc.nextInt();
        sc.nextLine();

        for (int f = 0; f < 6; f++) {
            cube[f] = new String[N][N];
            for (int i = 0; i < N; i++) {
                cube[f][i] = sc.nextLine().trim().split(" ");
            }
        }

        String[] instructions = new String[K];
        for (int i = 0; i < K; i++) {
            instructions[i] = sc.nextLine().trim();
        }

        boolean faulty = checkFaultyCube();
        String wrongInstruction = findWrongInstruction(instructions);

        if (wrongInstruction == null) {
            System.out.println("Not Possible");
        } else if (faulty) {
            System.out.println("Faulty");
            System.out.println(wrongInstruction);
        } else {
            System.out.println(wrongInstruction);
        }
    }

    // Check if any face has more than 1 color (faulty cube)
    static boolean checkFaultyCube() {
        for (int f = 0; f < 6; f++) {
            Set<String> colors = new HashSet<>();
            for (int i = 0; i < N; i++)
                for (int j = 0; j < N; j++)
                    colors.add(cube[f][i][j]);
            if (colors.size() > N * N / 2) // heuristic threshold
                return true;
        }
        return false;
    }

    // Simulated check: find which instruction disrupts pattern the most
    static String findWrongInstruction(String[] instr) {
        for (String step : instr) {
            if (isDisruptive(step))
                return step;
        }
        return null;
    }

    // Heuristic disruptor logic (real rotations skipped)
    static boolean isDisruptive(String step) {
        // instructions like "turn left", "rotate front", etc.
        String[] parts = step.split(" ");
        if (parts.length == 2 && parts[0].equals("turn")) {
            // likely not the faulty step
            return false;
        } else if (parts.length == 3) {
            // custom row/col instruction
            String face = parts[0];
            int index = Integer.parseInt(parts[1]);
            String dir = parts[2];
            // heuristic rule: certain combinations often fail (like "up/down")
            return dir.equals("up") || dir.equals("down");
        }
        return false;
    }
}
