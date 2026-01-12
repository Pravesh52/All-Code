import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedIds, setSelectedIds] = useState([]);

  useEffect(() => {
    fetchData(page);
  }, [page]);

  const fetchData = async (pageNo) => {
    try {
      const res = await axios.get(
        `https://api.artic.edu/api/v1/artworks?page=${pageNo}&limit=10`
      );
      setData(res.data.data);
      setTotalPages(res.data.pagination.total_pages);
    } catch (err) {
      console.error("API Error:", err);
    }
  };

  const handleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const isChecked = (id) => selectedIds.includes(id);

  return (
    <div className="app-container">
      <h2>Art Institute Gallery</h2>

      <table>
        <thead>
          <tr>
            <th>Select</th>
            <th>Title</th>
            <th>Origin</th>
            <th>Artist</th>
            <th>Start Year</th>
            <th>End Year</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td align="center">
                <input
                  type="checkbox"
                  checked={isChecked(item.id)}
                  onChange={() => handleSelect(item.id)}
                />
              </td>
              <td>{item.title}</td>
              <td>{item.place_of_origin || "-"}</td>
              <td>{item.artist_display || "-"}</td>
              <td>{item.date_start || "-"}</td>
              <td>{item.date_end || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Prev
        </button>

        <span>
          Page {page} of {totalPages}
        </span>

        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>

      <p className="selected-count">
        Selected Rows Count: <b>{selectedIds.length}</b>
      </p>
    </div>
  );
};

export default App;
