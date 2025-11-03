#include <iostream>
#include <vector>
#include <queue>
#include <map>
#include <set>
#include <algorithm>
#include <utility>

using namespace std;

using V = vector<pair<int, int>>;

vector<vector<int>> B(const V& g, int n) {
    vector<vector<int>> a(n + 1);
    for (const auto& e : g) {
        a[e.first].push_back(e.second);
        a[e.second].push_back(e.first);
    }
    return a;
}

vector<int> C(vector<int> c) {
    if (c.empty()) {
        return c;
    }
    
    int m_pos = 0;
    for (size_t i = 1; i < c.size(); ++i) {
        if (c[i] < c[m_pos]) {
            m_pos = i;
        }
    }
    rotate(c.begin(), c.begin() + m_pos, c.end());
    
    vector<int> r;
    r.push_back(c[0]);
    for (int i = c.size() - 1; i > 0; --i) {
        r.push_back(c[i]);
    }
    
    if (lexicographical_compare(r.begin() + 1, r.end(), c.begin() + 1, c.end())) {
        return r;
    }
    return c;
}

void D(int u, int s, vector<int>& t, vector<bool>& v, 
       const vector<vector<int>>& a, set<vector<int>>& y) {
    t.push_back(u);
    v[u] = true;
    
    for (int m : a[u]) {
        if (m == s && t.size() >= 3) {
            y.insert(C(t));
        } else if (!v[m]) {
            D(m, s, t, v, a, y);
        }
    }
    
    t.pop_back();
    v[u] = false;
}

vector<vector<int>> F(const vector<vector<int>>& a, int n) {
    set<vector<int>> s;
    for (int i = 1; i <= n; ++i) {
        vector<int> t;
        vector<bool> v(n + 1, false);
        D(i, i, t, v, a, s);
    }
    return vector<vector<int>>(s.begin(), s.end());
}

V A(const V& g, const vector<int>& p) {
    V h;
    for (const auto& e : g) {
        int u_new = p[e.first];
        int v_new = p[e.second];
        if (u_new > v_new) swap(u_new, v_new);
        h.push_back({u_new, v_new});
    }
    sort(h.begin(), h.end());
    return h;
}

int compute_rotations() {
    int e;
    cin >> e;

    V g1, g2;
    int n = 0;

    for (int i = 0; i < e; ++i) {
        int u, v;
        cin >> u >> v;
        if (u > v) swap(u, v);
        g1.push_back({u, v});
        n = max({n, u, v});
    }
    sort(g1.begin(), g1.end());

    for (int i = 0; i < e; ++i) {
        int u, v;
        cin >> u >> v;
        if (u > v) swap(u, v);
        g2.push_back({u, v});
        n = max({n, u, v});
    }
    sort(g2.begin(), g2.end());

    if (g1 == g2) {
        return 0;
    }

    queue<pair<V, int>> q;
    map<V, int> d;

    q.push({g1, 0});
    d[g1] = 0;

    while (!q.empty()) {
        V g = q.front().first;
        int l = q.front().second;
        q.pop();

        if (g == g2) {
            return l;
        }

        vector<vector<int>> j = B(g, n);
        vector<vector<int>> c = F(j, n);

        for (const auto& y : c) {
            vector<int> p(n + 1);
            for(int i = 0; i <= n; ++i) p[i] = i;

            for (size_t i = 0; i < y.size(); ++i) {
                p[y[i]] = y[(i + 1) % y.size()];
            }

            V h = A(g, p);
            
            if (d.find(h) == d.end()) {
                d[h] = l + 1;
                q.push({h, l + 1});
            }
        }
    }

    return -1; 
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout << compute_rotations() << endl;
    return 0;
}