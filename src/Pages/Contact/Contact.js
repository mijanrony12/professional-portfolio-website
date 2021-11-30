import React from 'react';
import './Contact.css'
import Header from '../Homes/Header/Header';
import emailjs from 'emailjs-com';

const Contact = () => {
    const sendEmail = e => {
        e.preventDefault()
        emailjs.sendForm('service_xg2v5pe', 'template_axenqh1', e.target, 'user_mfSGUP0SfVJ5dfjZbaXaC')
            .then(res => {
                console.log(res)
                if (res.text == 'OK')
                {
                    alert('your message already send')
                }
            })
            .catch(err => console.log(err));
        e.target.value = ' '
   }
    return (
        <>
            
            <div className="form">
                   <h1 >Contact With Me</h1>
                <form onSubmit={sendEmail}>
                           <div>
                                 <label htmlFor="name">Your Name</label>
                                 <input type="text" name="name" placeholder="Your Name" />
                           </div>
                           <div>
                                   <label for="email">Your Email</label>
                                   <input type="email" name="email" placeholder="your Email"/>
                          </div>
                            <div>
                                   <label htmlFor="message">Details Here</label>
                                   <textarea type="text" name="message" rows="4"  placeholder="what's on your mind"/>
                           </div>
                    
                          <button type="submit">Confirm Send</button>
                </form>
                
              </div>
        </>
    );
};

export default Contact;