import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section id='contact'>
    <span className='contactHeading'>Contact Me</span>

    <div className='contactBlock'>
            
        <input type='text' className="contactItem" id="contactName" placeholder="Name"></input>
        
        <input type='text' className="contactItem" id="contactMail" placeholder="mailId" ></input>
        
        <textarea rows="2" cols="20" resize='none' className="contactItem" id="contactMsg" placeholder="Message" ></textarea>
        
        <button id='contactBtn' className="contactItem">Submit</button>
    </div>
</section>
  );
};

export default Contact;
