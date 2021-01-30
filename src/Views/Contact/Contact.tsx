import React from 'react'
import '../../Styles/css/contact.css'
import {AiOutlineMail} from "react-icons/ai"
import {FiInstagram , FiFacebook, FiTwitter} from 'react-icons/fi'



function Contact() {
    return (
        <div className="row contact-container">
            <div className="col-md-5 contact-left">
                <div className="contact-header">
                    Contact
                </div>
            </div>
            <div className="col-md-7 contact-right">
                <div>
                    <span className="address-header">Address</span>
                    <span className="address-item">Loreum Ipsum Address</span>
                    <span className="address-item">1200, GB/3</span>
                    <span className="address-item">South Africa</span>
                </div>

                <div className="social-div">
                    <FiInstagram className="social-icon"/>
                    <FiFacebook className="social-icon"/>
                    <FiTwitter className="social-icon"/>
                    <AiOutlineMail className="social-icon"/>
                    <AiOutlineMail className="social-icon"/>
                </div>
            </div>
        </div>
    )
}

export default Contact
