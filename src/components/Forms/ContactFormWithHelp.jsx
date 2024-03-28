import { useState } from "react";
import "../Forms/ContactFormWithHelp.css";
import "../Forms/SignupForm.css";
import "../Buttons/CtaButton.css";
import EmailDropdownMenu from "../EmailDropdown/EmailDropdownMenu";

function ContactFormWithHelp() {
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [helpFormData, setHelpFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });

  const handleChange = (e) => {
    setHelpFormData({ ...helpFormData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!helpFormData.name) {
      window.alert("Please enter your name ");
      return;
    }
    if (!helpFormData.email) {
      window.alert("Please enter your email ");
      return;
    }
    if (!helpFormData.message) {
      window.alert("Please enter a message ");
      return;
    }
    if (!helpFormData.subject) {
      window.alert("Please select a subject ");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("https://formspree.io/f/mqkryavr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(helpFormData),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setHelpFormData({
          name: "",
          email: "",
          message: "",
          subject: "",
        });
      } else {
        console.error("Error submitting form:".error);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <section className="contact-with-help-container">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={helpFormData.name}
              onChange={handleChange}
            ></input>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              placeholder="Enter your email address"
              value={helpFormData.email}
              onChange={handleChange}
            ></input>
          </div>
          <div>
            <EmailDropdownMenu
              name="subject"
              id="subject"
              setSelectedSubject={(subject) =>
                setHelpFormData({ ...helpFormData, subject })
              }
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Type your enquiry here"
              value={helpFormData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div>
            <button className="userbutton">Submit</button>
          </div>
          <div className="submit-success">
            {submitSuccess && (
              <p> Thanks for reaching out! Your message was sent.</p>
            )}
          </div>
        </form>
      </section>
    </>
  );
}
export default ContactFormWithHelp;
