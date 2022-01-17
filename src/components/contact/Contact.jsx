import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.scss";

const Contact = () => {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "edikan.i.bassey@gmail.co",
        "template_o3cs7bp",
        e.target,
        "user_CEAe4JB1lcupf7WBoa1e2"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    alert("Thanks, I'll be in touch soon!");
  }

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <div className="innerContainer">
          <h2>Contact</h2>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder="email" name="user_email" />
            <textarea
              name="message"
              id=""
              placeholder="Type your Message"
            ></textarea>
            <button type="submit" value="Send">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
