import React from "react";
import { LandingNav } from "../../components/Nav";
import styles from "./styles.module.css";
import { startup } from "../../assets";
import { Footer } from "../../components/Footer";
import Options from "../../components/Options/Options";
const Ci = () => {
  const ctaText =
    "Join the Ubulu Africa community and be part of our mission to help organizations realize growth, become and remain the most relevant organization they can be, and even surpass that. Our team of hands-on entrepreneurs collaborates with industry leaders to harness their corporate influence to create successful ventures and generate new revenue streams.";
  return (
    <>
      <LandingNav />
      <main className={styles.App}>
        {/* Hero Section */}
        <div className={styles.hero} id="home">
          <img src={startup} alt="Hero-img" />
          <div className={styles.wrapper}>
            <div className={styles.hero_content}>
              <div className={styles.content}>
                {/* <h1>Ubulu Africa</h1> */}

                <h2> We Ignite Innovation in Corporations</h2>
                <p>
                  It is our mission to help organizations realize growth, become
                  and remain the most relevant organization they can be, and
                  even surpass that. Our team of hands-on entrepreneurs
                  collaborates with industry leaders to harness their corporate
                  influence to create successful ventures and generate new
                  revenue streams.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bginnovate}>
          <center>
            <h2 className={styles.ubuluhead}>
              Ubulu Africa Corporate Innovation Programs
            </h2>
            <br />
            <br />
          </center>

          <div className={styles.container}>
            <div className={styles.card}>
              <h2 className={styles.header}> Executive Insights</h2>
              <p className={styles.text}>
                Gain insights into the latest disruptive trends, the most
                efficient growth methods, and tools suitable for your company.
                This is a tailored and pragmatic session packed with actionable
                data specially crafted for your industry. Ubulu Africa's
                management will lead a 2-hour session and Q&A, inviting experts
                from its global community of entrepreneurs and mentors to
                facilitate a deep dive into the Africa Startup Ecosystem and VC
                trends.
              </p>
            </div>
            <div className={styles.card}>
              <h2 className={styles.header}>Pilot Accelerator</h2>
              <p className={styles.text}>
                Are you looking to tap into world-leading innovation to address
                your business pain points? Corporate partners can provide three
                strategic challenges or goals to Ubulu Africa. Our team will
                source from our global startup network a pre-vetted shortlist of
                startups whose platform, product, or service has the potential
                to address these issues. Finalist candidates will pitch to
                corporate management, who can select 1-3 winners to begin
                cooperative pilots.
              </p>
            </div>
            <div className={styles.card}>
              <h2 className={styles.header}>Corporate Venturing</h2>
              <p className={styles.text}>
                Corporate partners can engage startups in the Ubulu Africa
                startup development program for corporate innovation which opens
                up opportunities for a long-term strategic partnerships (e.g.,
                acquisition, franchising/licensing the startup’s technology,
                etc.). You will have the chance to engage with, learn from, and
                provide expertise to our startup companies in a mutually
                beneficial engagement.
              </p>
            </div>
            <div className={styles.card}>
              <h2 className={styles.header}>Excubation</h2>
              <p className={styles.text}>
                Corporate partners can accelerate the development of an MVP or
                internal team through our flagship startup development program.
                Over three months of mentor support, events, and
                experimentation, your product and team will develop at the speed
                of a startup, making them better suited to make an impact in
                your company.
              </p>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <section className="secop">
          <center>
            <Options />
          </center>
        </section>
        <br />
        <br />

        <div className={styles.about_us_section} id="about-us">
          <div className={styles.video__bg_overlay}></div>
          <video
            className={styles}
            src="https://res.cloudinary.com/dscuc72dw/video/upload/q_auto:good/f_auto/v1675027936/About_us_bg_video_xzcoy7.mp4"
            autoPlay
            loop
            muted
          ></video>
          <div className={styles.wrapper}>
            <div className={styles.about_content_section}>
              <div className={styles.about_content}>
                <center>
                  <div className={styles["cta-section"]}>
                    <h2 className={styles.ubuluhead}>
                      Be Part of Our Community
                    </h2>
                    <p className={styles["cta-text"]}>{ctaText}</p>
                    <button className={styles["cta-button"]}>Join Now</button>
                  </div>
                </center>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Ci;
