import React from 'react';

const BookDetails = () => {
  const books = [
    { id: 1, title: 'React Essentials', author: 'John Doe', rating: 4.5 },
    { id: 2, title: 'JavaScript Patterns', author: 'Jane Smith', rating: 4.8 },
    { id: 3, title: 'Clean Code', author: 'Robert Martin', rating: 4.9 }
  ];

  return (
    <div className="content-container">
      <h2>Book Details</h2>
      <ul className="item-list">
        {books.map(book => (
          <li key={book.id} className="item-card">
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Rating: {book.rating}/5</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookDetails;
