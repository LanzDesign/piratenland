import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from './Navbar.js';
import Footer from './footer.js';
import '../css/root.css'
import '../css/form.css'

export const Sendmail = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_56izaef', 'template_jqpz45e', form.current, 'axyLFDKUbPkAcHwUj')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="mailFormular">
        <div>
          <h2>Kontaktformular</h2><br/><br/>
          <form ref={form} onSubmit={sendEmail}>
              <label>Name: </label>
              <input type="text" name="user_name" /><br></br>
              <label>Telefonnummer: </label>
              <input type="tel" name="user_number" /><br></br>
              <label>Email: </label>
              <input type="email" name="user_email" /><br></br>
              <label>Nachricht: </label>
              <textarea name="message" /><br></br>
              <input type="submit" value="Senden" />
          </form>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        </div>
      </div>
      <Footer />
    </div>
  );
};
