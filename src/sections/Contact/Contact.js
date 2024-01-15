import React, { useState } from 'react';
import './Contact.css'; 

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });


    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="contact">
            <h2>Contact Me</h2>
            {submitted ? (
                <p>Thank you for your for contacting!</p>
            ) : (
                <form 
                    onSubmit={handleSubmit} 
                    method="POST" 
                    netlify="true" //using netlify to handle contact logic
                    name="contact-form"
                >
                    <input type="hidden" name="form-name" value="contact-form" />
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Your Name" 
                        value={formData.name}
                        onChange={handleChange}
                        required 
                    />
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Your Email" 
                        value={formData.email}
                        onChange={handleChange}
                        required 
                    />
                    <textarea 
                        name="message" 
                        placeholder="Your Message" 
                        value={formData.message}
                        onChange={handleChange}
                        required 
                    ></textarea>
                    <button type="submit">Send Message</button>
                </form>
            )}
        </div>
    );
};

export default Contact;