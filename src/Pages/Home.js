import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from '../Assests/BannerImage.jpg'
import '../Styles/Home.css'

function Home() {
  return (
   <div className='home' style={ {backgroundImage: `url(${BannerImage})`}}> 
      <div className='headerContainer' >

          <h1> Suubi's Restuarnat </h1>

          <p1>Healthy Food makes a healthy you</p1>

          <p>
            <Link to="/menu">
              <button> ORDER NOW </button>
            </Link>
          </p> 
          
      </div>
   </div>
  )
}

export default Home
