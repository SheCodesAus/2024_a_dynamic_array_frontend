import "../components/Contact/ContactPage.css";
import ContactFormWithHelp from "../components/Forms/ContactFormWithHelp.jsx";
import contact from "../assets/Illustrations/contact.svg";

function ContactPage() {
  return (
    <div className="main-container contactus-main-container">
        <section className="contact-us-header">

            <h1>Contact Us</h1>
            <p>
                Reach out to us with any questions or inquiries – we're here to help!
            </p>
        </section>
        <section className="contact-form-container">
            <div className="contact-form">
                <ContactFormWithHelp/>
            </div>
            <div className="contact-form-illustration">
                <div className="diversitech-3">

                    <img className="contactus-page-image" src={contact} alt="Diversitech name logo"/>
                </div>
            </div>
        </section>
    </div>
  );
}

export default ContactPage;
