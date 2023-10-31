import React from "react";
import styles from "../ci/styles.module.css";
import { startup } from "../../assets";
import Community from "../../components/CommunityForm/Community";
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

                <h2> Join the Ubulu Africa community</h2>
                <p>
                  Whether you're a corporation looking for innovation, a startup
                  looking for a boost, or a VC looking to meet great startups,
                  we're the right place for you.
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
              Want to Join Our Community?
            </h2>
            <p>
              Apply today to become a member of our exclusive global network
            </p>
          </center>
          <br />
          <br />
        </div>
        <div>
          <Community />
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
