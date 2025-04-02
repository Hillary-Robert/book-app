import React, { useEffect, useState } from 'react'
import { HeroSection } from '../components/HeroSection/HeroSection'
import BookList from '../components/BookList/BookList'
import { Link } from 'react-router-dom'



const Home = () => {
  const [suggestedBooks, setSuggestedBooks] = useState([])

  useEffect(() => {
    const fetchSuggested = async () => {
      try {
        const res = await fetch('https://openlibrary.org/search.json?subject=love&fiction&limit=8')
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


      <section className="about" style={{display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center", gap: "1rem", padding: '0 5rem',  margin: "4rem 0",  flexDirection: "row"}}>

        <div className="video-container" style={{width: "100%"}}>
          
          <iframe width="750" height="450" src="https://www.youtube.com/embed/jdjYt7DFsZg?si=3-v5yy9iYVMxiuOv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    
        <div style={{display: "flex", flexDirection:"column", justifyContent: "center", alignItems: "center", textAlign: "center", gap: "4rem"}} className='about-section'>
        <h1>We Are Here To Better Your Experience</h1>

          <p> 
            Book Search Library is a simple online tool that helps   you find books quickly and easily. Whether you're looking for a classic novel, a modern bestseller, or a hidden gem, our app connects you with the right titles using real-time search from the Open Library. <br />With just a few clicks, you can explore book covers, descriptions, and more — all in one place. We believe that everyone should have easy access to books, and we’ve made it our goal to make book discovery fast, fun, and accessible to all. <br /> 
            <spa> 
              <Link to={"/about"} style={{color: "#BD8E49", textDecoration: "none", fontWeight: "bold"}}>Read more...
              </Link> 
            </spa>
          </p>
          
        </div> 


      </section>

      <section >
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', textAlign: "center", marginBottom: "2rem"}}> Suggested Books 📚</h2>

        {suggestedBooks.length > 0 ? (
          <BookList books={suggestedBooks} />
        ) : (
          <p>Loading suggestions...</p>
        )}
      </section>


      <section>

        

        


      </section>
    </>
  )
}

export default Home