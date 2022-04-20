import React, { useContext, useRef } from "react";
import "./contact.css";
import Phone from "../../images/phone.png";
import Email from "../../images/email.png";
import Address from "../../images/address.png";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";


export default function Contact() {
  const formRef =  useRef();
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const handleSubmit = (e) => {
    e.prevenDefault();
    emailjs
      .sendForm(
        "service_k81v5lh",
        "template_on6ln8e",
        formRef.current,
        "XhP8j-EEsN6CplqCq"
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
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +91 7017025022
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              rs3949427@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              159-D krishna Nagar,Mathura
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What's your story?</b>Get in touch.Always available for
            freelancing if the right project comes along me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit} >
            <input style={{backgroundColor : darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor : darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor : darkMode && "#333"}} type="email" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor : darkMode && "#333"}} name="message" rows="5" placeholder="Message"></textarea>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
