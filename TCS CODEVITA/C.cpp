#include <iostream>
#include <vector>
#include <unordered_map>
#include <array>
using namespace std;

struct Point {
    int x, y;
    bool operator==(const Point &other) const { return x == other.x && y == other.y; }
};

struct PointHash {
    size_t operator()(const Point &p) const {
        return (static_cast<uint64_t>(static_cast<uint32_t>(p.x)) << 32) ^ static_cast<uint32_t>(p.y);
    }
};

struct State {
    int x, y, starId;
    bool operator==(const State &other) const { return x == other.x && y == other.y && starId == other.starId; }
};

struct StateHash {
    size_t operator()(const State &s) const {
        uint64_t h = s.x;
        h = (h << 21) ^ s.y;
        h = (h << 21) ^ s.starId;
        return size_t(h);
    }
};

pair<int,int> find_fall(int x, int y, unordered_map<Point, vector<int>, PointHash> &star_map) {
    for (int yy = y - 1; yy >= 0; yy--) {
        unordered_map<Point, vector<int>, PointHash>::iterator it = star_map.find({x, yy});
        if (it != star_map.end()) {
            return make_pair(x, yy);
        }
    }
    return make_pair(x, 0);
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    vector<long long> inputValues;
    long long val;
    while (cin >> val) {
        inputValues.push_back(val);
    }

    int idx = 0;
    int numStars = static_cast<int>(inputValues[idx++]);
    vector<array<int,4>> lineSegments(numStars);
    for (int i = 0; i < numStars; i++) {
        lineSegments[i][0] = static_cast<int>(inputValues[idx++]);
        lineSegments[i][1] = static_cast<int>(inputValues[idx++]);
        lineSegments[i][2] = static_cast<int>(inputValues[idx++]);
        lineSegments[i][3] = static_cast<int>(inputValues[idx++]);
    }

    int startX = static_cast<int>(inputValues[idx++]);
    int startY = static_cast<int>(inputValues[idx++]);
    int energy = static_cast<int>(inputValues[idx++]);

    unordered_map<Point, vector<int>, PointHash> starMap;
    unordered_map<State, pair<int,int>, StateHash> nextPosition;

    for (int s = 0; s < numStars; s++) {
        int x1 = lineSegments[s][0];
        int y1 = lineSegments[s][1];
        int x2 = lineSegments[s][2];
        int y2 = lineSegments[s][3];

        int dx = (x2 > x1) ? 1 : -1;
        int dy = (y2 > y1) ? 1 : -1;
        int length = abs(x2 - x1);

        if (dy == -1) {
            for (int k = 0; k < length; k++) {
                int x = x1 + dx * k;
                int y = y1 - k;
                starMap[{x, y}].push_back(s);
                nextPosition[{x, y, s}] = make_pair(x + dx, y - 1);
            }
            starMap[{x2, y2}].push_back(s);
        } else {
            for (int k = 0; k < length; k++) {
                int x = x2 - dx * k;
                int y = y2 - k;
                starMap[{x, y}].push_back(s);
                nextPosition[{x, y, s}] = make_pair(x - dx, y - 1);
            }
            starMap[{x1, y1}].push_back(s);
        }
    }

    int currentX = startX;
    int currentY = startY;

    if (starMap.find({currentX, currentY}) == starMap.end()) {
        pair<int,int> fallPos = find_fall(currentX, currentY, starMap);
        currentX = fallPos.first;
        currentY = fallPos.second;
    }

    while (true) {
        if (currentY == 0) break;

        unordered_map<Point, vector<int>, PointHash>::iterator it = starMap.find({currentX, currentY});
        if (it == starMap.end()) {
            pair<int,int> fallPos = find_fall(currentX, currentY, starMap);
            currentX = fallPos.first;
            currentY = fallPos.second;
            continue;
        }

        vector<int> &ids = it->second;

        if (ids.size() == 1) {
            int starId = ids[0];
            unordered_map<State, pair<int,int>, StateHash>::iterator nxtIt = nextPosition.find({currentX, currentY, starId});
            if (nxtIt == nextPosition.end()) {
                pair<int,int> fallPos = find_fall(currentX, currentY, starMap);
                currentX = fallPos.first;
                currentY = fallPos.second;
                continue;
            }
            if (energy == 0) break;
            energy--;
            currentX = nxtIt->second.first;
            currentY = nxtIt->second.second;
        } else {
            long long count = 1LL * currentX * currentY;
            vector<pair<int, pair<int,int>>> nextCandidates;
            nextCandidates.reserve(ids.size());

            for (int starId : ids) {
                unordered_map<State, pair<int,int>, StateHash>::iterator nxtIt = nextPosition.find({currentX, currentY, starId});
                if (nxtIt != nextPosition.end()) {
                    nextCandidates.push_back(make_pair(starId, nxtIt->second));
                }
            }

            if (static_cast<long long>(energy) <= count) {
                if (nextCandidates.empty()) {
                    pair<int,int> fallPos = find_fall(currentX, currentY, starMap);
                    currentX = fallPos.first;
                    currentY = fallPos.second;
                    continue;
                }
                break;
            }

            energy -= static_cast<int>(count);
            if (nextCandidates.empty()) {
                pair<int,int> fallPos = find_fall(currentX, currentY, starMap);
                currentX = fallPos.first;
                currentY = fallPos.second;
                continue;
            }

            int bestX = 0, bestY = -1;
            for (int idx = 0; idx < (int)nextCandidates.size(); idx++) {
                int nx = nextCandidates[idx].second.first;
                int ny = nextCandidates[idx].second.second;
                if (ny > bestY) {
                    bestY = ny;
                    bestX = nx;
                }
            }

            if (energy == 0) break;
            energy--;
            currentX = bestX;
            currentY = bestY;
        }
    }

    cout << currentX << " " << currentY;
    return 0;
}