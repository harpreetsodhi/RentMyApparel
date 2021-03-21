//Author - Shivani Sharma
import React , { useState }from "react";
import "../css/contact.css";

const Contact = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    let response = await fetch("http://rent-my-apparel-backend.herokuapp.com/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
    return (
      <div
        className="p-5 text-center bg-contact-image"
        style={{ backgroundImage: "url(phone.jpg)" }}
      >
        <form id="contact-form" onSubmit={handleSubmit} action="/submit" method= "POST" >
          <h3 className="text-center">Contact Us</h3>
          <div className="form-group text-left">
            <label>
              <strong>Name</strong>
            </label>
            <input type="text" className="form-control" placeholder="Name" id="name"/>
          </div>
  
          <div className="form-group text-left">
            <label>
              <strong>Email Address</strong>
            </label>
            <input type="email" className="form-control" placeholder="Email" id="email" />
          </div>
  
          <div className="form-group text-left">
            <label>
              <strong>Message</strong>
            </label>
            <input rows="3" className="form-control" placeholder="Message" id="message" />
          </div>
  
          <button type="submit" className="btn btn-dark"> {status}
            
          </button>
        </form>
      </div>
    );
  
};

export default Contact;