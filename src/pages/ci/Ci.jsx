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
  const coData = [
    {
      title: "Executive Insights",
      text: "Discover the cutting-edge trends, powerfully efficient growth strategies, and precision tools perfectly tailored for your company's needs. Immerse yourself in a bespoke and results-driven session brimming with practical insights curated exclusively for your industry. Ubulu Africa's leadership team will guide you through an intensive 2-hour session, complete with an interactive Q&A.",
      img: "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1700641323/bruce-mars-GzumspFznSE-unsplash_wbrm0y.jpg",
    },
    {
      title: "Excubation",
      text: "Corporate partners can accelerate the development of an MVP or internal team through our flagship startup development program. Over three months of mentor support, events, and experimentation, your product and team will develop at the speed of a startup, making them better suited to make an impact in your company.",
      img: "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1700641682/adeolu-eletu-E7RLgUjjazc-unsplash_qsfp8j.jpg",
    },

    // Add more card data objects as needed
  ];
  const foData = [
    {
      title: "Corporate Venturing",
      text: "Corporate partners can engage startups in the Ubulu Africa startup development program for corporate innovation which opens up opportunities for a long-term strategic partnerships (e.g., acquisition, franchising/licensing the startup’s technology, etc.). You will have the chance to engage with, learn from, and provide expertise to our startup companies in a mutually beneficial engagement.",
      img: "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1700641903/nastuh-abootalebi-eHD8Y1Znfpk-unsplash_r1s0u6.jpg",
    },
    {
      title: "Pilot Acceleration",
      text: "Are you looking to tap into world-leading innovation to address your business pain points? Look no further. At Ubulu Africa, we empower corporate partners by addressing their strategic challenges and goals in a game-changing way.",
      img: "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1700642223/kelly-sikkema-v9FQR4tbIq8-unsplash_lk1hkz.jpg",
    },
    // Add more card data objects as needed
  ];
  const [readMoreStates, setReadMoreStates] = useState(coData.map(() => false));

  const toggleReadMore = (index) => {
    // Create a copy of the state array
    const newReadMoreStates = [...readMoreStates];
    // Toggle the state for the clicked card
    newReadMoreStates[index] = !newReadMoreStates[index];
    // Update the state array
    setReadMoreStates(newReadMoreStates);
  };
  return (
    <>
      <LandingNav />
      <main className={styles.App}>
        {/* Hero Section */}
        <div className={styles.hero} id="home">
          <img
            src="https://res.cloudinary.com/dtfvdjvyr/image/upload/v1699800523/programs_7_b134co.png"
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
                  {/* <Link to="/community">
                    <button className="talentbtn">Join Us</button>
                  </Link> */}
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

        <section className="container">
          <div className="row row-cols-1 row-cols-sm-2  g-3">
            {coData.map((card, index) => (
              <div className="col" key={index}>
                <div className="card shadow-sm">
                  <img className="img_ci" src={card.img} alt={card.title} />
                  <div className="card-body">
                    <h1>{card.title}</h1>
                    <p>
                      {readMoreStates[index]
                        ? card.text
                        : `${card.text.substring(0, 100)}...`}
                      <span
                        className="pad"
                        onClick={() => toggleReadMore(index)}
                      >
                        {readMoreStates[index] ? "show less" : "read more"}
                      </span>
                    </p>

                    <div className="d-flex justify-content-between align-items-center"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <br />
        <br />
        <section className="container">
          <div className="row row-cols-1 row-cols-sm-2  ">
            {foData.map((card, index) => (
              <div className="col" key={index}>
                <div className="card shadow-sm">
                  <img className="img_ci" src={card.img} alt={card.title} />
                  <div className="card-body">
                    <h1>{card.title}</h1>
                    <p>
                      {readMoreStates[index]
                        ? card.text
                        : `${card.text.substring(0, 100)}...`}
                      <span
                        className="pad"
                        onClick={() => toggleReadMore(index)}
                      >
                        {readMoreStates[index] ? "show less" : "read more"}
                      </span>
                    </p>

                    <div className="d-flex justify-content-between align-items-center"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

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
