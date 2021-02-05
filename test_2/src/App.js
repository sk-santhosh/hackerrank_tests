import React, { useState } from "react";
import "./App.css";
import "h8k-components";

import Articles from "./components/Articles";

const title = "Sorting Articles";

function App({ articles }) {
  const [sortBy, setSortBy] = useState(0);
  const sort = () => {
    if (sortBy === 0) {
      return articles.sort((a, b) => {
        return b.upvotes - a.upvotes;
      });
    } else {
      return articles.sort((a, b) =>
        new Date(b.date) > new Date(a.date)
          ? 1
          : new Date(a.date) > new Date(b.date)
          ? -1
          : 0
      );
    }
  };
  articles = sort();

  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-row align-items-center justify-content-center my-20 navigation">
        <label className="form-hint mb-0 text-uppercase font-weight-light">
          Sort By
        </label>
        <button
          data-testid="most-upvoted-link"
          className="small"
          onClick={() => setSortBy(0)}
        >
          Most Upvoted
        </button>
        <button
          data-testid="most-recent-link"
          className="small"
          onClick={() => setSortBy(1)}
        >
          Most Recent
        </button>
      </div>
      <Articles articles={articles} />
    </div>
  );
}

export default App;
