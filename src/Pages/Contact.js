import React from 'react'
import ImageContact from '../Assests/Combo.png'
import '../Styles/Contact.css'

function Contact() {
  return (
    <div className='contact'>
      <div className='leftside' style={{backgroundImage: `url(${ImageContact})`}}></div>
      <div className='rightside'>
        <h1>Contact Us</h1>

        <form>
            <label htmlFor='name'> Full Name </label>
            <input name='name' placeholder='Enter full name ...' type='text'></input>
            <label htmlFor='email'> Email </label>
            <input name='email' placeholder='Enter your Email ...' type='email'></input>
            <label htmlFor='message'> Your Message to us. </label>
            <textarea 
                rows='5'
                placeholder='Enter your message ...'
                name='message'
                required></textarea>

            <button type='submit'> Send Message </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
