import { useState } from 'react'
import './HeroSection.css'

export const HeroSection = () => {
  const [query, setQuery] = useState('')
  const [books, setBooks] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSearch = async () => {
    if (!query.trim()) 
      
      return setError('Please enter a book search')

    try {
      const response = await fetch(`https://openlibrary.org/search.json?q=${query}`)
      if (!response.ok) throw new Error("Book search Failed")
      const data = await response.json()
      if (data.docs.length === 0) {
        setError('No books found. Try another search.')
      }

      setBooks(data.docs)
    } catch (error) {
      setError('Something went wrong. Please try again.')
      
    } finally {
      setLoading(false)
    }
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
      {!loading && !error && books.length > 0 && <BookList books={books} />}

    </>
  )
}