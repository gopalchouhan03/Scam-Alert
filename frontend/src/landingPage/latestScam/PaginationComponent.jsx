import React from "react";

function PaginationComponent () { return (
  <div className="pagination-container" style={{ textAlign: "center", marginTop: "20px" }}>
    <button className="pagination-btn">&#60; Prev</button>
    <button className="pagination-btn active">1</button>
    <button className="pagination-btn">2</button>
    <button className="pagination-btn">3</button>
    <button className="pagination-btn">Next &#62;</button>
    <style jsx>{`
      .pagination-btn {
        margin: 0 5px;
        padding: 8px 12px;
        border: 1px solid #ddd;
        background: white;
        cursor: pointer;
      }
      .pagination-btn.active {
        background: #007bff;
        color: white;
        border-color: #007bff;
      }
      .pagination-btn:hover {
        background: #f1f1f1;
      }
    `}</style>
  </div>
);

}

export default PaginationComponent;
