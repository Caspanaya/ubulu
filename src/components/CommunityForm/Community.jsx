import React, { useState } from "react";

import { FaTimes } from "react-icons/fa";
// import axios from "axios"
const Community = ({ closeModal }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [consent, setConsent] = useState(false);

  const handleConsentChange = () => {
    setConsent(!consent);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!consent) {
      // Check if the user has given consent
      alert("Please agree to the consent statement.");
      return;
    }

    // Rest of your form submission logic
    // ...

    // After successful submission, clear the form fields and consent state
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    setConsent(false);
  };
  //   };

  return (
    <div className="contact-form-container">
      {/* <FaTimes onClick={closeModal} /> */}
      <br />
      <br />
      <form onSubmit={""}>
        <div className="form-group">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="First name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="name"
            id="email"
            name="email"
            placeholder="Last Name"
            autoComplete="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="subject"
            name="phonenumber"
            placeholder="Phone Number"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="url"
            id="subject"
            name="email"
            placeholder="Email Address"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="url"
            id="subject"
            name="email"
            placeholder="Company/School name"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            required
          />
        </div>
        <div className="form-group">
          <div>
            <label htmlFor="jobInterest" style={{ color: "#ffff" }}>
              What are you applying as?
            </label>

            <select
              id="mySelect"
              style={{
                padding: "5px",
                fontSize: "14px",
                backgroundColor: "",
                width: "100%",
                color: "1b1b1b",
              }}
            >
              <option>Select</option>
              <option> Innovator </option>
              <option> Founder </option>
              <option>Investor / VC </option>
              <option> Professional (Corporate) </option>
              <option>Academia (Student, Lecturer, etc)</option>
              {/* <option>Other </option> */}
            </select>
          </div>
        </div>
        <div className="form-group">
          <div>
            <label htmlFor="jobInterest" style={{ color: "#ffff" }}>
              Why would you like to join the Ubulu Africa community ?
            </label>

            <select
              id="mySelect"
              style={{
                padding: "5px",
                fontSize: "14px",
                backgroundColor: "",
                width: "100%",
              }}
            >
              <option>Select</option>
              <option>Corporate Innovation</option>
              <option>Corporate Innovation</option>
              <option>Investments</option>
              <option>Networking</option>
              <option>Events </option>
              <option>Partnerships</option>
              <option>Contents and Learning </option>
              <option>Broadcasting Your Work </option>
              <option>Fundraising</option>
              <option>Event Speaker</option>
              <option>Acceleration Program</option>
              <option>Fundraising</option>
              <option>Office Space</option>
              <option>Recruitment Support</option>
              {/* <option> Other</option> */}
            </select>
          </div>
        </div>
        <div className="form-group">
          <div>
            <label htmlFor="jobInterest" style={{ color: "#fff" }}>
              How did you hear about us?
            </label>

            <select
              id="mySelect"
              style={{
                padding: "5px",
                fontSize: "14px",
                backgroundColor: "",
                width: "100%",
              }}
            >
              <option>Select</option>
              <option> Google </option>
              <option>LinkedIn</option>
              <option>Instagram</option>
              <option>X (formerly Twitter) </option>
              <option>Ubulu Africa member / ambassador </option>
              {/* <option>Other (Type your answer)</option> */}
            </select>
          </div>
        </div>
        <div className="form-group">
          <textarea
            id="message"
            name="message"
            placeholder="Anything else you want to tell us?"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            required
          />
        </div>
        <div className="form-group ">
          <div className="row">
            <label className="col-lg-2 col-sm-2">
              <input
                type="checkbox"
                checked={consent}
                onChange={handleConsentChange}
              />
            </label>
            <p
              className="col-lg-10 col-sm-2"
              style={{ fontSize: "10px", color: "#fff" }}
            >
              {" "}
              By submitting this form, you agree to allow us to store your
              information and contact you as part of our future program
              initiatives.
            </p>
          </div>
        </div>
        <button onClick={closeModal} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Community;
