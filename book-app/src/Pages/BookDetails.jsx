import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AuthModal from '../components/AuthModal/AuthModal'
import './BookDetails.css'
import Favorites from './Favorites'

const BookDetails = () => {
  const { id } = useParams()
  const [bookDetails, setBookDetails] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch(`https://openlibrary.org/works/${id}.json`)
        if (!response.ok) throw new Error('Failed to fetch book details')
        const data = await response.json()
        setBookDetails(data)
      } catch (err) {
        setError('Could not load book details.')
      } finally {
        setLoading(false)
      }
    }

    fetchDetails()
  }, [id])

  if (loading) return <p style={{ textAlign: 'center' }}>Loading book details...</p>
  if (error) return <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>

  return (
    <div className="book-details-container">
      <h1>{bookDetails.title}</h1>

      {bookDetails.covers && (
        <img
          src={`https://covers.openlibrary.org/b/id/${bookDetails.covers[0]}-L.jpg`}
          alt={bookDetails.title}
          className="book-details-cover"
        />
      )}


      {bookDetails.description && (
        <p>
          <strong>Description:</strong>{' '}
          {typeof bookDetails.description === 'string'
            ? bookDetails.description
            : bookDetails.description.value}
        </p>
      )}


      {bookDetails.created.value && (
        <p><strong>Created:</strong> {bookDetails.created.value}</p>
      )}


      {bookDetails.latest_revision && (
        <p><strong>Latest Revision:</strong> {bookDetails.latest_revision}</p>
      )}

      {bookDetails.subjects && (
        <p><strong>Subjects:</strong> {bookDetails.subjects.join(', ')}</p>
      )}

      <div className="book-details-actions">
        <button onClick={() => setShowModal(true)}>
          Read Book 📖
        </button>
      </div>

      {showModal && <AuthModal onClose={() => setShowModal(false)} />}
    </div>
  )
}

export default BookDetails
