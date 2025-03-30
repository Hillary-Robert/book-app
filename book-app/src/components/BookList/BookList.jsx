import React from 'react'
import BookCard from './BookCard'
import './BookList.css'

const BookList = ({ books }) => {
  const booksWithCovers = books.filter((book) => book.cover_i)

  return (
    <div className="book-list">
      {booksWithCovers.map((book) => (
        <BookCard key={book.key} book={book} />
      ))}
    </div>
  )
}

export default BookList