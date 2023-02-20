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
                  <i className={`bx ${contact.className} contact__card-icon`}></i>

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

          <form className="contact__form">

              <div className="contact__form-div">
                  <label className="contact__form-tag">Email</label>
                  <input
                      type="email"
                      name="email"
                      placeholder="Insert your email"
                      className="contact__form-input"
                  />
              </div>

              <div className="contact__form-div">
                  <label className="contact__form-tag">Name</label>
                  <input
                      type="text"
                      name="name"
                      placeholder="Insert your name"
                      className="contact__form-input"
                  />
              </div>

              <div className="contact__form-div">
                  <label className="contact__form-tag">Project</label>
                  <textarea
                      cols="30"
                      name="project"
                      rows="10"
                      placeholder="Write your project goals"
                      className="contact__form-input"
                  ></textarea>
              </div>
          </form>
      </div>
    </section>
  );
}

export default Contact;
