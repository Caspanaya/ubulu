import React from "react";
import styles from "../ci/styles.module.css";
import { startup } from "../../assets";
import { LandingNav } from "../../components/Nav";
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
        <div></div>
      </main>
    </>
  );
};
export default Talent;
