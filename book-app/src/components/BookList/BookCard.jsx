import React from 'react'
import { useNavigate } from 'react-router-dom'
import './BookCard.css'

const BookCard = ({ book }) => {

  // console.log(book)
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/book/${book.key.split('/').pop()}`)
  }

  const coverId = book.cover_i
  const coverUrl = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
    : 'https://via.placeholder.com/150x200?text=No+Cover'
    

  return (
    <div className="book-card" onClick={handleClick}>
      <img src={coverUrl} alt={book.title} />
      <h3>{book.title}</h3>
      <p>{book.author_name}</p> 
      <p>Published: {book.first_publish_year}</p> 
      <p>Edition: {book.edition_count}</p>  
    </div>
  )
}

export default BookCard
