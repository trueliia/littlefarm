import React from 'react';

const ContactForm = () =>{
    return (
        <form className="form" action="https://formspree.io/f/mnqepqvn" method="POST">
            <label>
                Your Email: 
                <input type="email" name="_replyto" placeholder="example@domen.ca"/>
            </label>
            <br/>
            <label>
                Your Order:
                <textarea name="message" placeholder="Insert your grocery list here..." />
            </label>
            <button className="formButton" type="submit">SUBMIT</button>
        </form>
        
    )
}
export default ContactForm;