import React, { useState } from "react";
import { LandingNav } from "../../components/Nav";
import styles from "./styles.module.css";
import { startup } from "../../assets";
import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer";
import Options from "../../components/Options/Options";
const Ci = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const ctaText =
    "Join the Ubulu Africa community and be part of our mission to help organizations realize growth, become and remain the most relevant organization they can be, and even surpass that. Our team of hands-on entrepreneurs collaborates with industry leaders to harness their corporate influence to create successful ventures and generate new revenue streams.";
  return (
    <>
      <LandingNav />
      <main className={styles.App}>
        {/* Hero Section */}
        <div className={styles.hero} id="home">
          <img
            src="https://res.cloudinary.com/dtfvdjvyr/image/upload/v1699604777/charles-forerunner-3fPXt37X6UQ-unsplash_ajosll.jpg"
            alt="Hero-img"
          />
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

                <div>
                  <Link to="/talent">
                    <button className="talentbtn">Join us</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <center>
          <div className="container">
            <h2 style={{ color: "#242436" }}>
              Ubulu Africa Corporate Innovation Programs
            </h2>
          </div>
        </center>

        <br />
        <br />
        <br />
        <br />
        <div>
          <div className="container">
            <div className="row">
              <h2 style={{ color: "#242436" }}>Executive Insights</h2>
              <br />
              <br />
              <br />
              <p style={{ color: "#9E9E9E" }}>
                Discover the cutting-edge trends, powerfully efficient growth
                strategies, and precision tools perfectly tailored for your
                company's needs. Immerse yourself in a bespoke and
                results-driven session brimming with practical insights curated
                exclusively for your industry. Ubulu Africa's leadership team
                will guide you through an intensive 2-hour session, complete
                with an interactive Q&A.
              </p>
            </div>
          </div>
        </div>
        <br />
        <br />

        <div style={{ backgroundColor: "#F7F8F8" }}>
          <br />
          <div className="container">
            <div className="row  col-lg-12">
              <h2 style={{ color: "#242436" }}>Excubation</h2>
              <br />

              <br />
              <br />
              <p style={{ color: "#9E9E9E" }}>
                Corporate partners can accelerate the development of an MVP or
                internal team through our flagship startup development program.
                Over three months of mentor support, events, and
                experimentation, your product and team will develop at the speed
                of a startup, making them better suited to make an impact in
                your company.
              </p>
            </div>
          </div>
          <br />
        </div>
        <br />
        <br />
        <br />
        <br />

        <div>
          <div className="container">
            <div className="row">
              <h2 style={{ color: "#242436" }}>Corporate Venturing</h2>
              <br />
              <br />
              <br />
              <p style={{ color: "#9E9E9E" }}>
                Corporate partners can engage startups in the Ubulu Africa
                startup development program for corporate innovation which opens
                up opportunities for a long-term strategic partnerships (e.g.,
                acquisition, franchising/licensing the startup’s technology,
                etc.). You will have the chance to engage with, learn from, and
                provide expertise to our startup companies in a mutually
                beneficial engagement.
              </p>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div style={{ backgroundColor: "#F7F8F8" }}>
          <br />
          <div className="container">
            <div className="row  col-lg-12">
              <h2 style={{ color: "#242436" }}>Pilot Acceleration </h2>
              <br />

              <br />
              <br />
              <p style={{ color: "#9E9E9E" }}>
                Are you looking to tap into world-leading innovation to address
                your business pain points? Look no further. At Ubulu Africa, we
                empower corporate partners by addressing their strategic
                challenges and goals in a game-changing way.
              </p>
              <br />

              <br />
              <br />

              <br />
              <br />
            </div>
          </div>
          <br />
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
      </main>
      <Footer />
    </>
  );
};

export default Ci;
