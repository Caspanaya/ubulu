import React from "react";
import styles from "../ci/styles.module.css";
import { startup } from "../../assets";
import ContactForm from "../../components/ContactForm/ContactForm";
import { LandingNav } from "../../components/Nav";
import { Footer } from "../../components/Footer";
const Talent = () => {
  return (
    <>
      <LandingNav />
      <main className={styles.bodyapp}>
        <div className={styles.hero} id="home">
          <img
            src="https://res.cloudinary.com/dtfvdjvyr/image/upload/v1698324391/ubulutalent_obbuhb.png"
            alt="Hero-img"
          />
          <div className={styles.wrapper}>
            <div className={styles.hero_content}>
              <div className={styles.content}>
                {/* <h1>Ubulu Africa</h1> */}

                <h2> Empowering Talent Excellence</h2>
                <p>
                  Ubulu Africa has played a pivotal role in cultivating social
                  and digital skills through our esteemed Talent Pool Program.
                  Additionally, we provide our talented individuals with
                  invaluable networking opportunities that are integral to their
                  professional growth. Our commitment to fostering the
                  advancement of our talents is unwavering and deliberate.
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="container">
          <center>
            {" "}
            <h2 style={{ fontSize: "45px", fontWeight: "700" }}>
              Want to Join Our Talent Pool?
            </h2>
            <p>Fill the Form , and you’ll be the first to know!</p>
          </center>
          <br />
          <br />
        </div>
        <div>
          <ContactForm />
        </div>
        <br />
        <br />
        <br />
        <br />
      </main>
      <Footer />
    </>
  );
};
export default Talent;
