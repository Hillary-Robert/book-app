import { useState } from 'react'
import './HeroSection.css'
import BookList from '../BookList/BookList.jsx'

export const HeroSection = () => {
  const [query, setQuery] = useState('')
  const [books, setBooks] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [count, setCount] = useState(15)

  const handleSearch = async () => {
    if (!query.trim()) {
      return setError('Please enter a book search')
    }

    setLoading(true)
    setError('')
    setCount(15)

    try {
      const response = await fetch(`https://openlibrary.org/search.json?q=${query}&limit=30`)
      if (!response.ok) throw new Error("Book search Failed")
      const data = await response.json()

      if (data.docs.length === 0) {
        setError('No books found. Try another search.')
      } else {
        setBooks(data.docs.filter(book => book.cover_i))
      }
    } catch (error) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleShowMore = () => {
    setCount(prev => prev + 15)
  }

  return (
    <>
      <section className='hero-section'>
        <header>
          <div className='title-text'>
            <h1>Discover Your Next Favorite Book 📚</h1>
            <p>Whether you're chasing a new adventure, revisiting an old favorite, or discovering a hidden gem — search, explore, and save the stories that move you.</p>
          </div>

          <div className='search-container'>
            <input
              type="text"
              placeholder='Search by book title or author'
              className='search-input'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
            <button className='search-button' onClick={handleSearch}>
              Search
            </button>
          </div>
        </header>

      </section>

      {loading && <p style={{ textAlign: 'center', marginTop: '2rem' }}>Loading...</p>}
      {error && <p style={{ textAlign: 'center', color: 'red', marginTop: '2rem' }}>{error}</p>}

      {!loading && !error && books.length > 0 && (
        <>
          <h2 style={{ textAlign: 'center', fontSize: '1.8rem', margin: '2rem 0' }}>Search Results 📚</h2>
          <BookList books={books.slice(0, count)} />

          {count < books.length && (
            <div className="show-more-container">
              <button onClick={handleShowMore} className="show-more-button">
                Show More
              </button>
            </div>
          )}
        </>
      )}
    </>
  )
}
