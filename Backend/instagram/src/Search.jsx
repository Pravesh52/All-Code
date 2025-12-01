
import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

const Search = ({ closeSearch }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (value) => {
    setQuery(value);

    if (!value.trim()) {
      setResults([]);
      return;
    }

    try {
      let res = await axios.post(`http://localhost:4000/search?q=${value}`);
      setResults(res.data.msg);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="search-overlay" onClick={closeSearch}></div>

      {/* LEFT SLIDE PANEL */}
      <div className="search-panel">

        <h2>Search</h2>

        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
        />

        <div className="divider"></div>

        <div className="results-box">
          {query.length === 0 ? (
            <p className="recent">Recent</p>
          ) : results.length === 0 ? (
            <p className="no-user">No user found</p>
          ) : (
            results.map((user, index) => (
              <div className="search-item" key={index}>
                <div className="info">
                  <strong>{user.name}</strong>
                  <span>{user.email}</span>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </>
  );
};

export default Search;
