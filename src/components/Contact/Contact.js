import React from 'react';
import { Helmet } from 'react-helmet';
import email from '../../assets/images/email.svg';
import whatsapp from '../../assets/images/whatsapp.svg';
import github from '../../assets/images/gh.svg';
import facebook from '../../assets/images/fb.svg';
import linkedin from '../../assets/images/linkedin.svg';
import './Contact.css';


export default class Contact extends React.Component{

    state = {
        contact: [
            {id: '1', name: 'Email', link: 'mailto:devtaiwo@gmail.com', value: 'devtaiwo@gmail.com', image: email},
            {id: '2', name: 'Whatsapp', link: 'https://wa.link/2o1yw3', value: '+2348184967181', image: whatsapp},
            {id: '3', name: 'LinkedIn', link: 'https://www.linkedin.com/in/taiwo-hassan-80501b19b/', value: 'Taiwo Haasan', image: linkedin},
            {id: '4', name: 'GitHub', link: 'https://github.com/tjava', value: 'tjava', image: github},
            {id: '5', name: 'Facebook', link: 'https://web.facebook.com/profile.php?id=100009930223777', image: facebook},
        ]
    }

    render(){
        return (
            <div className="container">
                <Helmet>
                    <title>Contact</title>
                    <meta name="description" content="Contact me!" />
                </Helmet>
                <p className="contactTitle">Contact</p>
                <p className="contactSubtitle">Send me message.</p>
                <div className="contactPurpleBackground">
                    <div className="contactListWrapper">
                        {this.state.contact.map((btn, index) =>
                                <a key={btn.id}  href={btn.link} target="_blank" rel="noreferrer">  
                                    <div className="contactItem">
                                        <img src={btn.image} className="contactItemImage" alt={btn.name} />
                                        <div className="contactItemText" >{btn.name}</div>
                                        <div className="contactItemText" >{btn.value}</div>
                                    </div>
                                </a>
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}