import React, { useState } from 'react';
import emailjs from 'emailjs-com';
// import Model from '../model/Model';
import "./contact.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [isSent, setIsSent] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .send(
                'service_ud6hl09', // Replace with your EmailJS service ID
                'template_efvs8g5', // Replace with your EmailJS template ID
                formData,
                'x4Zj6C3Zb81xpeBSm'  // Replace with your EmailJS public key
            )
            .then((result) => {
                console.log('Email sent successfully:', result.text);
                setIsSent(true);
            })
            .catch((error) => {
                console.error('Error sending email:', error);
            });

        // Reset form fields
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
        });
    };

    return (
        <section className="contact container section" id="contact">
            <h2 className="section_title">Get In Touch</h2>

            <div className="contact_container grid">
                <div className="contact_info">
                    <h3 className="contact_title">Let's talk about everything!</h3>
                    <p className="contact_details">Don't like forms? Send me an email. 👋</p>
                    {/* <Model /> */}
                </div>

                <form onSubmit={handleSubmit} className="contact_form">
                    <div className="contact_form-group">
                        <div className="contact_form-div">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="contact_form-input"
                                placeholder="Insert your name"
                                required
                            />
                        </div>

                        <div className="contact_form-div">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="contact_form-input"
                                placeholder="Insert your email"
                                required
                            />
                        </div>
                    </div>

                    <div className="contact_form-div">
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="contact_form-input"
                            placeholder="Insert your subject"
                            required
                        />
                    </div>

                    <div className="contact_form-div contact_form-area">
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            cols="30"
                            rows="10"
                            className="contact_form-input"
                            placeholder="Write your message"
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className="btn">Send Message</button>
                </form>

                {isSent && <p className="success-message">Your message has been sent successfully!</p>}
            </div>
        </section>
    );
};

export default Contact;
