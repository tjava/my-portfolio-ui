import React from 'react';
import { Helmet } from 'react-helmet';
import './Contact.css';


export default class Contact extends React.Component{

    render(){
        return (
            <div className="contactContainer">
                <Helmet>
                    <title>Contact</title>
                    <meta name="description" content="A wide variety of skills that I can program in, check them out and see if we match!" />
                </Helmet>
                <p className="contactTitle">Contact</p>
                <p className="contactSubtitle">Send me message.</p>
                <p class="contactErrorMessage">Please enter your name.</p>
                <div className="contactFormWrapper">
                    <div className="contactFormItem">
                        <div className="contactLabels">
                            <label>Name: </label>
                            <input className="contactFormInput" type="text" placeholder="Name..." name="name" />
                        </div>
                        <div className="contactLabels">
                            <label>Email: </label>
                            <input className="contactFormInput" type="email" placeholder="Email..." name="email" />
                        </div>
                        <div className="contactLabels">
                            <label>Subject: </label>
                            <input className="contactFormInput" type="text" placeholder="Subject..." name="subject" />
                        </div>
                        <div className="contactLabels">
                            <label>Message: </label>
                            <textarea className="contactFormInput contact_textarea" cols="30" rows="8" placeholder="Your message..." name="message"></textarea>
                        </div>
                        <div className="contactLabels">
                            <input className="contactFormInput contactSubmit" type="submit" value="Send Message" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}