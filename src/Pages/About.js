import React from 'react'
import HealthyFood from '../Assests/Grilled Chicken.jpeg'
import '../Styles/About.css'

function About() {
  return (
    <div className='about' style={{backgroundImage: `url(${HealthyFood})`}}>

        <div className='aboutTop'></div>
       
        <div className='middle'>
            <div className='aboutBottom'>
            <h1>About Us</h1>
            <p>
                "Welcome to Suubi's Restaurant, an epicurean haven where the art of gastronomy converges with a dedication to wellness. Our establishment is a vibrant celebration of culinary excellence, meticulously crafting each dish to harmonize both taste and health. Embracing the ethos of vitality, we curate a menu that champions the freshest, locally sourced ingredients, fostering a symbiotic relationship between flavor and nourishment. At Suubi's Restaurant, we believe in the alchemy of natural, unadulterated elements, transforming them into culinary masterpieces that elevate the senses and invigorate the body. Step into our welcoming space and embark on a journey of delectable and wholesome indulgence, a place where every bite embodies the fusion of taste, health, and satisfaction."
            </p>
        </div>
        </div>

    </div>
  )
}

export default About
