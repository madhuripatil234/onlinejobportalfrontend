// src/ContactUsForm.jsx
import React, { Component } from "react";

class ContactUsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      responseMsg: ""
    };
  }

  
    

  render() {
    const { name, email, subject, message, responseMsg } = this.state;

    return (
      <div className="container">
        
        <div className="contact">
        <h2>Contact Us</h2>
        </div>

        <form onSubmit={this.handleSubmit}>
          <label>Name:</label><br />
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            required
          /><br /><br />

          <label>Email:</label><br />
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            required
          /><br /><br />

          <label>Subject:</label><br />
          <input
            type="text"
            name="subject"
            value={subject}
            onChange={this.handleChange}
          /><br /><br />

          <label>Message:</label><br />
          <textarea
            name="message"
            rows="5"
            value={message}
            onChange={this.handleChange}
            required
          ></textarea><br /><br />

          <div className="btn">
          <button><h2>Login</h2></button>
        </div>

        </form>
        {responseMsg && <p>{responseMsg}</p>}
      </div>
    );
  }
}

export default ContactUsForm;
