#include <iostream>
#include <vector>
#include <string>
#include <sstream>
#include <map>
using namespace std;

int N, K;
vector<vector<vector<char>>> cube(6);
vector<string> instructions;

bool isSolved(const vector<vector<char>>& face) {
    char c = face[0][0];
    for (int i = 0; i < N; ++i)
        for (int j = 0; j < N; ++j)
            if (face[i][j] != c)
                return false;
    return true;
}

bool anyFaceSolved(const vector<vector<vector<char>>>& cubeState) {
    for (int i = 0; i < 6; ++i)
        if (isSolved(cubeState[i]))
            return true;
    return false;
}

void rotateRow(vector<vector<char>>& face, int row, string dir) {
    vector<char> temp = face[row];
    if (dir == "left") {
        for (int i = 0; i < N - 1; ++i)
            face[row][i] = temp[i + 1];
        face[row][N - 1] = temp[0];
    } else {
        for (int i = N - 1; i > 0; --i)
            face[row][i] = temp[i - 1];
        face[row][0] = temp[N - 1];
    }
}

void rotateCol(vector<vector<char>>& face, int col, string dir) {
    vector<char> temp(N);
    for (int i = 0; i < N; ++i)
        temp[i] = face[i][col];
    if (dir == "up") {
        for (int i = 0; i < N - 1; ++i)
            face[i][col] = temp[i + 1];
        face[N - 1][col] = temp[0];
    } else {
        for (int i = N - 1; i > 0; --i)
            face[i][col] = temp[i - 1];
        face[0][col] = temp[N - 1];
    }
}

void applyInstruction(vector<vector<vector<char>>>& cubeState, const string& instr) {
    stringstream ss(instr);
    string a, b, c;
    ss >> a >> b >> c;

    map<string, int> faceMap = {
        {"base", 0}, {"back", 1}, {"top", 2},
        {"front", 3}, {"left", 4}, {"right", 5}
    };

    if (faceMap.count(a)) {
        int face = faceMap[a];
        int idx = stoi(b) - 1;
        if (c == "left" || c == "right")
            rotateRow(cubeState[face], idx, c);
        else
            rotateCol(cubeState[face], idx, c);
    }
}

bool tryWithout(int skipIdx, const vector<vector<vector<char>>>& originalCube) {
    vector<vector<vector<char>>> tempCube = originalCube;
    for (int i = 0; i < K; ++i) {
        if (i == skipIdx) continue;
        applyInstruction(tempCube, instructions[i]);
    }
    return anyFaceSolved(tempCube);
}

bool isFaultyCube(const vector<vector<vector<char>>>& originalCube) {
    for (int f = 0; f < 6; ++f) {
        for (int i = 0; i < N; ++i) {
            for (int j = 0; j < N; ++j) {
                char orig = originalCube[f][i][j];
                for (char c = 'A'; c <= 'Z'; ++c) {
                    if (c == orig) continue;
                    vector<vector<vector<char>>> tempCube = originalCube;
                    tempCube[f][i][j] = c;
                    for (int k = 0; k < K; ++k) {
                        if (tryWithout(k, tempCube)) {
                            cout << "Faulty\n" << instructions[k] << endl;
                            return true;
                        }
                    }
                }
            }
        }
    }
    return false;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    cin >> N >> K;
    cube = vector<vector<vector<char>>>(6, vector<vector<char>>(N, vector<char>(N)));

    for (int f = 0; f < 6; ++f)
        for (int i = 0; i < N; ++i)
            for (int j = 0; j < N; ++j)
                cin >> cube[f][i][j];

    cin.ignore();
    instructions.resize(K);
    for (int i = 0; i < K; ++i)
        getline(cin, instructions[i]);

    for (int i = 0; i < K; ++i) {
        if (tryWithout(i, cube)) {
            cout << instructions[i] << endl;
            return 0;
        }
    }

    if (!isFaultyCube(cube))
        cout << "Not Possible" << endl;

    return 0;
}