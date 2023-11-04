import React, { useState } from "react";
import styles from "../ci/styles.module.css";
import { LandingNav } from "../../components/Nav";
import { ReactComponent as Mail } from "../../assets/Mail-Icon.svg";
import { ReactComponent as Twitter } from "../../assets/Twitter-Icon.svg";
import { ReactComponent as Linkedin } from "../../assets/LinkedIn-Icon.svg";
import { ReactComponent as Instagram } from "../../assets/Instagram-Icon.svg";
import { ReactComponent as SendMail } from "../../assets/Send-Mail-Icon.svg";
import Title from "../../components/Title";
import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer";
const Contact = () => {
  return (
    <>
      <LandingNav />
      <main className={styles.bodyapp}>
        <div className={styles.hero} id="home">
          <img
            src="https://res.cloudinary.com/dtfvdjvyr/image/upload/v1698973459/programs_5_hkbdhq.png"
            alt="Hero-img"
          />
          <div className={styles.wrapper}>
            <div className={styles.hero_content}>
              <div className={styles.content}>
                {/* <h1>Ubulu Africa</h1> */}

                <h2>Let's talk </h2>
                <p>
                  Ready to learn how we can jump start your new ideas or enhance
                  and grow your existing digital products?
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.contact_section} id="contact-us">
          <div className={styles.wrapper}>
            <Title title="Let’s connect" subtitle="Contact us" />
            <div className={styles.contact_content}>
              <div className={styles.social}>
                <Link className={styles.links} to="/sociallinks" />
                <p>Social links</p>
                <div className={styles.social_links}>
                  <Link to="https://twitter.com/UbuluAfrica" target="_blank">
                    <Twitter className={styles.iconlinks} />
                  </Link>
                  <Link
                    to="https://www.linkedin.com/company/ubulu-africa"
                    target="_blank"
                  >
                    <Linkedin />
                  </Link>
                  <Link
                    to="https://www.instagram.com/Ubulu_africa"
                    target="_blank"
                  >
                    <Instagram />
                  </Link>
                </div>
              </div>
              <div className={styles.email}>
                <Mail className={styles.links} />
                <p>Email Address:</p>
                <p>hello@ubulu.africa</p>
              </div>
              <div className={styles.contact_form}>
                <div className={styles.form_group}>
                  <label htmlFor="message">message</label>
                  <textarea placeholder="Your message" id="message"></textarea>
                </div>
                <div className={styles.form_group}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email address"
                  />
                </div>
                <button>
                  {" "}
                  <SendMail className={styles.send_mail} /> Send message{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
