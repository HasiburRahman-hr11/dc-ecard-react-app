import React, { useState } from "react";
import "./ContactSection.css";

const ContactSection = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmission = (e)=>{
    e.preventDefault();
    if(!firstName || !lastName || !email || !mobile || !message){
      return alert('Please Fill The Form.')
    }
    const formData = {
      name: firstName + " " + lastName,
      email: email,
      phone: mobile,
      message: message
    }
    console.log(formData);
    setFirstName("")
    setLastName("")
    setEmail("")
    setMobile("")
    setMessage("")
  }
  return (
    <section className="bg-dark py-18 text-white contact-section" id="contactSection">
      <div className="max-1920">
        <div className="container">
          <div className="flex justify-between contact-wrapper">
            <div className="contact-left">
              <div className="section-header">
                <h2>Reach Out To Me</h2>
                <p className="section-description">
                  Delving into the realm of Design Excellence, our forte lies in
                  the art of sculpting interiors that epitomize nothing short of
                  perfection. Within our dedicated team thrives a passion for
                  manifesting.
                </p>
              </div>
              <ul className="contact-list">
                <li className="flex align-start">
                  <div className="contact-icon rounded-full flex justify-center align-center">
                    <img
                      src="images/contact-phone-icon.webp"
                      alt="Phone Icon"
                      className="w-full object-contain h-auto"
                    />
                  </div>
                  <div className="contact-list-text">
                    <span className="uppercase">Phone Numbers</span>
                    <p>
                      <a
                        href="tel:+911244018123"
                        target="_blank"
                        rel="noreferrer"
                      >
                        +91 124 401 8123,
                      </a>
                      <a
                        href="tel:+911244018625"
                        target="_blank"
                        rel="noreferrer"
                      >
                        +91 124 401 8625
                      </a>
                    </p>
                  </div>
                </li>
                <li className="flex align-start">
                  <div className="contact-icon rounded-full flex justify-center align-center">
                    <img
                      src="images/contact-mail-icon.webp"
                      alt="Email Icon"
                      className="w-full object-contain h-auto"
                    />
                  </div>
                  <div className="contact-list-text">
                    <span className="uppercase">Email Address</span>
                    <p>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="mailto:contactus@designcell.in"
                      >
                        contactus@designcell.in,{" "}
                      </a>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="mailto:contactus@designcell.in"
                      >
                        contactus@designcell.in
                      </a>
                    </p>
                  </div>
                </li>
                <li className="flex align-start">
                  <div className="contact-icon rounded-full flex justify-center align-center">
                    <img
                      src="images/contact-location-icon.webp"
                      alt="Email Icon"
                      className="w-full object-contain h-auto"
                    />
                  </div>
                  <div className="contact-list-text">
                    <span className="uppercase">Address</span>
                    <p>
                      <a
                        href="https://www.google.com/maps"
                        target="_blank"
                        rel="noreferrer"
                      >
                        B-86, 3rd floor, Anand Vihar, Delhi, 110092{" "}
                      </a>
                      <br />
                      <a
                        href="https://www.google.com/maps"
                        target="_blank"
                        rel="noreferrer"
                      >
                        B-86, 3rd floor, Anand Vihar, Delhi,
                      </a>
                    </p>
                  </div>
                </li>
              </ul>
              <div className="contact-arrow">
                <img src="images/contact-down-arrow.webp" alt="Down Arrow" />
              </div>
            </div>
            <div className="contact-right">
              <div className="contact-form bg-white">
                <form className="w-full block" onSubmit={handleFormSubmission}>
                  <div className="flex justify-between">
                    <div className="input-box">
                      <label htmlFor="firstName" className="uppercase">
                        First name*
                      </label>
                      <input
                        type="text"
                        placeholder="Your First Name"
                        id="firstName"
                        required
                        value={firstName}
                        onChange={(e)=> setFirstName(e.target.value)}
                      />
                    </div>
                    <div className="input-box">
                      <label htmlFor="lastName" className="uppercase">
                        Last name*
                      </label>
                      <input
                        type="text"
                        placeholder="Your Last Name"
                        id="lastName"
                        required
                        value={lastName}
                        onChange={(e)=> setLastName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="input-box">
                    <label htmlFor="emailAddress" className="uppercase">
                      E-mail*
                    </label>
                    <input
                      type="email"
                      placeholder="Your Email Address"
                      required
                      id="emailAddress"
                      value={email}
                      onChange={(e)=> setEmail(e.target.value)}
                    />
                  </div>
                  <div className="input-box">
                    <label htmlFor="mobileNumber" className="uppercase">
                      Mobile*
                    </label>
                    <input
                      type="tel"
                      placeholder="Your Mobile Number"
                      required
                      id="mobileNumber"
                      value={mobile}
                      onChange={(e)=> setMobile(e.target.value)}
                    />
                  </div>
                  <div className="input-box">
                    <label htmlFor="messageBox" className="uppercase">
                      Type YOur Query *
                    </label>
                    <textarea
                      name=""
                      id="messageBox"
                      placeholder="Please Type Your Message"
                      value={message}
                      onChange={(e)=> setMessage(e.target.value)}
                    ></textarea>
                  </div>
                  <div>
                    <button type="submit" className="submit-form">Submit Now</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
