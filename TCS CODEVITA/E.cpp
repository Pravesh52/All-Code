#include <iostream>
#include <vector>
#include <string>
#include <sstream>
#include <map>
using namespace std;

int N, K;

// Each face is an N x N matrix of colors (string)
vector<vector<vector<string> > > cube(6, vector<vector<string> >(15, vector<string>(15)));

// Face order: 0-base, 1-back, 2-top, 3-front, 4-left, 5-right
string faceName[6] = {"base", "back", "top", "front", "left", "right"};

map<string, int> faceIndex;

// Copy cube (for simulation)
vector<vector<vector<string> > > copyCube(const vector<vector<vector<string> > > &c) {
    vector<vector<vector<string> > > temp = c;
    return temp;
}

// Rotate a single face clockwise
void rotateFaceCW(vector<vector<string> > &f) {
    vector<vector<string> > tmp = f;
    for (int i = 0; i < N; i++)
        for (int j = 0; j < N; j++)
            f[j][N - i - 1] = tmp[i][j];
}

// Rotate a single face counterclockwise
void rotateFaceCCW(vector<vector<string> > &f) {
    vector<vector<string> > tmp = f;
    for (int i = 0; i < N; i++)
        for (int j = 0; j < N; j++)
            f[N - j - 1][i] = tmp[i][j];
}

// Check if any face is completely uniform (solved)
bool checkSolved(const vector<vector<vector<string> > > &c) {
    for (int f = 0; f < 6; f++) {
        bool ok = true;
        string col = c[f][0][0];
        for (int i = 0; i < N; i++)
            for (int j = 0; j < N; j++)
                if (c[f][i][j] != col) ok = false;
        if (ok) return true;
    }
    return false;
}

// Execute a basic turn or rotation
void performCommand(vector<vector<vector<string> > > &c, string cmd) {
    stringstream ss(cmd);
    string a, b, d;
    ss >> a;
    if (a == "turn") {
        ss >> b;
        if (b == "left") {
            // front->left->back->right->front
            for (int i = 0; i < N; i++) {
                vector<string> tmp = c[3][i];
                c[3][i] = c[5][i];
                c[5][i] = c[1][i];
                c[1][i] = c[4][i];
                c[4][i] = tmp;
            }
            rotateFaceCW(c[2]);
            rotateFaceCCW(c[0]);
        } else if (b == "right") {
            // front->right->back->left->front
            for (int i = 0; i < N; i++) {
                vector<string> tmp = c[3][i];
                c[3][i] = c[4][i];
                c[4][i] = c[1][i];
                c[1][i] = c[5][i];
                c[5][i] = tmp;
            }
            rotateFaceCCW(c[2]);
            rotateFaceCW(c[0]);
        }
    } else if (a == "rotate") {
        ss >> b;
        if (b == "front") {
            // front->base->back->top->front
            for (int j = 0; j < N; j++) {
                string tmp = c[3][N - 1][j];
                c[3][N - 1][j] = c[2][N - 1][j];
                c[2][N - 1][j] = c[1][0][j];
                c[1][0][j] = c[0][N - 1][j];
                c[0][N - 1][j] = tmp;
            }
            rotateFaceCW(c[4]);
            rotateFaceCCW(c[5]);
        } else if (b == "back") {
            for (int j = 0; j < N; j++) {
                string tmp = c[3][0][j];
                c[3][0][j] = c[0][0][j];
                c[0][0][j] = c[1][N - 1][j];
                c[1][N - 1][j] = c[2][0][j];
                c[2][0][j] = tmp;
            }
            rotateFaceCCW(c[4]);
            rotateFaceCW(c[5]);
        } else if (b == "left") {
            for (int i = 0; i < N; i++) {
                string tmp = c[2][i][0];
                c[2][i][0] = c[3][i][0];
                c[3][i][0] = c[0][i][0];
                c[0][i][0] = c[1][i][0];
                c[1][i][0] = tmp;
            }
            rotateFaceCCW(c[3]);
            rotateFaceCW(c[1]);
        } else if (b == "right") {
            for (int i = 0; i < N; i++) {
                string tmp = c[2][i][N - 1];
                c[2][i][N - 1] = c[1][i][N - 1];
                c[1][i][N - 1] = c[0][i][N - 1];
                c[0][i][N - 1] = c[3][i][N - 1];
                c[3][i][N - 1] = tmp;
            }
            rotateFaceCW(c[3]);
            rotateFaceCCW(c[1]);
        }
    }
}

// Simulate sequence of moves up to (skipIdx)
bool simulate(int skipIdx, const vector<string> &instructions) {
    vector<vector<vector<string> > > temp = copyCube(cube);
    for (int i = 0; i < K; i++) {
        if (i == skipIdx) continue;
        performCommand(temp, instructions[i]);
    }
    return checkSolved(temp);
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(0);

    cin >> N >> K;

    faceIndex["base"] = 0;
    faceIndex["back"] = 1;
    faceIndex["top"] = 2;
    faceIndex["front"] = 3;
    faceIndex["left"] = 4;
    faceIndex["right"] = 5;

    for (int f = 0; f < 6; f++) {
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++) {
                cin >> cube[f][i][j];
            }
        }
    }

    string temp;
    getline(cin, temp);
    vector<string> instructions;
    for (int i = 0; i < K; i++) {
        string line;
        getline(cin, line);
        if (line == "") {
            i--;
            continue;
        }
        instructions.push_back(line);
    }

    bool faulty = false;
    string wrong = "";

    // Try removing each instruction
    for (int i = 0; i < K; i++) {
        if (simulate(i, instructions)) {
            wrong = instructions[i];
            break;
        }
    }

    if (wrong == "") {
        cout << "Not Possible" << endl;
        return 0;
    }

    // Basic faulty check: more than one face with >2 colors
    int mixed = 0;
    for (int f = 0; f < 6; f++) {
        string first = cube[f][0][0];
        int diff = 0;
        for (int i = 0; i < N; i++)
            for (int j = 0; j < N; j++)
                if (cube[f][i][j] != first)
                    diff++;
        if (diff > N)
            mixed++;
    }

    if (mixed > 1) {
        cout << "Faulty" << endl;
        cout << wrong << endl;
    } else {
        cout << wrong << endl;
    }

    return 0;
}
