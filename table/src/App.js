import React, { useState } from "react";

function App() {
  const initialData = [
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" },
  ];

  const [data, setData] = useState(initialData);
  const [sortBy, setSortBy] = useState(null);

  const sortData = (key) => {
    const sortedData = [...data].sort((a, b) => {
      if (a[key] === b[key]) {
        return sortBy === "date"
          ? new Date(b.date) - new Date(a.date)
          : b.views - a.views;
      }
      return sortBy === "date"
        ? new Date(b.date) - new Date(a.date)
        : b[key] - a[key];
    });
    setData(sortedData);
    setSortBy(key);
  };

  return (
    <div>
      <h1>Date and Views Table</h1>
      <button onClick={() => sortData("date")}>Sort by Date</button>
      <button onClick={() => sortData("views")}>Sort by Views</button>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.date}</td>
              <td>{row.views}</td>
              <td>{row.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
