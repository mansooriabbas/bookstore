import React, { useState } from "react";
import "./Main.css";
import { books } from "../../assets/books.json";

export const Main = () => {
  const [showBooks, setShowBooks] = useState(false);
  const handleShowBooks = () => {
    setShowBooks( p => !p);
  };

  return (
    <div id="main-content">
      <section className="cta">
        <h1> Trending books</h1>
        <button onClick={handleShowBooks}>Expand</button>
      </section>
      {showBooks === true && (
        <div className="box-container">
          {books.map((book) => (
            <div key={book.title} className="box">
              <h4>{book.title}</h4>
              <p>{book.author}</p>
              <p>{book.genre}</p>
              <p>{book.year_published}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
