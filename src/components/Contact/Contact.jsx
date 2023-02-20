import React from "react";
import "./Contact.css";
import { store } from "../../store/store";
function Contact() {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">
            {store.contact.map((contact) => {
              return (
                <div className="contact__card" key={contact.id}>
                  <i className="bx bx contact__card-icon"></i>

                  <h3 className="contact__card-title">{contact.email}</h3>
                  <span className="contact__card-data">{contact.data}</span>

                  <a href={contact.link} className="contact__button">
                    {contact.buttonTxt}
                    <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="contact__content">
        <h3 className="contact__title">Text me your goals about project</h3>
      </div>
    </section>
  );
}

export default Contact;
