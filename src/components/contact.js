import React from "react";
import  "../contact.css";
const Contact = () => {
  return (
    <div
        class="p-5 text-center bg-contact-image"
        style={{ backgroundImage: "url(phone.jpg)" }}
      >
    <form>
        <h3 className="text-center">Contact Us</h3>
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" placeholder="Name" />
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input type="email" className="form-control" placeholder="Email" />
        </div>

        <div className="form-group">
          <label>Message</label>
          <input rows="3" className="form-control" placeholder="Message" />
        </div>

        <button type="submit" className="btn btn-dark">
          Contact Us
        </button>
      
    </form>
  </div>
  );
};

export default Contact;
