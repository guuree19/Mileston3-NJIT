import React from "react";
import "./Contact.css";

function Contact() {
// This component renders the "Contact" page
    return (
        <div className="contact_p">
            <h1>Get in touch</h1>
            <form>
                <label for="fname" />
                <br />
                First name:
                <input type="name" />
                <label for="fname" />
                <br />
                Last name:
                <input type="lame" />
                <br />
                <label for="submit" vlue="submit" />
            </form>
        </div>
    );
}

export default Contact;

