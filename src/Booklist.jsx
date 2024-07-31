import React, { useState, useEffect } from "react";

const Booklist = () => {
  const [book, setBooks] = useState([]);
  const [loading, setLoading] = useState([true]);
  const [error, setError] = useState([null]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:5000/");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setBooks(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchBooks;
  }, []);

  if (loading) return <div> Loading ...</div>;
  if (error) return <div> Error fetching data</div>;

  return (
    <div className="book__wrapper">
      {book.map((book) => (
        <div key={book.id} className="book-item">
          <h2>{book.title}</h2>
          <p> Number of Username: {book.Username.length}</p>
        </div>
      ))}
    </div>
  );
};

export default Booklist;
