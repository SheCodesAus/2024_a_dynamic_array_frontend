import "../components/Contact/ContactPage.css";
import ContactFormWithHelp from "../components/Forms/ContactFormWithHelp.jsx";

function ContactPage() {
  return (
    <>
      <section className="contact-us-header">
        <h1>Contact Us</h1>
        <p>
          Reach out to us with any questions or inquiries – we're here to help!
        </p>
      </section>
      <section className="contact-form-container">
        <div className="contact-form">
          <ContactFormWithHelp />
        </div>
        <div className="contact-form-illustration">
          <p>An illustration goes here</p>
        </div>
      </section>
    </>
  );
}
export default ContactPage;
