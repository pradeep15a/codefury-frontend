import React from 'react'
import Header from '../Header/Header'
import './Contact.css'

export default function Contact() {
  return (
    <div className="contact-main-container">
        <Header heading="Contact Us "
                    details="To get more information about us, feel free to drop a Mail!!"
            />

            {/* Form Section */}
            <div className="contact-form-container">
                <form className="contact-form"
                action="https://formspree.io/f/mlezbdjn"
                method="POST">
                    {/* Email ID Input */}
                    <input
                        type="mail"
                        placeholder='Your Email ID'
                        name='email'
                        className='input-box email-input' />
                    {/* Email Body */}
                    <textarea
                        type="text"
                        placeholder='Your message'
                        name='message'
                        className='input-box body-input' >

                    </textarea>

                    {/* Submit Button */}
                    <button type='submit' className="contact-btn">
                        Send Email
                    </button>
                </form>
            </div>
    </div>
  )
}
