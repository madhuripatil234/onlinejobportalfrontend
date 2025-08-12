import React, { Component } from "react";
import Contactservice from "../services/contactservice";

class ContactUsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            subject: "",
            message: "",
            submitted_at: "",
            msg: ""
        };
    }

    sendContactToServer = () => {
        let promise = Contactservice.saveContact(this.state);
        promise
            .then((result) => {
                this.setState({ 
                    msg: result.data.status,
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                    submitted_at: ""
                });
            })
            .catch((err) => {
                this.setState({ msg: err.msg });
            });
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.sendContactToServer();
    };

    render() {
        const { name, email, subject, message, msg, submitted_at } = this.state;

        return (
            <div className="container">
                <div className="contact">
                    <h2>Contact Us</h2>
                </div>

                <form onSubmit={this.handleSubmit}>
                    <label>Name:</label><br />
                    <input type="text" name="name" value={name} onChange={this.handleChange} required /><br /><br />

                    <label>Email:</label><br />
                    <input type="email" name="email" value={email} onChange={this.handleChange} required /><br /><br />

                    <label>Subject:</label><br />
                    <input type="text" name="subject" value={subject} onChange={this.handleChange} /><br /><br />

                    <label>Message:</label><br />
                    <textarea name="message" rows="5" value={message} onChange={this.handleChange} required></textarea><br /><br />

                    <label>Submitted At:</label><br />
                    <input type="datetime-local" name="submitted_at" value={submitted_at} onChange={this.handleChange} /><br /><br />

                    <div className="btn">
                     
                        <button type="submit">Send</button>
                    </div>
                </form>

               
                {msg && <label>{msg}</label>}
            </div>
        );
    }
}

export default ContactUsForm;
