import React, { useEffect, useState } from 'react'
import { HeroSection } from '../components/HeroSection/HeroSection'
import BookList from '../components/BookList/BookList'

const Home = () => {
  const [suggestedBooks, setSuggestedBooks] = useState([])

  useEffect(() => {
    const fetchSuggested = async () => {
      try {
        const res = await fetch('https://openlibrary.org/search.json?subject=fiction&limit=15')
        const data = await res.json()
        
        setSuggestedBooks(data.docs)
      } catch (err) {
        console.error('Failed to fetch suggested books: ', err)
      }
    }

    fetchSuggested()
  }, [])

  return (
    <>
      <HeroSection />

      <section style={{ padding: '2rem' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}> Suggested Books 📚</h2>
        {suggestedBooks.length > 0 ? (
          <BookList books={suggestedBooks} />
        ) : (
          <p>Loading suggestions...</p>
        )}
      </section>
    </>
  )
}

export default Home