import React, { useState } from 'react';
import styles from '../../styles/Home.module.css';

const ContactForm = () => { 
    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        dropdown: '',
        date: '',
        time: '',
        phoneNumber: '',
    });

    const handleChange = (e) => {
        setFormState({
            ...formState, 
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/sendEmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formState),
        });
        if(response.ok) {
            console.log('Email Sent');
        } else {
            console.log('Email Not Sent');
        }
    };

    return (
        <div className={`flex flex-col ${styles['contact-form']}`}>
            <h1 className={`${styles['contact-form-title']}`}>ContactForm</h1>
            <form 
                onSubmit={handleSubmit}
                className={`${styles['contact-form-content']}`}
            >
                <div className={`flex flex-col justify-between md:flex-row md:gap-2 ${styles['contact-form-content-name']}`}>
                    <input className={`w-full`} name='firstName' placeholder='First Name' onChange={handleChange} required/>
                    <input className={`w-full mt-2 md:mt-0`} name='lastName' placeholder='Last Name' onChange={handleChange} required/>
                </div>
                <div className={`w-full mt-2 ${styles['contact-form-content-email']}`}>
                    <input className={`w-full`} name='email' type='email' placeholder='Email' onChange={handleChange} required/>
                </div>
                <div className={`w-full mt-2 ${styles['contact-form-content-message']}`}>
                    <textarea className={`w-full h-full`} name='message' placeholder='Message' onChange={handleChange} required/>
                </div>
                <div className={`mt-2 w-full ${styles['contact-form-content-dropdown']}`}>
                    <select className={`w-full md:w-3/6 lg:w-2/6`} name='dropdown' onChange={handleChange} required>
                        <option value="">Select an option</option> 
                        <option value="Catering">Catering</option>
                        <option value="Q & A">Q & A</option>
                        <option value="Other">Other</option>
                    </select>   
                </div>
                <div className={`flex flex-col mt-2 sm:flex-row sm:gap-2 ${styles['contact-form-content-date-time']}`}>
                    <input className={`mt-1 sm:mt-0`} name='date' type='date' onChange={handleChange} required/>
                    <input className={`mt-2 sm:mt-0`} name='time' type='time' onChange={handleChange} required/>
                </div>
                <div className={`mt-2 w-full ${styles['contact-form-content-phonenumber']}`}>
                    <input className={`w-full md:w-3/6 lg:w-2/6`} name='phoneNumber' placeholder='Phone Number' onChange={handleChange} required/>
                </div>
                <div className={`flex w-full justify-center ${styles['contact-form-content-submit']}`}>
                    <div className={`w-fit ${styles['contact-form-content-submit-btn']}`}>
                        <button className={``} type='submit'>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;