import React from 'react'
import './HeroSection.css'
import Navbar from '../Navbar/Navbar'

export const HeroSection = () => {
  return (
    
    <section className='hero-section'>

      <header>

        <div className='title-text'>

          <h1>Discover Your Next Favorite Book 📚</h1>

          <p>Whether you're chasing a new adventure, revisiting an old favorite, or discovering a hidden gem — search, explore, and save the stories that move you, powered by Google Books.
          </p>

        </div>


        <div className='search-container'>

          <input type="text" placeholder='search by book, title, author name' className='search-input'/>

          <button className='search-button '>Search</button>

        </div>

        
        
      </header>

   


    </section>
  )
}
