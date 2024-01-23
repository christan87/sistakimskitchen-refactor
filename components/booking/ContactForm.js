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
            setFormState({
                firstName: '',
                lastName: '',
                email: '',
                message: '',
                dropdown: '',
                date: '',
                time: '',
                phoneNumber: '',
            });
        } else {
            console.log('Email Not Sent');
        }
    };

    return (
        <div className={`flex flex-col w-full md:w-3/4 ${styles['contact-form']}`}>
            <form 
                onSubmit={handleSubmit}
                className={`${styles['contact-form-content']}`}
            >
                <div className={`flex flex-col justify-between md:flex-row md:gap-2 ${styles['contact-form-content-name']}`}>
                    <div className={`w-full ${styles['contact-form-content-group']}`}>
                        <h1>{`(Required)`}</h1>
                        <input className={`w-full`} name='firstName' placeholder='First Name' value={formState.firstName} onChange={handleChange} required/>    
                    </div>
                    <div className={`w-full ${styles['contact-form-content-group']}`}>
                        <h1>{`(Required)`}</h1>
                        <input className={`w-full mt-2 md:mt-0`} name='lastName' placeholder='Last Name' value={formState.lastName} onChange={handleChange} required/>
                    </div>
                </div>
                <div className={`w-full mt-2 ${styles['contact-form-content-email']}`}>
                <div className={`w-full ${styles['contact-form-content-group']}`}>
                    <h1>{`(Required)`}</h1>
                    <input className={`w-full`} name='email' type='email' placeholder='Email' value={formState.email} onChange={handleChange} required/>
                    </div>
                </div>
                <div className={`w-full mt-2 ${styles['contact-form-content-message']}`}>
                <div className={`w-full ${styles['contact-form-content-group']}`}>
                    <h1>{`(Required)`}</h1>
                    <textarea className={`w-full h-full`} name='message' placeholder='Message' value={formState.message} onChange={handleChange} required/>
                    </div>
                </div>
                <div className={`mt-2 w-full ${styles['contact-form-content-dropdown']}`}>
                <div className={`w-full ${styles['contact-form-content-group']}`}>
                    <h1>{`(Required)`}</h1>
                    <select className={`w-full md:w-3/6 lg:w-2/6`} name='dropdown' value={formState.dropdown} onChange={handleChange} required>
                        <option value="">Select an option</option> 
                        <option value="Catering">Catering</option>
                        <option value="Q & A">Q & A</option>
                        <option value="Other">Other</option>
                    </select>  
                    </div> 
                </div>
                <div className={`flex flex-col mt-2 sm:flex-row sm:gap-2 ${styles['contact-form-content-date-time']}`}>
                    {formState.dropdown === 'Catering' && 
                        <div className={`${styles['contact-form-content-group']}`}>
                            <h1>{`Date (Required)`}</h1>
                            <input className={`mt-1 sm:mt-0`} name='date' type='date' value={formState.date} onChange={handleChange} required/>
                        </div>
                    }
                    {formState.dropdown === 'Catering' && 
                        <div className={`${styles['contact-form-content-group']}`}>
                            <h1>{`Time (Required)`}</h1>
                            <input className={`mt-2 sm:mt-0`} name='time' type='time' value={formState.time} onChange={handleChange} required/>
                        </div>
                    }
                </div>
                <div className={`mt-2 w-full ${styles['contact-form-content-phonenumber']}`}>
                <div className={`w-full ${styles['contact-form-content-group']}`}>
                    <h1>{`(Required)`}</h1>
                    <input className={`w-full md:w-3/6 lg:w-2/6`} name='phoneNumber' placeholder='Phone Number' value={formState.phoneNumber} onChange={handleChange} required/>
                    </div>
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