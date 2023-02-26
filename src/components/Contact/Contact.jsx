import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css";
import {store} from "../../store/store";
import Section from "../Section/Section";
import {ReactComponent as SendSvg} from "../../assets/send.svg";

const {contact, input} = store

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_zmughgk',
            'template_i0ud8rm',
            form.current,
            'ytaos4pBNcouwx-cb'
        )
        e.target.reset()
    };

    return (
        <Section
            id="contact"
            title="Get in touch"
            subtitle="Contact Me"
        >
            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Talk to me</h3>

                    <div className="contact__info">
                        {
                            contact.map((contact) => {
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
                            })
                        }
                    </div>
                </div>

                <div className="contact__content">
                    <h3 className="contact__title">Text me your goals about project</h3>

                    <form ref={form} onSubmit={sendEmail} className="contact__form">
                        {
                            input.map(input => {
                                return (
                                    <div className="contact__form-div" key={input.id}>
                                        <label className="contact__form-tag">{input.label}</label>
                                        <input
                                            type={input.type}
                                            name={input.name}
                                            placeholder={input.placeholder}
                                            className="contact__form-input"
                                        />
                                    </div>
                                )
                            })
                        }

                        <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag">Project</label>
                            <textarea
                                name="project"
                                cols="30"
                                rows="10"
                                placeholder="Write your project goals"
                                className="contact__form-input"
                            />
                        </div>

                        <button className="button button--flex">
                            Sand Message
                            <SendSvg/>
                        </button>
                    </form>
                </div>
            </div>
        </Section>
    );
}

export default Contact;
