import React, { useState } from "react";
import "./ContactForm.css";
import { FaTimes } from "react-icons/fa";
// import axios from "axios"
const ContactForm = ({ closeModal }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     const formData = {
  //       name,
  //       email,
  //       subject,
  //       message,
  //     };
  //     try {
  //       const response = await axios.post(
  //         "https://swapxpress.onrender.com/api/v1/contact/create",
  //         formData
  //       );

  //       if (response.status === 200) {
  //         toast.success("Your response has been submitted", {
  //           position: "top-right",
  //           autoClose: 3000,
  //         });

  //         // Clear form fields
  //         setName("");
  //         setEmail("");
  //         setSubject("");
  //         setMessage("");
  //       } else {
  //         console.log(response.statusText);
  //         alert("An error occurred. Please try again later.");
  //       }
  //     } catch (error) {
  //       console.error(error);
  //       alert("An error occurred. Please try again later.");
  //     }
  //   };

  return (
    <div className="contact-form-container">
      <FaTimes onClick={closeModal} />
      <br />
      <br />
      <form onSubmit={""}>
        <div className="form-group">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
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
            name="subject"
            placeholder="Phone number"
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
            name="Linkedin"
            placeholder="Linkedin Profile Link"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            required
          ></input>
        </div>

        <div className="form-group">
          <div>
            <label htmlFor="jobInterest" style={{ color: "#ffff" }}>
              What skill do you have?
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
              <option>Backend Engineer</option>
              <option>Frontend Engineer</option>
              <option> Web Developer </option>
              <option>Marketing</option>
              <option>UI/UX designer</option>
              <option>Research & Development</option>
              <option>Software developer or engineer</option>
              <option>QA Engineer </option>
              <option>Media Outreach Coordinator </option>
              <option>Customer success & Support Associate</option>
              <option>Product Marketing </option>
              <option>Copywriter</option>
              <option>Sales</option>
              <option>other</option>
            </select>
          </div>
          <br />
          <div className="form-group">
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              required
            />
          </div>
        </div>

        <button onClick={closeModal} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
