import React, { useState } from "react";
import styles from "../ci/styles.module.css";
import { LandingNav } from "../../components/Nav";
import { Link } from "react-router-dom";
import { startup } from "../../assets";
import "./corporate.css";
import Modal from "react-modal";
import Options from "../../components/Options/Options";
const Corporateinnovation = () => {
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
      text: "Your offering goes beyond being merely your product or core process. It encompasses more than just a comprehensive set of product or service features and benefits. It involves creating a user and buyer experience that optimally aligns with their rational and emotional needs.",
      img: "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1699229169/microsoft-365-TLiWhlDEJwA-unsplash_qdznje.jpg",
      button: "Learn more",
    },
    {
      title: "Corporate innovation ",
      text: "It all begins with the realization of who your true client is and understanding their genuine needs. We guide you through the intricacies of today's markets, value chains, buying powers, and processes, helping you discover the often latent needs of your actual buyers and users.",
      img: "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1699229735/docusign-AKKhZqyLeJ4-unsplash_khesbr.jpg",
      button: "Learn more",
    },
    {
      title: "University-Industry Collaboration ",
      text: "Enhancing your go-to-market strategy significantly involves making improvements in marketing, sales, and other front-end disciplines within your organization. These are not the easiest areas to change. We leverage all available avenues for change, a matter of critical importance .",
      img: "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1699229933/paico-oficial-ZDYN7azwO6c-unsplash_fqskz4.jpg",
      button: "Learn more",
    },

    // Add more card data objects as needed
  ];
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
        <center>
          <div className="container">
            <h2 style={{ color: "#242436" }}>
              Ubulu Africa Corporate Innovation Programs
            </h2>
          </div>
        </center>

        <br />
        <br />

        <div>
          <div className="container">
            <div className="row">
              <br />
            </div>
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
                    <p className="card-text">{card.text}</p>
                    <button>{card.button}</button>
                    <div className="d-flex justify-content-between align-items-center"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Corporateinnovation;
