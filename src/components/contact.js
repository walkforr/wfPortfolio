import React, { Component } from "react";
import '../contactform.php'

class Contact extends Component {
  render() {
    return (

<div className="contactForm">

<div className="contact">



      <div className="contact-title">
          <h1>Contact</h1>
          <h2>Let me know any questions or inquiries you may have.</h2>
      </div>

      <div className="form">
          <form id="contact-form" method="post" action="contact-form-handler.php">
              <input name="name" type="text" className="form-control" placeholder="Your Name" required/>
              <br/>
              <input name="email" type="email" className="form-control" placeholder="Your Email" required/><br/>

                <textarea name="message" className="form-control" placeholder="Message" rows="4" required></textarea><br/>

                <input type="submit" className="form-control submit" value="SEND MESSAGE"/>


          </form> 
      </div>
      </div>
      </div>

    );
  }
}

export default Contact;
