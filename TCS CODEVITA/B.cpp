#include <iostream>
#include <vector>
#include <cmath>
using namespace std;

int main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int rows, cols;
    cin >> rows >> cols;
    vector<vector<char>> grid(rows, vector<char>(cols));
    for(int i = 0; i < rows; i++){
        string s;
        cin >> s;
        for(int j = 0; j < cols; j++){
            grid[i][j] = s[j];
        }
    }
    vector<int> horizontalRodRows;
    vector<int> verticalRodCols;
    for(int i = 0; i < rows; i++){
        bool fullRow = true;
        for(int j = 0; j < cols; j++){
            if(grid[i][j] == '.'){
                fullRow = false;
                break;
            }
        }
        if(fullRow) 
            horizontalRodRows.push_back(i);
    }
    for(int j = 0; j < cols; j++){
        bool fullCol = true;
        for(int i = 0; i < rows; i++){
            if(grid[i][j] == '.'){
                fullCol = false;
                break;
            }
        }
        if(fullCol) 
            verticalRodCols.push_back(j);
    }
    vector<vector<bool>> isCross(rows, vector<bool>(cols, false));
    for(int c : verticalRodCols){
        for(int i = 0; i < rows; i++){
            int left = c - 1;
            int right = c + 1;
            if(left >= 0 && right < cols && grid[i][left] == 'C' && grid[i][right] == 'C'){
                isCross[i][c] = true;
            }
        }
    }
    for(int r : horizontalRodRows){
        for(int j = 0; j < cols; j++){
            int up = r - 1;
            int down = r + 1;
            if(up >= 0 && down < rows && grid[up][j] == 'C' && grid[down][j] == 'C'){
                isCross[r][j] = true;
            }
        }
    }
    vector<vector<bool>> hasCable(rows, vector<bool>(cols, false));
    for(int i = 0; i < rows; i++){
        for(int j = 0; j < cols; j++){
            if(grid[i][j] == 'C' || isCross[i][j]){
                hasCable[i][j] = true;
            }
        }
    }
    vector<vector<int>> adjacency(rows * cols);
    int dirRow[4] = {-1, 0, 1, 0};
    int dirCol[4] = {0, 1, 0, -1};
    for(int i = 0; i < rows; i++){
        for(int j = 0; j < cols; j++){
            if(!hasCable[i][j]) continue;
            int id = i * cols + j;
            for(int d = 0; d < 4; d++){
                int ni = i + dirRow[d];
                int nj = j + dirCol[d];
                if(ni >= 0 && ni < rows && nj >= 0 && nj < cols && hasCable[ni][nj]){
                    adjacency[id].push_back(ni * cols + nj);
                }
            }
        }
    }
    int startId = -1;
    for(int i = 0; i < rows && startId == -1; i++){
        for(int j = 0; j < cols; j++){
            int id = i * cols + j;
            if(hasCable[i][j] && adjacency[id].size() == 1){
                startId = id;
                break;
            }
        }
    }
    vector<bool> visited(rows * cols, false);
    vector<int> horizontalSum(rows, 0), verticalSum(cols, 0);
    int currentId = startId;
    int previousId = -1;
    visited[currentId] = true;
    while(true){
        int currentRow = currentId / cols;
        int currentCol = currentId % cols;
        int nextId = -1;
        for(int nb : adjacency[currentId]){
            if(nb != previousId && !visited[nb]){
                nextId = nb;
                break;
            }
        }
        if(isCross[currentRow][currentCol] && previousId != -1){
            int prevRow = previousId / cols;
            int prevCol = previousId % cols;
            int sign = (grid[currentRow][currentCol] == 'C') ? 1 : -1;
            if(prevRow == currentRow){
                verticalSum[currentCol] += ((prevCol < currentCol) ? 1 : -1) * sign;
            } 
            else{
                horizontalSum[currentRow] += ((prevRow < currentRow) ? 1 : -1) * sign;
            }
        }
        if(nextId == -1) break;
        previousId = currentId;
        currentId = nextId;
        visited[currentId] = true;
    }
    long long totalMoves = 0;
    for(int r : horizontalRodRows)
        totalMoves += std::abs((long long)horizontalSum[r]) / 2;
    for(int c : verticalRodCols)
        totalMoves += std::abs((long long)verticalSum[c]) / 2;
    cout << totalMoves;
    return 0;
}