//find the matrix min and max value

// Input: mat[4][4] = {{1, 2, 3, 4},
//                     {25, 6, 7, 8},
//                     {9, 10, 11, 12},
//                     {13, 14, 15, 16}};
// Output: 25, 1

public class Prob10 {
    public static void main(String[] args) {
       int mat[][]= {{1, 2, 3, 4},
                    {25, 6, 7, 8},
                    {9, 10, 11, 12},
                    {13, 14, 15, 16}};
        int max=Integer.MIN_VALUE;
        int min=Integer.MAX_VALUE;

        for(int i=0;i<mat.length;i++)
        {
            for(int j=0;j<mat[i].length;j++)
            {
                if(mat[i][j]>max){
                    max=mat[i][j];
                }
                if(mat[i][j]<min){
                    min=mat[i][j];
                }
            }
        }
        System.out.println(max);
        System.out.println(min);

    }
}
