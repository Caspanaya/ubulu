import React from "react";
import styles from "../ci/styles.module.css";
import { startup } from "../../assets";
import "./Talent.css";
import { LandingNav } from "../../components/Nav";
import { Footer } from "../../components/Footer";
const Talent = () => {
  const formUrl = () => {
    const url = "https://forms.gle/XA3XJfoHUUgoTDUW9";
    // Open the URL in a new tab
    window.open(url, "_blank");
  };

  return (
    <>
      <LandingNav />
      <main className={styles.bodyapp}>
        <div className={styles.hero} id="home">
          <img
            src="https://res.cloudinary.com/dtfvdjvyr/image/upload/v1698974247/natalie-pedigo-wJK9eTiEZHY-unsplash_cnnnsc.jpg"
            alt="Hero-img"
          />
          <div className={styles.wrapper}>
            <div className={styles.hero_content}>
              <div className={styles.content}>
                {/* <h1>Ubulu Africa</h1> */}

                <h2>Ubulu Africa Community</h2>
                <p>
                  Welcome to the Ubulu Africa Community, where we bring together
                  corporations in pursuit of innovation, aspiring innovators and
                  startups on a quest for acceleration, and venture capitalists
                  eager to connect with exceptional startups. Our vibrant
                  community is meticulously crafted to provide you with a
                  tailored space for learning and flourishing on your unique
                  journey.
                </p>
                <button className="talent_btn" onClick={formUrl}>
                  Join Us
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
export default Talent;
