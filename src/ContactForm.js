import React from 'react'
import './ContactForm.css'


export default function ContactForm() {
    return (
        <>
            <div className='container'>
                <div className='contact-form'>
                    <h1 className='contact-us-heading'>Contact Us</h1>
                    <form >
                        <div className='form-elements'>

                            <input type="text" id="name" name="name" placeholder='name*' required />
                            <br />
                            <input type="tel" id="phone" name="phone" placeholder='Mobile' required />
                            <br />
                            <input type="email" id="email" name="email" placeholder='Email*' required />
                            <br />
                            <textarea id="message" name="message" placeholder='Message*' required></textarea>
                        </div>

                        <button type="submit">Submit</button>
                    </form>
                </div>


            </div>


        </>

    )
}
