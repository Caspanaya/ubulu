import React, { useState } from "react";
import styles from "../ci/styles.module.css";
import { LandingNav } from "../../components/Nav";
import { Footer } from "../../components/Footer";
import ReactPlayer from "react-player";
import Title from "../../components/Title";
import Modal from "react-modal";
import ContactForm from "../../components/ContactForm/ContactForm";
import { ReactComponent as Mail } from "../../assets/Mail-Icon.svg";
import { ReactComponent as Twitter } from "../../assets/Twitter-Icon.svg";
import { ReactComponent as Linkedin } from "../../assets/LinkedIn-Icon.svg";
import { ReactComponent as Instagram } from "../../assets/Instagram-Icon.svg";
import { ReactComponent as SendMail } from "../../assets/Send-Mail-Icon.svg";
import { Link } from "react-router-dom";
import ScrollProgram from "../../components/ScrollProgram/ScrollProgram";
import "./Program.css";
const Program = () => {
  const corporate = "https://youtu.be/4pyb_Bg4JdA";
  const building = "https://youtu.be/VCDAzz7pShQ";
  const collaboration = "https://youtu.be/jlXUzvHSoEY";
  const proData = [
    {
      title: "Incubator & Accelerator Programs",
      text: "Discover new horizons with Ubulu Africa's Incubator Programs. We are passionate about nurturing innovation and driving ambitious startups towards success. Our incubation ecosystem is designed to provide you with the resources, mentorship, and networking opportunities needed to thrive.",
      img: "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1699228456/kaleidico-26MJGnCM0Wc-unsplash_qpz8jq.jpg",
      button: "Learn more",
      path: "/accelerator-programs",
    },
    {
      title: "Digital for Development Programs",
      text: "Ubulu Africa, is dedicated to making a profound impact through its Digital for Development Programs. Our mission is to foster growth, innovation, and positive change by providing cutting-edge solutions that harness the full potential of digital technology.",
      img: "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1699228573/ramon-salinero-vEE00Hx5d0Q-unsplash_boz3h8.jpg",
      button: "Learn more",
      path: "",
    },
    {
      title: "Advisory & Consulting Services",
      text: "At Ubulu Africa, we offer tailored Advisory & Consulting Services that drive innovation and bring clarity to complex business challenges. Our team of seasoned experts collaborates closely with your organization to provide strategic insights and actionable solutions. ",
      img: "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1699228956/patrick-perkins-ETRPjvb0KM0-unsplash_1_goswwg.jpg",
      button: "Learn more",
      path: "/consulting-services",
    },

    // Add more card data objects as needed
  ];
  const [readMoreStates, setReadMoreStates] = useState(
    proData.map(() => false)
  );

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
      <main className={styles.bodyapp}>
        <div className={styles.hero} id="home">
          <img
            src="https://res.cloudinary.com/dtfvdjvyr/image/upload/v1699953926/AdobeStock_222682858_Preview-transformed_qizygv.jpg"
            alt="Hero-img"
          />
          <div className={styles.wrapper}>
            <div className={styles.hero_content}>
              <div className={styles.content}>
                <h2>Programs</h2>
                <p>
                  Igniting growth for businesses and organizations through
                  strategic design and implementation, fostering innovation and
                  navigating dynamic landscapes
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
        <section style={{ backgroundColor: "#F7F8F8" }} className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {proData.map((card, index) => (
              <div className="col" key={index}>
                <div className="card shadow-sm">
                  <img className="img_pro" src={card.img} alt={card.title} />
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
      </main>
      <Footer />
    </>
  );
};

export default Program;
