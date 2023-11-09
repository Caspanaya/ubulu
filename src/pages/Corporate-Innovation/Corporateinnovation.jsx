import React, { useState } from "react";
import styles from "../ci/styles.module.css";
import { LandingNav } from "../../components/Nav";
import { Link } from "react-router-dom";
import { startup } from "../../assets";
import "./corporate.css";

import Modal from "react-modal";
import Options from "../../components/Options/Options";
import { Footer } from "../../components/Footer";
const Corporateinnovation = () => {
  const [fixMore, setFixMore] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const growData = [
    {
      title: "Start Up Boost",
      text: "Ubulu Africa specialize in co-founding and nurturing innovative technology-driven startups. We shall invest in you, we shall work for you, and we shall be by your side at every step of the way until you make a scale-up.",
      img: "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1699229169/microsoft-365-TLiWhlDEJwA-unsplash_qdznje.jpg",
      button: "Learn more",
      path: "/startup",
    },
    {
      title: "Corporate innovation ",
      text: "Our mission is to empower organizations to achieve growth, maximize their relevance, and surpass their potential. We collaborate with industry leaders, combining entrepreneurial expertise with corporate influence to create successful ventures and generate new revenue streams.",
      img: "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1699223453/paolo-margari-KVYPpbpji4E-unsplash_sjkeqi.jpg",
      button: "Learn more",
      path: "/corporate",
    },
    {
      title: "University-Industry Collaboration ",
      text: "At Ubulu Africa, we don't just discuss growth, innovation, and go-to-market strategies; we turn them into reality. Our well-established framework serves as the foundation for creating new ventures and propelling businesses to unparalleled success.",
      img: "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1699228173/cytonn-photography-n95VMLxqM2I-unsplash_fke0zy.jpg",
      button: "Learn more",
      path: "/university",
    },

    // Add more card data objects as needed
  ];
  // Create an array of state values for each card
  const [readMoreStates, setReadMoreStates] = useState(
    growData.map(() => false)
  );

  const toggleReadMore = (index) => {
    // Create a copy of the state array
    const newReadMoreStates = [...readMoreStates];
    // Toggle the state for the clicked card
    newReadMoreStates[index] = !newReadMoreStates[index];
    // Update the state array
    setReadMoreStates(newReadMoreStates);
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
            src="https://res.cloudinary.com/dtfvdjvyr/image/upload/v1699229735/docusign-AKKhZqyLeJ4-unsplash_khesbr.jpg"
            alt="Hero-img"
          />
          <div className={styles.wrapper}>
            <div className={styles.hero_content}>
              <div className={styles.content}>
                <h2> Experience Our Expertise</h2>
                <p>
                  Ubulu Africa aims to drive organizational growth and enhance
                  their relevance. We partner with industry leaders to create
                  successful ventures.
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

        <section style={{ backgroundColor: "#F7F8F8" }}>
          <br />
          <br />

          <center>
            <div className="container">
              <h2 style={{ color: "#242436" }}>Ubulu Africa's Solutions</h2>
            </div>
          </center>
          <br />
          <br />
          <div>
            <div className="container">
              <div className="row"></div>
            </div>
          </div>
          <br />
          <br />
          <section className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {growData.map((card, index) => (
                <div className="col" key={index}>
                  <div className="card shadow-sm">
                    <img
                      width={360}
                      height={225}
                      src={card.img}
                      alt={card.title}
                    />
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
                      <Link to={card.path}>
                        <button>{card.button}</button>
                      </Link>
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
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Corporateinnovation;
