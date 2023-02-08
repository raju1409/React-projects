import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./ContactMe.css"

function ContactMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_295w3hm",
        "template_taad4yi",
        form.current,
        "9vUKmXxpXBmt1I3Wn"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <center>
        <form ref={form} onSubmit={sendEmail}>
          <label>Your Name</label><br></br>
          <input type="text" name="user_name" /><br></br>
          <label>Your Email</label><br></br>
          <input type="email" name="user_email" /><br></br>
          <label>Message</label><br></br>
          <textarea name="message" /><br></br>
          <input type="submit" value="Send" />
        </form>
      </center>
    </div>
  );
}

export default ContactMe;
